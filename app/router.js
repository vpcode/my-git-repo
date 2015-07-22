import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.resource('messages');
  this.route('about');
  // this.route('messages');
  this.route('messages', function() {
          this.route('new');
  });
});

export default Router;
