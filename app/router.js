import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('student', {path: '/student/:student_id'});
  this.route('teacher');
});

export default Router;
