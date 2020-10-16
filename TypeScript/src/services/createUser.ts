/**
 * para criar um usuario : name, email , senha
 */
interface TechObject {
    title: string;
    expirence: number;
    };

interface CreaterUSerDAta {
    name ?: string;
    email : string;
    password: string;
    techs: Array<string | TechObject>;
};

export default function createUser({ name, email, password}: CreaterUSerDAta){
    const user = {
        name,
        email,
        password,
    }

    return user;
}