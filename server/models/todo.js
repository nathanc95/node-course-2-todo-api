var mongoose=require('mongoose');

var Todo=mongoose.model('Todo',{
  text:{type:String,require: true,minlength:1,trim:true},
  completed:{type:Boolean,default:false},
  completedAt:{type:Number,default:null}
});

// var newTodo=new Todo({
//   text:'Cook dinner'
// });

newTodo.save().then((doc)=>{
 console.log('Saved todo',doc);
},(e)=>{
  console.log('Unable to save todo');
});

// var otherTodo=new Todo({
//   text:'Feed the cat',
//   completed:true,
//   completedAt:123
// });
otherTodo.save().then((doc)=>{
  console.log('save to do ',doc);
},(e)=>{
  console.log('unable to save the doc');
});

module.exports={Todo};
