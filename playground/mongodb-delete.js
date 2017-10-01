const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to MongoDB server');
          }
          console.log('connected to mongodb server');
//     db.collection('Todos').deleteMany({
//       text:'eat lunch'
//     }).then((result)=>{
// console.log(result);
//     });

// db.collection('Todos').deleteOne({
//   text:'eat lunch'
// }).then((result)=>{
//   console.log(result);
// });

// db.collection('Todos').findOneAndDelete({
//   completed:false
// }).then((result)=>{
//   console.log(result);
// });

db.collection('Users').deleteMany({
  name:'nathan'
}).then((result)=>{
  console.log(result);
});

db.collection('Users').deleteOne({
  id:new ObjectID("59d00b881e6adb24781cc24d")
}).then((result)=>{
  console.log(result);
});

    db.close();

});
