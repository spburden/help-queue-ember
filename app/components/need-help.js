import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['timeIn:asc'],
  sortedStudents: Ember.computed.sort('students', 'sortBy'),

  actions: {
    closeTicket(student) {
      var params = {
        status: true,
        timeOut: new Date().getTime(),
      };
      this.sendAction("closeTicket", student, params);
    }
  }
});
