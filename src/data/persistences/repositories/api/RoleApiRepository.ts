import ApiService from '../../../../app/framework/services/ApiServices';
import { Endpoints } from '../../../../app/framework/misc/Endpoints';
import { injectable } from 'tsyringe';
import { RoleRepositoryInterface } from '@/domain/repositories/RoleRepositoryInterface';
import { Role } from '@/domain/entities/Role';
import { RoleDataMapper } from '../../mappers/RoleDataMapper';

@injectable()
export class RoleApiRepository implements RoleRepositoryInterface {
    private service: ApiService;
    private mapper: RoleDataMapper;

    constructor(service: ApiService, mapper: RoleDataMapper) {
        this.service = service;
        this.mapper = mapper;
    }

    public async getAll(params: Map<string, string>): Promise<Role[]> {
        const resp = await this.service.invoke(
            'get',
            Endpoints.Route.GET_ROLES,
            params,
        );
        return this.mapper.converRoleListFromApi(resp);
    }
}
