import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Mundo!';
  }

  postMetodo(obj):string{
    console.log(obj);
    return "Metodo post";
  }
}