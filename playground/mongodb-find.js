const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to MongoDB server');
          }
    db.collection('Users').find({
      name:'nathan'
    }).toArray().then((docs)=>{
console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
      console.log('Unale to fetch todos',err);
    });

    db.close();

});
