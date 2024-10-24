import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(private readonly jwtService: JwtService) {}

  getHello() {
    return { message: 'Hello World!' };
  }

  getAccessToken(body: Record<string, any>) {
    return { accessToken: this.jwtService.sign(body) };
  }
}
