"use server"
import { cookies } from "next/headers";
export const handleSubmit = async () => {
    cookies().set("loggedIn", "true");
    }
