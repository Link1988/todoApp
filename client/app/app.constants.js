'use strict';

import angular from 'angular';

export default angular.module('ahernandezApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
