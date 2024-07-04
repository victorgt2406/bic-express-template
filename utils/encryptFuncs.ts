import bcryptjs from "bcryptjs";

const ENCRYPT_SEED = process.env.ENCRYPT_SEED;

const encrypt = async (clearPassword: string) => {
    const hash = await bcryptjs.hash(clearPassword, ENCRYPT_SEED);
    return hash;
};

const compare = async (clearPassword: string, hashedPassword: string) => {
    const result = await bcryptjs.compare(clearPassword, hashedPassword);
    return result;
};

export { encrypt, compare };
