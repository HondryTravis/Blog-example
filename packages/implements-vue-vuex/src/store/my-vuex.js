let Vue;

class Store {
  constructor(options) {
    const { mutations, actions, state, getters } = options
    this._mutations = mutations
    this._actions = actions;
    this._vm = new Vue({
      data: {
        $$state: state,
      },
    });
    if(getters) {
      this.handleGetters(getters)
    }
  }

  get state() {
    return this._vm._data.$$state;
  }

  commit = (type, payload) => {
    // TODO: 得到 reducer、mutations
    const entry = this._mutations[type];
    if (entry) {
      entry(this.state, payload);
    }
  }
  dispatch = (type, payload) => {
    // TODO: 得到 Action
    const entry = this._actions[type];
    if (entry) {
      entry(this, payload);
    }
  }
  handleGetters(getters) {
    this.getters = {};
    Object.keys(getters).forEach((key) => {
      Object.defineProperty(this.getters, key, {
        get: () => getters[key](this.state),
      });
    });
  }
}

function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      console.log(Math.random());
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

export default {
  install,
  Store
}