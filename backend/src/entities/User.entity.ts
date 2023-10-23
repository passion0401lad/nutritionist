import { Column, Entity, Generated } from 'typeorm';

import { CoreEntity } from './Core.entity';

@Entity({
    name: 'users',
})
export class UserEntity extends CoreEntity {
    @Column({ name: 'name', nullable: true})
    name: string;

    @Column({ name: 'email', nullable: true})
    email: string;

    @Column({ name: 'sex', nullable: true})
    sex: Boolean;

    @Column({ name: 'birthday', nullable: true})
    birthday: Date;

    @Column({ name: 'password', nullable: true})
    password: string;
    
}