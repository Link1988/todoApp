'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/', {
    template: '<main></main>'
  });

  $routeProvider.when('/:id', {
    template: '<todos></todos>'
  });
}
