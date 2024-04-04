import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadModule } from './cad/cad.module';
import { UsersModule } from './User/user.module';

@Module({
  imports: [CadModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
