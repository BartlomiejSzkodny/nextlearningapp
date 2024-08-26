import { User} from "./models";
import { connectToDatabase } from "./utils";

export const RegisterUser = async (formData: any) => {
    "use server";

    const {Username,Email,Password,Repeatpassword} = Object.fromEntries(formData) ;
try {
    console.log(Username,Email,Password)
    connectToDatabase();
    const newUser = new User({
        Username,
        Email,
        Password,
        isAdmin: false
    })
    await newUser.save();
    console.log('User registered');

} catch (error) {
    console.log(error);
    throw new Error('Error registering user');
    
}
    

}