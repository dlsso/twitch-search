import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  query: '',

  queryChanged: Ember.observer('query', function() {
    var query = this.get('query');
    if(query.length > 3){
      let request = {
        client_id: config.apiKey,
        limit: "10",
        offset: "0",
        query: query
      };
      Ember.$.get("https://api.twitch.tv/kraken/search/streams", request).then((response) => {
        console.log(response)
      });
    }
  })
});
