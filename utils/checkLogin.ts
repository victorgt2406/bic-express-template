import { encrypt, compare } from "./encryptFuncs";

export default async function checkLogin(user:string, password:string){
    // code to check the user is registered with that password in the database
    // ...
    if(checkUser(user)){
        const createdPassword = await encrypt("password")
        return (await compare(password, createdPassword));
    }
    else{
        return false;
    }
    
}

export function checkUser(user:string){
    // code to check the user exists
    // ...
    return "admin" === user;
}