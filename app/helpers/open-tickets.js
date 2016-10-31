import Ember from 'ember';

export function openTickets(params/*, hash*/) {
  var students = params[0];
  var stillOpen = [];
  for (var i = 0; i < students.length; i++) {
    if (students[i].get('timeOut') !== 0) {
      stillOpen.push(students[i]);
    }
  }
  return stillOpen;
}

export default Ember.Helper.helper(openTickets);
