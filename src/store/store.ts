import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { container } from 'tsyringe';
import { HomePresenter } from '../app/ui/presenters/HomePresenter';
import { RolePresenter } from '../app/ui/presenters/RolePresenter';
import { User } from '../domain/entities/User';
import { Role } from '../domain/entities/Role';

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    userList: Array<User>(),
    roleList: Array<Role>(),
  },
  actions: {
    loadUser({ commit }) {
      const presenter = container.resolve(HomePresenter);
      presenter.loadUser(new Map())
        .then((res: User[]) => {
          commit('SET_USERLIST', res);
          // tslint:disable-next-line: no-console
          console.log('res', res);
        })
        .catch((error) => {
          // tslint:disable-next-line: no-console
          console.log('error', error);
        });
    },
    loadRole({ commit }) {
      const presenter = container.resolve(RolePresenter);
      presenter.loadRole(new Map())
        .then((res: Role[]) => {
          commit('SET_ROLELIST', res);
        // tslint:disable-next-line: no-console
          console.log('res ROLE', res);

      })
      .catch((error: any) => {
        // tslint:disable-next-line: no-console
        console.log('error', error);

      });
    },
  },
  mutations: {
    SET_USERLIST(state, userList: User[]) {
      state.userList = userList;
    },
    SET_ROLELIST(state, roleList: Role[]) {
      state.roleList = roleList;
    },
  },
});

