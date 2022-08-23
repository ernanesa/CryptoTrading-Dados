import app from './App'
import supertest from 'supertest'

test('Deve responder na rota raiz', async () => {
  const result = await supertest(app).get('/')
  expect(result.status).toBe(200)
})
