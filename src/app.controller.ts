import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
@Controller()
export class AppController {
	constructor(private authService: AuthService) { }

	@UseGuards(LocalAuthGuard)
	@Post('auth/login')
	async login(@Request() req: any) {
		return this.authService.login(req.user);
	}

	@UseGuards(JwtAuthGuard)
	@Get('profile')
	getProfile(@Request() req: any) {
		return req.user;
	}

}
