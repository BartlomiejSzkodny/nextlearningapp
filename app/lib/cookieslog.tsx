"use server";
import {cookies} from 'next/headers';

export const iflogged = () => {
    if (cookies().get("loggedIn")?.value === "true"){
        return true;
    }
    if (cookies().get("loggedIn")?.value === "false"){
        return false;
    }
  
}

export const login = async () => {
    cookies().set("loggedIn", "true");
    }

export const logout = async () => {
    cookies().set("loggedIn", "false");
    }