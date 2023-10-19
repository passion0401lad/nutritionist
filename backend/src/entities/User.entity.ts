import { Column, Entity, Generated } from 'typeorm';

import { CoreEntity } from './Core.entity';

@Entity({
    name: 'user',
})
export class UserEntity extends CoreEntity {
    @Column({ name: 'name', nullable: true})
    name?: string;

    @Column({ name: 'email', nullable: true})
    email?: string;

    @Column({ name: 'password', nullable: true})
    password?: string;
    
}