import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PetsController } from './pets/pets.controller';
import { PetsService } from './pets/pets.service';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [UserModule, PetsModule],
  controllers: [AppController, UserController, PetsController],
  providers: [AppService, UserService, PetsService],
})
export class AppModule {}