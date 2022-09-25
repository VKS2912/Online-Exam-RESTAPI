const candidateController = require('../controller/candidateController')


const router = require('express').Router();

router.get('/getallcandidate', candidateController.getAllcandidate);

router.post('/addcandidate', candidateController.addcandidate);

router.get('/getcandidate/id/:id', candidateController.getCandidatebyId);

router.put('/updatecandidate/id/:id', candidateController.updateCandidate);

router.delete('/deletecandidate/id/:id', candidateController.deleteCandidateByid);

router.get('/getallcandidate/exam', candidateController.getAllcandidateWithExam);

router.get('/getcandidateexam/id/:id', candidateController.getCandidatebyIdWithExam);

module.exports = router;