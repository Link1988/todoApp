'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {

  constructor($location) {
    'ngInject';

    this.$location = $location;
  }
}

export default angular.module('components.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
