var mongoose=require('mongoose');

var Users=mongoose.model('Users',{
  email:{type:String,require:true,minlength:1,trim:true}
});
var newUsers=new Users({
  email:'nathanchemla95@gmail.com'
});

newUsers.save().then((doc)=>{
  console.log('saved to',doc);
},(e)=>{
  console.log('Unable to save the users email',e);
});

module.exports={Users};
