import { User } from "./models";

export const getUser = async (id)=>{
    try {
       const user = await User.findById(id);
       return user;
    } catch (error) {
        console.log(error);
        throw new Error('Error getting user');
    }
}