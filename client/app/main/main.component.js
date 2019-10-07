// Dependencies
import angular from 'angular';
import routing from './main.routes';
import ngRoute from 'angular-route';

// Components
import lists from '../../components/lists/lists.component';

export class MainController {

  /*@ngInject*/
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  // $onInit() {
  //   this.$http.get('/api/things')
  //     .then(response => {
  //       this.awesomeThings = response.data;
  //     });
  // }
  //
  // addThing() {
  //   if(this.newThing) {
  //     this.$http.post('/api/things', {
  //       name: this.newThing
  //     });
  //     this.newThing = '';
  //   }
  // }
  //
  // deleteThing(thing) {
  //   this.$http.delete(`/api/things/${thing._id}`);
  // }
}

export default angular.module('ahernandezApp.main', [
  ngRoute,
  lists
])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
