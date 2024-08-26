
import { User } from "./models";
import { connectToDatabase } from "./utils";

export const getUser = async (id: string) => {
    try {
        connectToDatabase();
       const user = await User.findById(id);
       return user;
    } catch (error) {
        console.log(error);
        throw new Error('Error getting user');
    }
}
export const getUsers = async ()=>{
    try {
       const users = await User.find();
       return users;
    } catch (error) {
        console.log(error);
        throw new Error('Error getting user');
    }
}