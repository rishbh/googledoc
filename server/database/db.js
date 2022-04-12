import mongoose from 'mongoose';

const Connection=async (username='RishabhJain',password='R2002Jain')=>{
     const URL=`mongodb://${username}:${password}@g-docs-shard-00-00.z6g5l.mongodb.net:27017,g-docs-shard-00-01.z6g5l.mongodb.net:27017,g-docs-shard-00-02.z6g5l.mongodb.net:27017/GOOGLEDOCCLONE?ssl=true&replicaSet=atlas-6fd2dq-shard-0&authSource=admin&retryWrites=true&w=majority`;//for connection



     try{
              await   mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
              console.log("Databse connected here successfully");
     }
     catch(error){
         console.log("Error while connecting ",error);
     }
}
export default Connection;