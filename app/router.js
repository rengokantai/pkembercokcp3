import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('hello');
  this.route('conditional');
  this.route('student');
  this.route('students',{path:'/students/:student_id'});
});

export default Router;
