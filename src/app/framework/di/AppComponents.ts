import { container } from 'tsyringe';
import { UserDataMapper } from '@/data/persistences/mappers/UserDataMapper';
import { RoleDataMapper } from '@/data/persistences/mappers/RoleDataMapper';
import { RoleApiRepository } from '@/data/persistences/repositories/api/RoleApiRepository';
import { RolePresenter } from '@/app/ui/presenters/RolePresenter';
import ApiService from '../services/ApiServices';
import { UserApiRepository } from '@/data/persistences/repositories/api/UserApiRepository';
import { HomePresenter } from '@/app/ui/presenters/HomePresenter';

export class AppComponent {
    public static init() {
        container.register<UserDataMapper>(UserDataMapper, {useClass: UserDataMapper});
        container.register<RoleDataMapper>(RoleDataMapper, {useClass: RoleDataMapper});
        container.register<ApiService>(ApiService, {useClass: ApiService});
        container.register<UserApiRepository>(UserApiRepository, { useFactory: (d) => {
            return new UserApiRepository(d.resolve(ApiService), d.resolve(UserDataMapper));
        }});
        container.register<RoleApiRepository>(RoleApiRepository, { useFactory: (d) => {
            return new RoleApiRepository(d.resolve(ApiService), d.resolve(RoleDataMapper));
        }});
        container.register<HomePresenter>(HomePresenter, { useFactory: (d) => {
            return new HomePresenter(d.resolve(UserApiRepository));
        }});
        container.register<RolePresenter>(RolePresenter, { useFactory: (d) => {
            return new RolePresenter(d.resolve(RoleApiRepository));
        }});
    }
}
