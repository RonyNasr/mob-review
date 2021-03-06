import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description:DS.attr(),
  address: DS.attr(),
  cost: DS.attr(),
  cuisine: DS.attr(),
  photo: DS.attr(),
  listed: DS.attr(),
  reviews: DS.hasMany('review', {async:true})
});
