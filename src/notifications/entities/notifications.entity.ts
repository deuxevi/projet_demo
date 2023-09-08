import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NotifEntity{

    @PrimaryGeneratedColumn() 
    id:number;

    @CreateDateColumn()
    date:Date;

    @Column()
    description:string;
}