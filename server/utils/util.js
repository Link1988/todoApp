import jsonpatch from "fast-json-patch";

class Util {

  static respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;

    return function(entity) {
      if(entity) {
        return res.status(statusCode).json(entity);
      }
      return null;
    };
  }

  static patchUpdates(patches) {
    return function (entity) {
      try {
        // eslint-disable-next-line prefer-reflect
        jsonpatch.applyPatch(entity, patches, /*validate*/ true);
        return entity.save();
      } catch (err) {
        return Promise.reject(err);
      }

      return entity.save();
    }
  }

    static removeEntity(res) {
      return function (entity) {
        if (entity) {
          return entity.remove()
            .then(() => {
              res.status(204).end();
            });
        }
      };
    }

    static handleEntityNotFound(res) {
      return function(entity) {
        if(!entity) {
          res.status(404).end();
          return null;
        }
        return entity;
      };
    }

    static handleError(res, statusCode) {
      statusCode = statusCode || 500;

      return function(err) {
        res.status(statusCode).send(err);
      };
    }
}

export default Util;
