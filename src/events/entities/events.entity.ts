import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: number;

    @Column()
    title: string;

    @Column()
    start: Date;

    @Column()
    end: Date;

    @Column()
    created_at: Date;


}