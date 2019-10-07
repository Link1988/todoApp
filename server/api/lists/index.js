'use strict';

import express from 'express';
import ListsController from './lists.controller'

var router = express.Router();

router.get('/', ListsController.index);
router.get('/:id', ListsController.show);
router.post('/', ListsController.create);
// router.put('/:id', ListsController.upsert);
// router.patch('/:id', ListsController.patch);
router.delete('/:id', ListsController.destroy);

module.exports = router;
