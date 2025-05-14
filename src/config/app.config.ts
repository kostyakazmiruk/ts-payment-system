export default () => ({
  RABBIT_MQ_URI: process.env.RABBIT_MQ_URI || 'amqp://localhost:5672',
  PORT: process.env.PORT,
});
