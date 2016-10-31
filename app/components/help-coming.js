import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyStudent(student) {
      this.sendAction('destroyStudent', student);
    }
  }
});
