import jwt from "jsonwebtoken";

const TOKEN_SEED = process.env.TOKEN_SEED;

export function createToken(payload: string | Buffer | object, expiresIn: string): string {
    const token = jwt.sign(payload, TOKEN_SEED, { expiresIn });
    return token;
}

export function validateToken(token: string): jwt.JwtPayload | string | undefined {
    try {
        const decoded: jwt.JwtPayload = jwt.verify(token, TOKEN_SEED) as jwt.JwtPayload;
        return decoded.user;
    } catch (error) {
        return undefined;
    }
}
