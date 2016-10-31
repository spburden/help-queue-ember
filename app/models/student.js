import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  comment: DS.attr(),
  location: DS.attr(),
  timeIn: DS.attr(),
  timeOut: DS.attr()
});
