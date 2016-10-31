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
    },
    help() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        issue: this.get('issue'),
        timeIn: new Date().getTime(),
        timeOut: 0,
        status: false
      };
      this.set('helpform', false);
      this.set('helpComing', true);
      this.sendAction('sendHelp', params);
    }
  }
});
