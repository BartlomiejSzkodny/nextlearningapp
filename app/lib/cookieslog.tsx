"use server";
import {cookies} from 'next/headers';

export const iflogged = () => {
    if (cookies().get("loggedIn")?.value === "1"){
        return true;
    }
    if (cookies().get("loggedIn")?.value === "0"){
        return false;
    }
  
}

export const login = async () => {
    cookies().set("loggedIn", "1");
    }

export const logout = async () => {
    cookies().set("loggedIn", "0");
    }