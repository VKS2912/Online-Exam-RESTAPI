const candidateResponseService = require('../services/CandidateResponseService')
const ErrorMessage = require('../error/errorMessages')
const logger = require('../loggerConfig/loggerConfig');

const addResponse = async (req, res, next) => {
    try {
        let candiadteResponse = await candidateResponseService.addResponse(req, res);
        logger.info('Candidate Response Added successfuly.. :  ' + __filename)
        res.status(200).send(candiadteResponse);
    } catch (error) {
        logger.error('Unable to add Response : '+error+' : '+__filename)
        next({ status: ErrorMessage[error.message].Status, message: ErrorMessage[error.message].Message });
    }
}
const getAllResponseByCandidateId = async (req, res, next) => {
    try {
        let candiadteResponse = await candidateResponseService.getAllResponseByCandidateId(req, res);
        logger.info('Candidate Response Fetched successfuly By CandidateId.. :  ' + __filename)
        res.status(200).send(candiadteResponse);
    } catch (error) {
        logger.error('Unable to Get Response By CandidateId : '+error+' : '+__filename)
        next({ status: ErrorMessage[error.message].Status, message: ErrorMessage[error.message].Message });
    }
}
const getResponseByCandidateIdQueId = async (req, res, next) => {
    try {
        let candiadteResponse = await candidateResponseService.getResponseByCandidateIdQueId(req, res);
        logger.info('Candidate Response Fetched successfuly By candidateId and QueId.. :  ' + __filename)
        res.status(200).send(candiadteResponse);
    } catch (error) {
        logger.error('Unable to Get Response By CandidateId and QueId : '+error+' : '+__filename)
        next({ status: ErrorMessage[error.message].Status, message: ErrorMessage[error.message].Message });
    }
}
const updateResponseByCandidateIdQueId = async (req, res, next) => {
    try {
        await candidateResponseService.updateResponseByCandidateIdQueId(req, res);
        logger.info('Response Update successfuly By CandidateId and QueId.. :  ' + __filename)
        res.status(200).send("Response update Successfuly at candiadteId = " + (req.params.uId) + " and QueId = " + (req.params.qId))
    } catch (error) {
        logger.error('Unable to Update Response by CandidateId and QueId : '+error+' : '+__filename)
        next({ status: ErrorMessage[error.message].Status, message: ErrorMessage[error.message].Message });
    }
}
const deleteAllResponse = async (req, res, next) => {
    try {
        await candidateResponseService.deleteAllResponse(req, res);
        logger.info('Delete All Response successfuly.. :  ' + __filename);
        res.status(200).sens("Delete All Response Successfuly..")
    } catch (error) {
        logger.error('Unable to Delete All Response : '+error+' : '+__filename)
        next({ status: ErrorMessage[error.message].Status, message: ErrorMessage[error.message].Message });
    }
}
const deleteAllResponseByCandidateId = async (req, res, next) => {
    try {
        await candidateResponseService.deleteAllResponseByCandidateId(req, res);
        logger.info('Delete All Response successfuly By CandidateId.. :  ' + __filename)
        res.status(200).sens("Delete All Response Successfuly of CandidateId = " + (req.params.uId))
    } catch (error) {
        logger.error('Unable to Delete All Response by CandidateId : '+error+' : '+__filename)
        next({ status: ErrorMessage[error.message].Status, message: ErrorMessage[error.message].Message });
    }
}
const deleteSingleResponseByCandidateIdQueId = async (req, res, next) => {
    try {
        await candidateResponseService.deleteSingleResponseByCandidateIdQueId(req, res);
        logger.info('Delete All Response successfuly By CandidateId and QueId.. :  ' + __filename)
        res.status(200).send("Delete Response At candidateId = " + (req.params.uId) + "and queId =" + (eq.params.qId))
    } catch (error) {
        logger.error('Unable to Delete Single Response By CandiateId and QueId : '+error+' : '+__filename)
        next({ status: ErrorMessage[error.message].Status, message: ErrorMessage[error.message].Message });
    }
}

module.exports = {
    addResponse,
    getAllResponseByCandidateId,
    getResponseByCandidateIdQueId,
    updateResponseByCandidateIdQueId,
    deleteAllResponse,
    deleteAllResponseByCandidateId,
    deleteSingleResponseByCandidateIdQueId
}