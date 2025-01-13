import { TasksCollection } from '../db/models/task.js';

export const getAllTasks = async ({ filter = {} }) => {
  const tasksQuery = TasksCollection.find();

  if (filter.description) {
    tasksQuery
      .where('description')
      .regex(new RegExp(filter.description, 'i'))
      .collation({ locale: 'en', strength: 2 });
  }
  const tasks = await tasksQuery;
  return tasks;
};

export const createTask = async (payload) => {
  const task = await TasksCollection.create(payload);
  return task;
};

export const deleteTask = async (taskId) => {
  const task = await TasksCollection.findOneAndDelete({
    _id: taskId,
  });
  return task;
};
