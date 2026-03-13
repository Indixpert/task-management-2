import { Router } from 'express';
import { getBoards, getBoardById, createBoard } from '../controllers/boardController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.route('/')
  .get(protect, getBoards)
  .post(protect, createBoard);

router.route('/:id')
  .get(protect, getBoardById);

export default router;