const ExamService = require('../services/CandidateExamService');
const ExamErrorMsg = require('../error/errorMessages');
const examRepo = require ('../repo/CandidateExamRepo');
const logger = require('../loggerConfig/loggerConfig');

//create upcomingexam 
const addExam = async (req, res,next) => {
    try {
        let  upcomingexam = await ExamService.addUpcomingExam(req, res);
        logger.info('CandidateExam Records Added successfuly.. :  '+__filename)
        res.status(200).send(upcomingexam);
    } catch (error) {
        logger.error('Unable to add Exam : '+error+' : '+__filename)
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }   
}
const getAllExam = async (req, res, next) => {
    try {
        let upcomingexam = await ExamService.getAllUpcomingExam(req, res);
        logger.info('All Exam Records Fetched Successfuly.. :  '+__filename)
        res.status(200).send(upcomingexam)
    } catch (error) {
        logger.error('Unable to Fetch Exam : '+error+' : '+__filename)
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }
}
const getExamById = async (req, res, next) => {
    try {
        let upcomingexam = await ExamService.getById(req, res);
        logger.info('Exam Record Fetched Successfuly By Id.. :  '+__filename)
        res.status(200).send(upcomingexam);
    } catch (error) {
        logger.error('Unable to Fetch Exam By Id : '+error+' : '+__filename)
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }
}
const updateStatusById = async (req, res, next) => {
    try {
        await ExamService.updateStatusById(req, res);
        logger.info('Exam Update Successfuly By Id.. :  '+__filename)
        res.status(200).send("update successfuly at Id = " + req.params.id)
    } catch (error) {
        logger.error('Unable to add Exam : '+error+' : '+__filename)
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }
}
const deleteUpcomingExam = async(req ,res,next ) =>{
    try {
        await ExamService.deleteUpcomingExamById(req , res);
        logger.info('Delete Exam Records Successfuly.. :  '+__filename)
        res.status(200).send("exam deletd successfully...")
    } catch (error) {
        logger.error('Unable to Delete Exam : '+error+' : '+__filename)
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }
}
const getAllUpcomingExamByUId = async(req , res ,next)=>{
    try {
        let upcomingexam = await ExamService.getAllUpcomingExamByUid(req,res);
        logger.info('All UpcomingExam Fetched Successfuly.. :  '+__filename)
        res.status(200).send(upcomingexam)
    } catch (error) {
        logger.error('Unable to Fetch UpcomingExam : '+error+' : '+__filename)
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message }); 
    }
}
const getAllProcessingExam =async(req,res,next) =>{
    try {
        let proccesingexam = await ExamService.getAllProcessingExambyUid(req,res);
        logger.info('All ProcessingExam Fetched Successfuly.. :  '+__filename)
        res.status(200).send(proccesingexam);
    } catch (error) {
        logger.error('Unable to Fetch ProcessingExam : '+error+' : '+__filename)
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }
}
const getAllGivenExam =async(req,res,next) =>{
    try {
        let givenexam = await ExamService.getAllGivenExambyUid(req,res);
        logger.info('All GivenExam Fetched Successfuly.. :  '+__filename)
        res.status(200).send(givenexam);
    } catch (error) {
        logger.error('Unable to Fetch GivenExam : '+error+' : '+__filename)
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }
}
module.exports = {
    addExam,
    getAllExam,
    getExamById,
    updateStatusById,
    deleteUpcomingExam,
    getAllUpcomingExamByUId,
    getAllProcessingExam,
    getAllGivenExam
}