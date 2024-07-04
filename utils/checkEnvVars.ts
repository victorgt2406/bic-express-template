

export default function checkEnvVars(){
    if (!(process.env.TOKEN_SEED && process.env.ENCRYPT_SEED)){
        throw "Variable envs are not defined";
    }
}