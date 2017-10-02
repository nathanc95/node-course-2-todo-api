const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to MongoDB server');
          }
          console.log('connected to mongodb server');

  db.collection('Users').findOneAndUpdate({
    name:'ilan'
  },{
    $set:{name:'jean'},
    $inc:{ age:2}
    },
 {
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });


    //db.close();

});
