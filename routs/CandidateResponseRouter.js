const router = require('express').Router();
const candiadteResponseController = require('../controller/CandidateResponseController');
const { route } = require('./CandidateExamRouter');

router.post('/addresponse',candiadteResponseController.addResponse);

router.get('/get/allresponse/candidateId/:uId',candiadteResponseController.getAllResponseByCandidateId);

router.get('/get/response/cadidateId/queId/:uId/:qId',candiadteResponseController.getResponseByCandidateIdQueId);

router.put('/update/response/candidateId/queId/:uId/:qId',candiadteResponseController.updateResponseByCandidateIdQueId);

router.delete('/delete/allresponse',candiadteResponseController.deleteAllResponse);

router.delete('/delete/allresponse/candidateId/:uId',candiadteResponseController.deleteAllResponseByCandidateId);

router.delete('/delete/singleresponse/candidateId/queId/:uId/:qId',candiadteResponseController.deleteSingleResponseByCandidateIdQueId);

module.exports=router;