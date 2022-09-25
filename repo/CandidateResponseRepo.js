const db = require('../entity')
const CandidateResponse = db.candidateResponse;

const addResponse = async (req, res) => {
    try {
        let info = {
            candidateId: req.body.candidateId,
            examId: req.body.examId,
            queId: req.body.queId,
            responseId: req.body.responseId
        }
        const candidateResponse = await CandidateResponse.create(info);
        return candidateResponse;
    } catch (error) {
        throw new Error("incorrectdata");
    }
}
const getAllResponseByCandidateId = async (req, res) => {
    let uId = req.params.uId;
    let candidateResponse = await CandidateResponse.findAll({
        where: {
            candidateId: uId
        }
    });
    if (!candidateResponse) {
        throw new Error("notfound")
    }
    return candidateResponse;
}
const getResponseByCandidateIdQueId = async (req, res) => {
    let uId = req.params.uId;
    let qId = req.params.qId;
    let candiadteResponse = await CandidateResponse.findOne({
        where: {
            candidateId: uId,
            queId: qId
        }
    });
    if (!candiadteResponse) {
        throw new Error("notfound")
    }
    return candiadteResponse;
}
const updateResponseByCandidateIdQueId = async (req, res) => {
    let uId = req.params.uId;
    let qId = req.params.qId;
    console.log("uid = " + uId + "queid = " + qId);
    let candiadteResponse = await CandidateResponse.update(req.body, {
        where: {
            candidateId: uId,
            queId: qId
        }
    })
    if (!candiadteResponse[0]) {
        throw new Error("notfound");
    }
}
const deleteAllResponse = async (req, res) => {
    let candiadteResponse = await CandidateResponse.destroy()
    if (!candiadteResponse) {
        throw new Error("notfound");
    }
}
const deleteAllResponseByCandidateId = async (req, res) => {
    let uId = req.params.uId;
    let candiadteResponse = await CandidateResponse.distroy({
        where: {
            candidateId: uId,
        }
    })
    if (!candiadteResponse) {
        throw new Error("notfound");
    }
}
const deleteSingleResponseByCandidateIdQueId = async (req, res) => {
    let uId = req.params.uId;
    let qId = req.params.qId;
    let candiadteResponse = await CandidateResponse.distroy({
        where: {
            candidateId: uId,
            queId: qId
        }
    })
    if (!candiadteResponse) {
        throw new Error("notfound");
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
