const examRepo = require('../repo/CandidateExamRepo')

const addUpcomingExam = async (req, res) => {
    const createcandiddate = await examRepo.addExam(req, res);
    return createcandiddate;
}
const getAllUpcomingExam = async (req, res) => {
    let allupcomingexam = await examRepo.getAllExam(req, res);
    return allupcomingexam;
}
const getById = async (req, res) => {
    let upcomingexam = await examRepo.getExamById(req, res);//getUpcomingExamById
    return upcomingexam;
}
const updateStatusById = async (req, res) => {
    let oneUpcomingExam = await examRepo.updateExamById(req, res);//updateStatusById
    return oneUpcomingExam;
}
const deleteUpcomingExamById = async (req, res) => {
    let upcomingexam = await examRepo.deleteExam(req, res);//deleteUpcomingExam
    return upcomingexam;
}
const updateStatus = async (req, res) => {
    let updatedStatus = await examRepo.updateStatus(req, res);
    return updatedStatus;
}
const getAllUpcomingExamByUid = async (req, res) => {
    let allupcomingexam = await examRepo.getAllUpcomingExamByUid(req, res);
    return allupcomingexam;
}
const getAllProcessingExambyUid = async (req, res) => {
    let allProcessingExam = await examRepo.getAllProcessingExambyUid(req, res);
    return allProcessingExam;
}
const getAllGivenExambyUid = async (req, res) => {
    let allGivenExam = await examRepo.getAllGivenExambyUid(req, res);
    return allGivenExam;
}
module.exports = {
    addUpcomingExam,
    getAllUpcomingExam,
    getById,
    updateStatusById,
    deleteUpcomingExamById,
    updateStatus,
    getAllUpcomingExamByUid,
    getAllProcessingExambyUid,
    getAllGivenExambyUid
}