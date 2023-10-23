import { UserEntity } from "entities";
import { getUserRepository } from "utils";

export const getUserFromId = async (id:number): Promise<UserEntity | null> => {
    const userRepository = await getUserRepository();
    const userInfo: UserEntity | null= await userRepository.findOneBy({
        id: id
    });

    return userInfo;
};

export const getUserFromEmail = async (email:string): Promise<UserEntity | null> => {
    const userRepository = await getUserRepository();
    const userInfo: UserEntity | null= await userRepository.findOneBy({
        email: email
    });

    return userInfo;
};

export const deleteUserFromId = async (id:number): Promise<Boolean> => {
    const userRepository = await getUserRepository();
    const userInfo: any= await userRepository.delete({
        id: id
    });
    return userInfo && true;
};

export const createUser = async (
    data: Pick<UserEntity, 'name' | 'email' | 'sex' | 'birthday' | 'avatar' | 'password'>
): Promise<UserEntity | null> => {
    const userRepository = await getUserRepository();

    const newUser: UserEntity = new UserEntity();

    newUser.name = data.name;
    newUser.email = data.email;
    newUser.sex = data.sex;
    newUser.birthday = data.birthday;
    newUser.avatar = data.avatar;
    newUser.password = data.password;

    await userRepository.save(newUser);

    return newUser;
}

export const updateUser = async (
    data: Pick<UserEntity, 'name' | 'email' | 'sex' | 'birthday' | 'avatar' | 'password'>
): Promise<UserEntity | null> => {
    const userRepository = await getUserRepository();

    const user_update: UserEntity | null = await userRepository.findOneBy({
        email:data.email
    });

    user_update.name = data.name ? data.name : user_update.name;
    user_update.sex = data.sex ? data.sex : user_update.sex;
    user_update.birthday = data.birthday ? data.birthday : user_update.birthday;
    user_update.avatar = data.avatar ? data.avatar : user_update.avatar;
    user_update.password = data.password ? data.password : user_update.password;
    await userRepository.save(user_update);

    return user_update;
}