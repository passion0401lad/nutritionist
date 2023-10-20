import { UserEntity } from "entities";
import { getUserRepository } from "utils";

export const getUserFromEmail = async (email:string): Promise<UserEntity | null> => {
    const userRepository = await getUserRepository();
    const userInfo: UserEntity | null= await userRepository.findOneBy({
        email: email
    });

    return userInfo;
};

export const deleteUserFromEmail = async (email:string): Promise<Boolean> => {
    const userRepository = await getUserRepository();
    const userInfo: any= await userRepository.delete({
        email: email
    });
    console.log(typeof userInfo)
    return userInfo && true;
};

export const createUser = async (
    data: Pick<UserEntity, 'name' | 'email' | 'password'>
): Promise<UserEntity | null> => {
    const userRepository = await getUserRepository();

    const newUser: UserEntity = new UserEntity();

    newUser.name = data.name;
    newUser.email = data.email;
    newUser.password = data.password;

    await userRepository.save(newUser);

    return newUser;
}

export const updateUser = async (
    data: Pick<UserEntity, 'name' | 'email' | 'password'>
): Promise<UserEntity | null> => {
    const userRepository = await getUserRepository();

    const user_update: UserEntity | null = await userRepository.findOneBy({
        email:data.email
    });

    user_update.name = data.name ? data.name : user_update.name;
    user_update.password = data.password ? data.password : user_update.password;
    await userRepository.save(user_update);

    return user_update;
}