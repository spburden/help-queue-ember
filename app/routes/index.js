import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('student');
  },
  actions: {
    sendHelp(params) {
      this.store.createRecord('student', params).save();
      this.transitionTo('student', params.student_id);
    }
  }
});
