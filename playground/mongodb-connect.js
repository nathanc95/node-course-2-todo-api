//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

/*var user={name:'andrew',age:25};
var {name}= user;
console.log(name);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to mongoDB server');

  db.collection('Todos').insertOne({
    text:'Something to do',
    completed:false
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

  db.collection('Users').insertOne({
    name:'nathan',
    age:25,
    location:'Hertzilya'
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert users',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
  db.close();
});