const db = require(`../db`);

const getAll = async () => {
  try {
    return await db.any(`SELECT * FROM tasks`);
  } catch (error) {
    console.log('ERROR: ', error);
    return [];
  }

}

const getById = async (id) => {
  try {
    return await db.one(`SELECT * FROM tasks WHERE id=$1`, [id]);
  } catch (error) {
    console.log('ERROR: ', error);
    return {};
  }
}

const createTask = async ({ user_id, priority, task }) => {
  try {
    const newUserTask = await db.one(`
      insert into tasks
        (priority, task, user_id)
      values (1, $2, $3)
     
  
      returning id
    `, [priority, task, user_id]);
    return newUserTask;
  } catch (error) {
    console.log(error);
  }
} 

module.exports = {
  getAll,
  getById,
  createTask,
};