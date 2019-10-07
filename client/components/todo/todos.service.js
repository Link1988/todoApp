'use strict';

export default class TodosService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  getTodo(id) {
    return this.$http.get(`api/lists/${id}`);
  }

  // addList(payload) {
  //   return this.$http.post('/api/lists', payload);
  // }
  //
  // removeList(id) {
  //   return this.$http.delete(`api/lists/${id}`);
  // }
}
