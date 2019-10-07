/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/lists              ->  index
 * POST    /api/lists              ->  create
 * GET     /api/lists/:id          ->  show
 * PUT     /api/lists/:id          ->  upsert
 * PATCH   /api/lists/:id          ->  patch
 * DELETE  /api/lists/:id          ->  destroy
 */

'use strict';

import List from './lists.model';
import Util from '../../utils/util';

class ListsController extends Util {
  static index(req, res) {
    return List.find().exec()
      .then(super.respondWithResult(res))
      .catch(super.handleError(res));
  }

  static show(req, res) {
    return List.findById(req.params.id).exec()
      .then(super.handleEntityNotFound(res))
      .then(super.respondWithResult(res))
      .catch(super.handleError(res));
  }

  static create(req, res) {
    return List.create(req.body)
      .then(super.respondWithResult(res, 201))
      .catch(super.handleError(res));
  }

  static destroy(req, res) {
    return List.findById(req.params.id).exec()
      .then(super.handleEntityNotFound(res))
      .then(super.removeEntity(res))
      .catch(super.handleError(res));
  }

  static patch(req, res) {
    if(req.body._id) {
      Reflect.deleteProperty(req.body, '_id');
    }
    return List.findById(req.params.id).exec()
      .then(super.handleEntityNotFound(res))
      .then(super.patchUpdates(req.body))
      .then(super.respondWithResult(res))
      .catch(super.handleError(res));
  }

  static upsert(req, res) {
    if(req.body._id) {
      Reflect.deleteProperty(req.body, '_id');
    }

    return List.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()
      .then(super.respondWithResult(res))
      .catch(super.handleError(res));
  }
}

export default ListsController;
