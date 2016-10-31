import Ember from 'ember';

export default Ember.Component.extend({
  steps: true,
  pair: false,
  minutes: false,
  helpform: false,
  actions: {
    steps() {
      this.set('steps', false);
      this.set('pair', true);
    },
    pair() {
      this.set('pair', false);
      this.set('minutes', true);
    },
    minutes() {
      this.set('minutes', false);
      this.set('helpform', true);
    }
  }
});
