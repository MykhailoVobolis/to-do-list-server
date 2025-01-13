import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createTaskController,
  deleteTaskController,
  getTasksController,
} from '../controllers/tasks.js';
import { createTaskSchema } from '../validation/tasks.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

// Роут отримання колекції всіх завдань
router.get('/', ctrlWrapper(getTasksController));

// Роут додавання нового завдання
router.post(
  '',
  validateBody(createTaskSchema),
  ctrlWrapper(createTaskController),
);

// Роут видалення завдання за його id
router.delete('/:taskId', isValidId, ctrlWrapper(deleteTaskController));

export default router;
