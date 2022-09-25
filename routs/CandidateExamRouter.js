const examController = require('../controller/CandidateExamController')

const router = require('express').Router();

router.post('/addexam', examController.addExam);

router.get('/getallexam', examController.getAllExam);

router.put('/update/exam/id/:id', examController.updateStatusById);

router.get('/getexam/id/:id', examController.getExamById);

router.delete('/deleteexam/id/:id',examController.deleteUpcomingExam);

router.get('/getupcomingexam/candidateId/:uId',examController.getAllUpcomingExamByUId);

router.get('/getprocessingexam/candidateId/:uId',examController.getAllProcessingExam)

router.get('/getgivenexam/candidateId/:uId',examController.getAllGivenExam)

module.exports = router;