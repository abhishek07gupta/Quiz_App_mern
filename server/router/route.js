import { Router } from "express";
import * as controller from "../controllers/controller.js";

const router=Router();

// questions route

router.get('/questions',controller.getQuestions);
router.post('/questions',controller.insertQuestions);
router.delete('/questions',controller.dropQuestions);
//          or we can write
// router.route('/questions').get(controller.getQuestions).post(controller.insertQuestions)

router.route('/result').get(controller.getResult).post(controller.storeResult).delete(controller.dropResult);

export default router;