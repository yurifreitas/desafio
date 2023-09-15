# Micro-Serviço de Notificações para Funcionários

## Índice
- [Objetivo](#objetivo)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instruções para Configuração e Teste](#instruções-para-configuração-e-teste)
- [Decisões de Design](#decisões-de-design)

---

## Objetivo
O objetivo principal deste projeto é construir um micro-serviço escalável, com balanceamento de carga, cache e monitoramento em tempo real. O serviço foi projetado para enviar notificações fictícias para os funcionários ("Employees") de uma empresa.

---

## Tecnologias Utilizadas
- Node.js
- Express.js
- Redis
- Docker
- Prometheus (para monitoramento)
- Grafana (para visualização de métricas)

---

## Instruções para Configuração e Teste
1. Clone o repositório para sua máquina local.
2. Navegue até o diretório do projeto.
3. Execute `docker-compose up` para inicializar todos os serviços.
4. Abra um navegador e acesse `http://localhost:4000` para testar o serviço de notificações.

---

## Decisões de Design

### Micro-Serviço de Notificação
Utilizei Node.js com Express para criar um serviço leve e eficiente. O endpoint `POST /send-notification` é exposto para aceitar uma lista de IDs de Employee e uma mensagem.

### Escalabilidade e Balanceamento de Carga
Optei por utilizar o nginx como um balanceador de carga devido à sua eficiência e facilidade de configuração. Isso permite que várias instâncias do micro-serviço sejam executadas em paralelo, distribuindo a carga.

### Cache
Para melhorar o desempenho e reduzir o acesso ao banco de dados, integrei o Redis como um sistema de cache. Antes de enviar uma notificação, o sistema verifica se as informações do Employee já estão disponíveis no cache.

### Monitoramento em Tempo Real
Para monitoramento em tempo real, integrei o Prometheus e o Grafana. Isso nos fornece métricas como:
- Número de notificações enviadas por minuto.
- Tempo médio de resposta dos endpoints.
- Quantidade de solicitações atendidas por cada instância do micro-serviço.
