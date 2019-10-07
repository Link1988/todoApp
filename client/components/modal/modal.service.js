'use strict';

import angular from 'angular';

export function Modal($rootScope, $uibModal) {
  'ngInject';

  function openModal(scope = {}, modalClass = 'modal-default') {
    var modalScope = $rootScope.$new();

    angular.extend(modalScope, scope);

    return $uibModal.open({
      template: require('./modal.html'),
      windowClass: modalClass,
      scope: modalScope
    });
  }

  return {

    /* Modal */
    confirm: {

      delete(del = angular.noop) {

        return function(...args) {
          const slicedArgs = Array.prototype.slice.call(args);
          var id = slicedArgs.shift();
          var name = slicedArgs.shift();
          var deleteModal;

          deleteModal = openModal({
            modal: {
              dismissable: true,
              title: 'Eliminar lista',
              html: `<p>Desea eliminar la lista <strong>${name}</strong> ?</p>`,
              buttons: [{
                classes: 'btn-danger',
                text: 'Eliminar',
                click(e) {
                  deleteModal.close(id);
                }
              }, {
                classes: 'btn-default',
                text: 'Cancelar',
                click(e) {
                  deleteModal.dismiss(e);
                }
              }]
            }
          }, 'modal-danger');

          deleteModal.result.then(function(event) {
            del(event);
          });
        };
      },

      add(del = angular.noop) {
        return function() {
          let addModal;

          addModal = openModal({
            modal: {
              dismissable: true,
              title: 'Añadir Lista',
              html: `<p>Inserta nombre de la lista</p>`,
              scope: {
                name: '',
                isRoot: true
              },
              inputs: [{
                class: 'form-control',
                type: 'text',
                label: 'Lista:'
              }],
              buttons: [{
                classes: 'btn-primary',
                text: 'Agregar',
                click(scope) {
                  addModal.close(scope);
                }
              }, {
                classes: 'btn-default',
                text: 'Cancelar',
                click(e) {
                  addModal.dismiss(e);
                }
              }]
            }
          }, 'modal-primary');

          addModal.result.then(function(event) {
            del(event);
            // Reflect.apply(del(event), event, slicedArgs);
          });
        }
      },

    }
  };
}

export default angular.module('ahernandezApp.Modal',[])
  .factory('Modal', Modal)
  .name;
