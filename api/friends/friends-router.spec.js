const router = require('./friends-router')
const request = require('supertest');
const db = require('./../../data/dbConfig');

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  })
  beforeEach(async () => {
    await db('friends').truncate()
    await db.seed.run()
  })
  afterAll(async () => {
    await db.destroy()
  })
  
  it('process.env.DB_ENV must be "testing"', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })