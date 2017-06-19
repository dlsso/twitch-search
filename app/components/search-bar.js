import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  query: '',

  queryChanged: Ember.observer('query', function() {
    let query = this.get('query');
    // If we have a search term make a request, else clear existing data
    if(query.length){
      let request = {
        accept: 'application/vnd.twitchtv.v5+json',
        client_id: config.apiKey,
        limit: "10",
        offset: "0",
        query: query
      };
      Ember.$.get("https://api.twitch.tv/kraken/search/streams", request).then((response) => {
        // Send data to template after setting a few useful properties
        response.page_number = 1;
        response.pages = Math.ceil(response._total/parseInt(request.limit));
        // If we are on the last page remove link to next page
        // This standardizes the api which does not return a prev link for the first page
        if(response.page_number >= response.pages){
          delete response._links.next;
        }
        if(!response._total){
          response.no_results = true;
        }
        this.set('data', response);
      });
    } else {
      this.set('data', {});
    }
  })
});
