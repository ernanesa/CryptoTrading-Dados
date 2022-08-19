import 'reflect-metadata'
import app from './presentation/http/App'
import { Config } from './config/Config'

const config = new Config()

app.listen(config.get().port, () => {
  console.log(`Serviço de dados subiu na porta ${config.get().port}.`)
})
