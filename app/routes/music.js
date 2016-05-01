import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.ajax('/example').then((json) => {
      return json;
    });
  }
});
