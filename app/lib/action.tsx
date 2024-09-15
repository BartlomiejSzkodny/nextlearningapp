"use server";
import { User } from "./models";
import { connectToDatabase } from "./utils";
import { redirect } from 'next/navigation';


export const RegisterUser = async (formData:any) => {
    const { username, email, password, repeat } = formData;
    console.log(username, email, password, repeat);
    var err = false;
    
    

    try {
        // Ensure the database connection is established
        await connectToDatabase();
        if (!username || !email || !password || !repeat) {
            console.log('All fields are required');
            return 'All fields are required';
        }

        // Check if passwords match
        if (password !== repeat) {
            console.log('Passwords do not match');
            return 'Passwords do not match';
        }

        // Password validation
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Example: Minimum eight characters, at least one letter and one number
        if (!password.match(passwordRegex)) {
            console.log('Password must be at least 8 characters long, and contain at least one letter and one number');
            return 'Password must be at least 8 characters long, and contain at least one letter and one number';
        }

        // Create a plain object with the user data to save
        const newUser = {
            username: username,
            email: email,
            password: password,
            isAdmin: false
        };

        // Save the user to the database
        const userDocument = new User(newUser);
        await userDocument.save();

        
    } catch (error) {
        console.log('Error registering user:',error);
        err=true;
        return 'Error registering user';
    }
    if (!err){
        redirect('/login');
    }
};
