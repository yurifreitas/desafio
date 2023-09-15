const express = require('express');
const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URI || 'redis://localhost:6379');

const app = express();
app.use(express.json());

// Endpoint para enviar notificações
app.post('/send-notification', async (req, res) => {
  const { employeeIds, message } = req.body;

  // Simulando o envio de notificações
  console.log(`Enviando notificação para os seguintes IDs de empregados: ${employeeIds.join(', ')}`);
  console.log(`Mensagem: ${message}`);

  // Você pode armazenar as informações no cache Redis, se necessário
  await redis.set(`notification:${new Date().toISOString()}`, message);

  res.status(200).send('Notificações enviadas com sucesso');
});

// Porta em que a aplicação estará ouvindo
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Notification service running on http://localhost:${PORT}`);
});
