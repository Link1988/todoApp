'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

import TodosService from './todos.service';
import Modal from '../modal/modal.service';
import Todo from './todo/todo.component';

import './todos.less';


export class TodosController {

  constructor($routeParams, TodosService) {
    'ngInject';
    this.TodosService = TodosService;
    this.id = $routeParams.id
  }

  $onInit() {
    this.TodosService.getTodo(this.id).then((res) => {
      this.listName = res.data.name;
      this.todos = [{
        name: res.data.name,
        todos: []
      }]
    }).catch((error) => console.log(error));
  }
}

export default angular.module('components.todos', [Modal, Todo])
  .component('todos', {
    template: require('./todos.html'),
    controller: TodosController
  })
  .service('TodosService', TodosService)
  .name;
