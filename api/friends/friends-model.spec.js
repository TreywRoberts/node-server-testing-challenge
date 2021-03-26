const Friends = require('./friends-model')
const db = require('./../../data/dbConfig')

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
  describe('friends model', ()=>{
    it('sanity test', ()=>{
        expect(true).toBe(true)
    })  
    describe('getAll', ()=>{
        it('returns all in the array', async ()=>{
            const friends = await Friends.getAll()
            expect(friends).toHaveLength(3)
        })
    })
    describe('create function', ()=>{
        let trey
        beforeEach(async () =>{
            trey = {name: 'trey'}
        })
        it('can make a new friend in the database', async ()=>{
            await Friends.create(trey)
            expect(await db('friends')).toHaveLength(4)
        })
        it('can resolbe a new friend', async ()=>{
            const result = await Friends.create(trey)
            expect(result).toMatchObject({id:4, name: 'trey'})
        })
    })
    describe('deleteById', ()=>{
        it('removes friends from list', async ()=>{
            await Friends.deleteById(3)
            expect(await db('friends')).toHaveLength(2)
        })
        it('returns status 200', ()=>{
            
        })
    })
  })