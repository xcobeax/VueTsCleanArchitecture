import { User } from '../entities/User';

export interface UserRepositoryInterface {
    getAll(params: Map<string, string>): Promise<User[]>;
}
