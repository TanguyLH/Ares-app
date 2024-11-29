import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { registerUserDto } from './dto/register-user.dto';


@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService
	) {}

	async signIn(username: string, password: string): Promise<{ access_token: string}> {
		const user = await this.usersService.findOneByUsername(username);
		if (user?.password !== password) {
			throw new UnauthorizedException('Invalid credentials');
		}
		const payload = { sub: user.id, username: user.username };
		return {
			access_token: await this.jwtService.signAsync(payload)
		}
	}

	async validateUser(username: string, pass: string): Promise<any> {
		const user = await this.usersService.findOneByUsername(username)
		if (user && await bcrypt.compare(pass, user.password)) {
			return user;
		}
		return null;
	}
	
	async login(user: any) {
		const payload = { username: user.username, sub: user.userId };
		return {
			access_token: this.jwtService.sign(payload),
		}
	}

	async register(userDto: registerUserDto) {
		// const createUserDto = { ...userDto };
	    const user = await this.usersService.create(userDto);
    	const payload = { username: user.username, sub: user.id };
    	return {
      		access_token: this.jwtService.sign(payload),
    	};
	}
}
