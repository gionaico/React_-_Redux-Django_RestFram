import { observable, action, reaction } from 'mobx';
import agent from '../agent';

class CommonStore {

  @observable appName = 'Conduit';
  @observable token = window.localStorage.getItem('jwt');
  @observable appLoaded = false;

  @observable tags = [];
  @observable isLoadingTags = false;

  @observable categories = [];
  @observable isLoadingCategories = false;

  constructor() {
    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem('jwt', token);
        } else {
          window.localStorage.removeItem('jwt');
        }
      }
    );
  }

  @action loadTags() {
    this.isLoadingTags = true;
    return agent.Tags.getAll()
      .then(action(({ tags }) => { this.tags = tags.map(t => t.toLowerCase()); }))
      .finally(action(() => { this.isLoadingTags = false; }))
  }

  @action loadCategories() {
    this.isLoadingCategories = true;
    return agent.Categories.getAll()
      .then(action(({
        categories
      }) => {
        console.log("------------categories", categories)
        this.categories = categories.map(t => t.toUpperCase());
        /* console.log("------------categories", this.categories) */
      }))
      .finally(action(() => { this.isLoadingCategories = false; }))
  }

  @action setToken(token) {
    this.token = token;
  }

  @action setAppLoaded() {
    this.appLoaded = true;
  }

}

export default new CommonStore();
