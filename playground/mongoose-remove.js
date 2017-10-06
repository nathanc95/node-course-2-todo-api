const{ObjectId}=require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {Users}=require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove();
//Todo.findByIdAndRemove();
//
// Todo.findByIdAndRemove('59d73b504fa3ae1a11b97a17').then((todo)=>{
//   console.log(todo);
// });

Todo.findOneAndRemove({_id:'59d73e044fa3ae1a11b97a83'}).then((todo)=>{
  console.log(todo);
});
