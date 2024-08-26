const{default:mongoose}=require('mongoose');


const conection = {
  isConnected: false
};

export const connectToDatabase=async()=>{
    try {
      
        if (conection.isConnected){
            console.log('Using existing connection');
            return;
        }
  console.log(process.env.MONGO);
  console.log('Using new connection');
  const db =await mongoose.connect(process.env.MONGO);
  conection.isConnected=db.connections[0].readyState;
} catch (error) {
    console.error(error);
    throw new Error('Error connecting to database');
}
}