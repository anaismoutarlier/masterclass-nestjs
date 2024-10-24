import { Controller, Get, Body, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard)
  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post('access-token')
  getAccessToken(@Body() body: Record<string, any>) {
    return this.appService.getAccessToken(body);
  }
}
