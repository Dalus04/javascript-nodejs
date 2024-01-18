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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '12400..',
      username: 'postgres',
      entities: [Order],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
    UserModule, PetsModule, OrdersModule
  ],
  controllers: [AppController, UserController, PetsController],
  providers: [AppService, UserService, PetsService],
})
export class AppModule {}