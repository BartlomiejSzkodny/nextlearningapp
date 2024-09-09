"use server";
import { User} from "./models";
import { connectToDatabase } from "./utils";
import { redirect } from 'next/navigation'

export const RegisterUser = async (formData: any) => {
    

    const Username = formData.username;
    const Email = formData.email;
    const Password = formData.password;
    const Repeatpassword = formData.repeat


try {
    console.log(Username,Email,Password,Repeatpassword);
    connectToDatabase();
    const newUser = new User({
        username: Username,
        email: Email,
        password:Password,
        isAdmin: false
    })
    
    if (Password !== Repeatpassword) {
        console.log('Passwords do not match');
        return 'Passwords do not match';


    }
    else {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Example: Minimum eight characters, at least one letter and one number
        if (!Password.match(passwordRegex)) {
            console.log('Password must be at least 8 characters long, and contain at least one letter and one number');
            return 'Password must be at least 8 characters long, and contain at least one letter and one number';
        }
        else {
            await newUser.save();
        }
    }


} catch (error) {
    console.log(error);
    throw new Error('Error registering user');
    
}

redirect('http://localhost:3000/login');


    

}