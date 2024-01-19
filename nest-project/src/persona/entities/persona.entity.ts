import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "int"})
    dni: number;

    @Column({type: "varchar"})
    name: string;

    @Column({type: "varchar"})
    lastname: string;

    @Column({type: "varchar"})
    birthdate: string;

    @Column({type: "varchar"})
    sex: string;
}
