const { Console } = require('winston/lib/winston/transports');
const db = require('../entity')
const   CandidateResponse = db.candidateExam;

const addExam = async (req, res) => {
    try {
        let info = {
            candidateId: req.body.candidateId,
            examId: req.body.examId,
            startTime: req.body.startTime,
            endTime: req.body.endTime
        }
        const candidateExam = await CandidateResponse.create(info);
        return candidateExam;
    } catch (error) {
        throw new Error("incorrectdata")
    }
}
const getAllExam = async (req, res) => {
    let upcomingexam = await CandidateResponse.findAll({
    });
    if (!upcomingexam && upcomingexam.length <= 0) {
        throw new Error("notfound");
    }
    return upcomingexam;
}
const getExamById = async (req, res) => {
    let Id = req.params.id;
    let upcomingexam = await CandidateResponse.findOne({
        where: { id: Id }
    });
    if (!upcomingexam) {
        throw new Error("notfound");
    }
    return upcomingexam;
}
const updateExamById = async (req, res) => {
    try {
        let Id = req.params.id;
        let upcomingexam = await CandidateResponse.update(req.body, {
            where: { id: Id }
        })
        if (!upcomingexam[0]) {
            throw new Error("notfound");
        }
        return upcomingexam;
    } catch (error) {
        if (error.message === "notfound") {
            throw new Error("notfound");
        }
        throw new Error("ValidationError");
    }
}
const deleteExam = async (req, res) => {
    let Id = req.params.id;
    let upcomingexam = await CandidateResponse.destroy({
        where: { id: Id }
    });
    if (!upcomingexam) {
        throw new Error("notfound");
    }
    return upcomingexam;
}
const updateStatus = async (req, res) => {
    let Id = req.params.id;
    let uId = req.params.uId
    let exam = await CandidateResponse.update(req.body, {
        where: { id: Id, candidateId: uId }
    })
    if (!upcomingexam[0]) {
        throw new Error("notfound");
    }
    return exam;
}
const getAllUpcomingExamByUid = async (req, res) => {
    let Id = req.params.uId;
    let upcomingexam = await CandidateResponse.findAll({
        where: {
            candidateId: Id,
            status: 0
        }
    })
    if (!upcomingexam) {
        throw new Error("notfound");
    }
    return upcomingexam;
}
const getAllProcessingExambyUid = async (req, res) => {
    let Id = req.params.uId;
    let processingexam = await CandidateResponse.findAll({
        where: {
            candidateId: Id,
            status: 1
        }
    })
    if (!processingexam) {
        throw new Error("notfound");
    }
    return processingexam;
}
const getAllGivenExambyUid = async (req, res) => {
    let Id = req.params.uId;
    let givenexam = await CandidateResponse.findAll({
        where: {
            candidateId: Id,
            status: 2
        }
    })
    if (!givenexam) {
        throw new Error("notfound");
    }
    return givenexam;
}
module.exports = {
    addExam,
    getAllExam,
    getExamById,
    updateExamById,
    deleteExam,
    updateStatus,
    getAllUpcomingExamByUid,
    getAllProcessingExambyUid,
    getAllGivenExambyUid
}