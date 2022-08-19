import express from 'express'

class App {
  app: any

  constructor() {
    this.app = express()
  }
}

export default new App().app
