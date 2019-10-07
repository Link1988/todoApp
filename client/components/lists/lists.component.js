'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

import ListsService from './lists.service';
import Modal from '../modal/modal.service';

import './lists.less';


export class ListsController {

  constructor(ListsService, Modal, $location ) {
    'ngInject';
    this.ListsService = ListsService;
    this.modal = Modal;
    this.$location = $location;
  }

  $onInit() {
    this.ListsService.getLists().then(response => {
      this.lists = response.data;
    });
  }

  addNewList() {
    let action = this.modal.confirm.add((list) => {
      this.ListsService.addList(list).then((res) => {
        this.lists.push(res.data);
      }).catch((error) => {
        console.log(error);
      })
    });

    action();
  }

  editList(id) {
    this.$location.path(`/${id}`);
  }

  deleteList(id, name) {
    let action = this.modal.confirm.delete((id) => {
      this.ListsService.removeList(id).then((res) => {
        angular.forEach(this.lists, (list, i) => {
          if (list._id === id) {
            this.lists.splice(i, 1);
          }
        });
      }).catch((error) => {
        console.log(error);
      })
    });

    action(id, name);
  }
}

export default angular.module('components.lists', [Modal])
  .component('lists', {
    template: require('./lists.html'),
    controller: ListsController
  })
  .service('ListsService', ListsService)
  .name;
