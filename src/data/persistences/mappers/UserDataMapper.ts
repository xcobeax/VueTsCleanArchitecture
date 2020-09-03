import { User } from '@/domain/entities/User';
import { GetUsersResponse } from '@/data/payload/api/user/UserResponse';
import { AxiosResponse } from 'axios';

export class UserDataMapper {

    public converUserListFromApi(result: AxiosResponse<any>): User[] {
        const response = Array<User>();
        const aResp = result.data as GetUsersResponse;

        aResp.data.forEach((item) => {
            const user = new User(
                item.id,
                item.name,
                item.email,
                item.phone,
                item.address.street + ' - ' + item.address.city + ' - ' + item.address.zipcode,
            );
            response.push(user);
        });

        return response;
    }
}
