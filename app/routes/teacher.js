import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      students: this.store.findAll('student'),
      openTickets: this.store.query('student', { orderBy: 'status', equalTo: false }),
      closedTickets: this.store.query('student', { orderBy: 'status', equalTo: true }),
    });
  },

  actions: {
    closeTicket(student, params) {
      Object.keys(params).forEach(function(key) {
         student.set(key, params[key]);
      });
     student.save();
     this.transitionTo('teacher');
    }
  }
});
