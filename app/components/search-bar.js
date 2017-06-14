import Ember from 'ember';

export default Ember.Component.extend({
  query: '',

  actualQuery: Ember.computed('query', function() { 
    console.log('actualquery function is called: ', this.get('query'));
  }),

  queryChanged: Ember.observer('query', function() { 
  	var query = this.get('query');
  	if(query.length > 3){
  		console.log('do some action')
  	}
  })
});
