import { Role } from '../entities/Role';

export interface RoleRepositoryInterface {
    getAll(params: Map<string, string>): Promise<Role[]>;
}
