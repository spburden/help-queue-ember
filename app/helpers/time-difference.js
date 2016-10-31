import Ember from 'ember';
import moment from 'moment';

export function timeDifference(params/*, hash*/) {
  var timeOut = params[0].get('timeOut');
  var timeIn = params[0].get('timeIn');
  var difference = timeOut - timeIn;
  var duration = parseInt(moment.duration(difference).asMinutes());
  return duration;
}

export default Ember.Helper.helper(timeDifference);
