'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class TodoController {

    constructor() {
        'ngInject';
    }

    $onInit() {
    }

    delete(data) {
        data.todos = [];
    };

    add(data) {
        let post = data.todos.length + 1;
        let newName = `${data.name} - ${post}`;
        data.todos.push({name: newName, todos: []});
    };
}

export default angular.module('components.todo', [])
    .component('todo', {
        template: require('./todo.html'),
        controller: TodoController,
        bindings: {
            todos: '<',
            name: '<'
        }
    })
    .name;
