import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order) private readonly orderRepository: Repository<Order>,
  ){}

  create(createOrderDto: CreateOrderDto) {
    this.orderRepository.save(createOrderDto);
  }

  findAll(): Promise<Order[]>{
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return this.orderRepository.findOneById(id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    this.orderRepository.update(id, updateOrderDto);
  }

  remove(id: number) {
    this.orderRepository.delete(id);
  }
}
