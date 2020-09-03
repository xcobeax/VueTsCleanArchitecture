import ApiService from '../../../../app/framework/services/ApiServices';
import { Endpoints } from '../../../../app/framework/misc/Endpoints';
import { injectable } from 'tsyringe';
import { UserRepositoryInterface } from '@/domain/repositories/UserRepositoryInterface';
import { User } from '@/domain/entities/User';
import { UserDataMapper } from '../../mappers/UserDataMapper';

@injectable()
export class UserApiRepository implements UserRepositoryInterface {
    private service: ApiService;
    private mapper: UserDataMapper;

    constructor(service: ApiService, mapper: UserDataMapper) {
        this.service = service;
        this.mapper = mapper;
    }

    public async getAll(params: Map<string, string>): Promise<User[]> {
        const resp = await this.service.invoke(
            'get',
            Endpoints.Route.GET_USERS,
            params,
        );
        return this.mapper.converUserListFromApi(resp);
    }
}
