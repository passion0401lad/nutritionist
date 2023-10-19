import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity()
  export class CoreEntity {

    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    id: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @DeleteDateColumn({ name:'update_at', nullable: true })
    updateAt?: Date;

    @DeleteDateColumn({ name:'deleted_at', nullable: true })
    deleteAt?: Date;
  }