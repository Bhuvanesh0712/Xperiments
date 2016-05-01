import Ember from 'ember';

export default Ember.Component.extend({
  isLoading: true,

  init() {
    this._super(...arguments);
    let data = this.get('data');
    this.setProperties({
      video: data[0],
      count: 1,
      videosCount: data.length
    });
  },

  didRender() {
    this._super(...arguments);
    Ember.$('.player').on('load', () => {
      this.set('isLoading', false);
    });
    // Ember.$('.player').addEventListener('onStateChange', function() {
    //   let data = data[this.count]
    //   this.set('video',)
    // });
  }
});
