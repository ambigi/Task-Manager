const express=require('express');
const router= express.Router();

const{getAllTasks,createTask,getSingleTask,deleteTask,updateTask}=require('../controllers/tasks')

router.route('/').post(createTask).get(getAllTasks);
router.route('/:id').get(getSingleTask).delete(deleteTask).patch(updateTask)

module.exports=router;