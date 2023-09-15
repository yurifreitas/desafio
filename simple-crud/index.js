const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const Employee = require('./employeeModel');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: 'root',
    pass: 'admin'
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

async function fetchRandomUsers() {
    const { data } = await axios.get('https://randomuser.me/api/?results=10');
    return data.results;
}
function mapToEmployee(user) {
    return {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        // mapeie outros campos conforme necessário
    };
}

app.get('/populate', async (req, res) => {
    const randomUsers = await fetchRandomUsers();
    const newEmployees = randomUsers.map(mapToEmployee);

    await Employee.insertMany(newEmployees);

    res.status(201).send(newEmployees);
});

// CREATE
app.post('/employee', async (req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).send(newEmployee);
});

// READ
app.get('/employees', async (req, res) => {
    const employees = await Employee.find({});
    res.send(employees);
});

// UPDATE
app.put('/employee/:id', async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.send('Employee updated');
});

// DELETE
app.delete('/employee/:id', async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.send('Employee deleted');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
