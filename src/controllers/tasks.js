import createHttpError from 'http-errors';
import { createTask, deleteTask, getAllTasks } from '../services/tasks.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getTasksController = async (req, res, _next) => {
  const filter = parseFilterParams(req.query);

  const tasks = await getAllTasks({
    filter,
  });

  res.json({
    status: 200,
    message: 'Successfully found tasks!',
    data: tasks,
  });
};

export const createTaskController = async (req, res) => {
  const task = await createTask(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a task!`,
    data: task,
  });
};

export const deleteTaskController = async (req, res, next) => {
  const { taskId } = req.params;

  const task = await deleteTask(taskId);

  if (!task) {
    next(createHttpError(404, 'Task not found'));
    return;
  }

  res.status(200).json({
    status: 200,
    message: `Successfully delete a task!`,
    data: task,
  });
};
