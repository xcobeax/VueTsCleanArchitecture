import { Role } from '@/domain/entities/Role';
import { GetRoleResponse } from '@/data/payload/api/adminRole/RoleResponse';
import { AxiosResponse } from 'axios';

export class RoleDataMapper {

    public converRoleListFromApi(result: AxiosResponse<any>): Role[] {
        const response = Array<Role>();
        const aResp = result.data as GetRoleResponse;

        aResp.data.forEach((item) => {
            const role = new Role(
                item.id_role,
                item.role_name,
                item.created_at,
                item.updated_at,
                item.access,
            );
            response.push(role);
        });

        return response;
    }
}
