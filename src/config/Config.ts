import dotenv from 'dotenv'
import { injectable } from 'tsyringe'
import { IConfig } from './IConfig'

export enum EnvironmentType {
  Develop = 'development',
  Production = 'production',
}

@injectable()
export class Config {
  private readonly config: IConfig

  constructor() {
    this.config = this.getConfigFromEnv()
  }

  public get(): IConfig {
    return this.config
  }

  private getConfigFromEnv(): IConfig {
    dotenv.config()

    return {
      port: Number(process.env.PORT) ?? 3000,
      serviceName: process.env.SERVICE_NAME ?? 'no-name',
      enviroment: process.env.NODE_ENV ?? 'development',
    }
  }
}
