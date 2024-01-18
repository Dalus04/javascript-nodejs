import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "int"})
    number: number;

    @Column({type: "varchar"})
    serial: string;

    @Column({type: "varchar"})
    description: string;

    @Column({type: "int"})
    amount: number;
}
