'use strict';

import mongoose from 'mongoose';
import {Schema} from 'mongoose';


const TodoSchema = new Schema({
  name: Schema.Types.String
});

const ListSchema = new Schema({
  name: Schema.Types.String,
  isRoot: Schema.Types.Boolean,
  things: [TodoSchema]
});

export default mongoose.model('List', ListSchema);
