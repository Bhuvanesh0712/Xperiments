import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['side-bar'],

  sideBarOpen: false,

  init() {
    this._super(...arguments);
    Ember.$(window.document).on('click', this, this.closeOnOutsideClick);
  },

  closeOnOutsideClick(event) {
    if (!Ember.$(event.target).closest('.side-bar').length) {
      event.data.set('sideBarOpen', false);
    }
  },

  actions: {
    openSideBar() {
      this.set('sideBarOpen', true);
    },

    closeSideBar() {
      this.set('sideBarOpen', false);
    }
  }
});
