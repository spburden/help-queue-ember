import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('student');
  },
  actions: {
    sendHelp(params) {
      var newStudent = this.store.createRecord('student', params);
      newStudent.save().then(function() {
        return newStudent;
      });
    this.transitionTo('student', newStudent);
    }
  }
});
