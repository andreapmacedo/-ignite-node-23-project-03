import { app } from './app'
import { env } from './env'

app
  .listen({
    // port: 3000,
    port: env.PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('Server started')
  })
