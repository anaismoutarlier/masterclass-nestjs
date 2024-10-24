import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const res = await this.verifyToken(request);
    return Boolean(res);
  }

  async verifyToken(request: Request) {
    const authHeader = request.headers.authorization;
    if (!authHeader) return null;
    const [type, token] = authHeader.split(' '); //Token <token>
    if (!['Bearer', 'Token'].includes(type)) return null;
    try {
      const payload = await this.jwtService.verifyAsync(token);
      request['user'] = payload;
      return payload;
    } catch (error) {
      return null;
    }
  }
}
