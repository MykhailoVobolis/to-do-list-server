import { model, Schema } from 'mongoose';
import { mongooseSaveError } from './hooks.js';

const taskSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

taskSchema.post('save', mongooseSaveError);

export const TasksCollection = model('tasks', taskSchema);
