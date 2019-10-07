'use strict';

export default class ListsService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  getLists() {
    return this.$http.get('/api/lists');
  }

  addList(payload) {
    return this.$http.post('/api/lists', payload);
  }

  removeList(id) {
    return this.$http.delete(`api/lists/${id}`);
  }
}
