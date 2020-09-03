import { injectable } from 'tsyringe';
import { RoleApiRepository } from '@/data/persistences/repositories/api/RoleApiRepository';
import { Role } from '@/domain/entities/Role';

@injectable()
export class RolePresenter {
    private repository: RoleApiRepository;

    constructor(repository: RoleApiRepository) {
        this.repository = repository;
    }

    public loadRole(params: Map<string, string>): Promise<Role[]> {
        return this.repository.getAll(params);
    }
}
