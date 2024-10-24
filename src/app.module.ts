import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    CatsModule,
    JwtModule.register({
      global: true,
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
