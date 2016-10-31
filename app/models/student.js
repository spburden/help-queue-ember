import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  issue: DS.attr(),
  location: DS.attr(),
  timeIn: DS.attr(),
  timeOut: DS.attr()
});
