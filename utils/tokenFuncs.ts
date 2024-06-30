import jwt from "jsonwebtoken";

export function createToken(payload: string | Buffer | object, expiresIn: string): string {
    const secretKey = "your_secret_key_here";
    const token = jwt.sign(payload, secretKey, { expiresIn });
    return token;
}

export function validateToken(token: string): jwt.JwtPayload | string | undefined {
    try {
        const decoded: jwt.JwtPayload = jwt.verify(token, "your_secret_key_here") as jwt.JwtPayload;
        return decoded.user;
    } catch (error) {
        return undefined;
    }
}
