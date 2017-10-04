const{ObjectId}=require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {Users}=require('./../server/models/user');

// var id="59d4843e2f06049ca53bacb8";
// if(!ObjectId.isValid(id)){
//   console.log('Id not valid');
// }
//
// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('todos',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('todos',todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('id not found');
//   }
//   console.log('todo by id',todo);
// }).catch((e)=>console.log(e));

var id="59d4866a5a84bfbccc4547b5";
Users.find({
  _id:id
}).then((users)=>{
  console.log('users',users);
});
Users.findOne({
  _id:id
}).then(user)=>{
  console.log('users',user);
});
Users.findById(id).then((user)=>{
  if(!user){
    retun console.log('users not found');
  }
}).catch((e)=>console.log(e));
