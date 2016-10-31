import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyStudent(student) {
      this.sendAction('destroyStudent', student);
    },
    closeTicket(student) {
      var params = {
        status: true,
        timeOut: new Date().getTime(),
      };
      this.sendAction("closeTicket", student, params);
    }
  }
});
