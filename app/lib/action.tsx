export const RegisterUser = async (formData: any) => {
    "use server";

    const { Username, Email, Password, Repeatpassword } =Object.fromEntries(formData) ;
    console.log(Username, Email, Password, Repeatpassword);
}