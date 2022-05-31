import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    // 1. req에서 추출한 정보를 local.strategy 에서 받는다.
    // 2. service.validateUser()에서 user return
    // 3. service.login()에서 user민감정보를 제외한 정보로 jwt token을 만들어 출력한다.
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard) // jwt 토큰에 있던 값을 추출 jwt.strategy > validate() 에서 return 된 값이 req.user에 들어간다.
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
