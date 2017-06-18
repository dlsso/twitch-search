import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
	actions: {
		changePage: function(url){
			let queryString = url.split('?')[1];
			let numberPerPage = parseInt(queryString.split('limit=')[1].split('&')[0]);
			let offset = parseInt(queryString.split('offset=')[1].split('&')[0]);
			let request = {
				accept: 'application/vnd.twitchtv.v5+json',
				client_id: config.apiKey,
			};
			Ember.$.get(url, request).then((response) => {
		        // Send data to template after setting a few useful properties
				response.page_number = (offset/numberPerPage) + 1;
				response.pages = Math.ceil(response._total/numberPerPage);
				if(!response._total){
					response.no_results = true;
				}
				this.set('data', response);
			});
		},
		handleKeyPress: function(links){
			// Show previous page on left arrow
			if(event.keyCode === 37 && links.prev){
				this.send('changePage', links.prev);
			}
			// Show next page on right arrow
			if(event.keyCode === 39 && links.next){
				this.send('changePage', links.next);
			}
		}
	},
});
