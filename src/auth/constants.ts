import * as bcrypt from 'bcrypt';

export const jwtConstants = {
	secret : process.env.DEV_JWT_SECRET || 'secretKey'
}