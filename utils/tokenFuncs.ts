import jwt from "jsonwebtoken";

export function createToken(user: any, time: string): string {
    const secretKey = "your_secret_key_here";
    const token = jwt.sign(user, secretKey, {
        expiresIn: time,
    });
    return token;
}

export function validateToken(token: string): any {
    try {
        const decoded: jwt.JwtPayload = jwt.verify(token, "your_secret_key_here") as jwt.JwtPayload;
        return decoded.user;
    } catch (error) {
        return undefined;
    }
}
