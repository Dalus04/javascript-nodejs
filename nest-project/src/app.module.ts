import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PetsController } from './pets/pets.controller';
import { PetsService } from './pets/pets.service';
import { PetsModule } from './pets/pets.module';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
import { PersonaModule } from './persona/persona.module';
import { Persona } from './persona/entities/persona.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalsModule } from './animals/animals.module';
import { LikesSchema } from './animals/entities/likes.schema';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '12400..',
      username: 'postgres',
      entities: [Order, Persona, User],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/redes'),
    MongooseModule.forFeature([{name: 'likes', schema: LikesSchema}]),
    UserModule, PetsModule, OrdersModule, PersonaModule, AnimalsModule, AuthModule],
  controllers: [AppController, PetsController],
  providers: [AppService, PetsService],
})
export class AppModule {}