import { observable, action } from 'mobx';
import agent from '../agent';
/*Sweet Alert */
import Swal from "sweetalert2";


class UserStore {

  @observable currentUser;
  @observable loadingUser;
  @observable updatingUser;
  @observable updatingUserErrors;

  @action pullUser() {
    this.loadingUser = true;
    return agent.Auth.current()
      .then(action(({ user }) => { this.currentUser = user; }))
      .finally(action(() => { this.loadingUser = false; }))
  }

  @action updateUser(newUser) {
    console.log(newUser)
    this.updatingUser = true;
    return agent.Auth.save(newUser)
      .then(action(({ user }) => { this.currentUser = user; }))
      .catch(action((err) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 4000,
        });

        Toast.fire({
          type: 'error',
          title: 'Somthing was wrong'
        })
        this.updatingUserErrors = err.response && err.response.body && err.response.body.errors;
        throw err;
      }))
      /* .catch(action(({err}) => { this.updatingUserErrors = err})) */
      .finally(action(() => { this.updatingUser = false; }))
  }

  @action forgetUser() {
    this.currentUser = undefined;
  }

}

export default new UserStore();
