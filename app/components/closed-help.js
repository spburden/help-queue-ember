import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  averageTime: Ember.computed('students', function() {
    var students = this.get('students');
    var average = 0;
    for (var i = 0; i < students.content.length; i++) {
      var timeOut = students.content[i]._data.timeOut;
      var timeIn = students.content[i]._data.timeIn;
      var difference = timeOut - timeIn;
      average += difference;
    }
    var newAverage = (average/students.content.length);
    return parseInt(moment.duration(newAverage).asMinutes());
  }),
  
  dayTotal: Ember.computed('students', function() {
    var students = this.get('students');
    return students.content.length;
  })
});
