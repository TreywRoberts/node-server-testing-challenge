const db = require('./../../data/dbConfig')


function getAll(){
    return db('friends')
}

function getById(id) {
    return db('friends')
      .where('id', id).first()
  }

async function create(friend){
    const [id] = await db('friends').insert(friend)
    return getById(id)
}

async function deleteById(id){
    const deleted = await getById(id)
    await db('friends').where({id}).del()
    return deleted
}


module.exports = {
    getAll, 
    create,
    deleteById
}