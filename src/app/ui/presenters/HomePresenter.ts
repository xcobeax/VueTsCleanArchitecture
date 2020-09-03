import { injectable } from 'tsyringe';
import { UserApiRepository } from '@/data/persistences/repositories/api/UserApiRepository';
import { User } from '@/domain/entities/User';

@injectable()
export class HomePresenter {
    private repository: UserApiRepository;

    constructor(repository: UserApiRepository) {
        this.repository = repository;
    }

    public loadUser(params: Map<string, string>): Promise<User[]> {
        return this.repository.getAll(params);
    }
}
