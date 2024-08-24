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
  const db =await mongoose.connect(process.env.MONGODB);
  conection.isConnected=db.connections[0].readyState;
} catch (error) {
    console.error(error);
    throw new Error('Error connecting to database');
}
}