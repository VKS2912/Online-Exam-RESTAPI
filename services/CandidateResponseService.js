const candidateResponseRepo = require('../repo/CandidateResponseRepo');

const addResponse = async (req, res) => {
    let candiadteResponse = await candidateResponseRepo.addResponse(req, res);
    console.log("in the service.................");
    return candiadteResponse;
}
const getAllResponseByCandidateId = async (req, res) => {
    let candiadteResponse = await candidateResponseRepo.getAllResponseByCandidateId(req, res);
    return candiadteResponse;
}
const getResponseByCandidateIdQueId = async (req, res) => {
    let candiadteResponse = await candidateResponseRepo.getResponseByCandidateIdQueId(req, res);
    return candiadteResponse;
}
const updateResponseByCandidateIdQueId = async (req, res) => {
    let candiadteResponse = await candidateResponseRepo.updateResponseByCandidateIdQueId(req, res);
    return candiadteResponse;
}
const deleteAllResponse = async (req, res) => {
    let candiadteResponse = await candidateResponseRepo.deleteAllResponse(req, res);
    return candiadteResponse;
}
const deleteAllResponseByCandidateId = async (req, res) => {
    let candiadteResponse = await candidateResponseRepo.deleteAllResponseByCandidateId(req, res)
    return candiadteResponse;
}
const deleteSingleResponseByCandidateIdQueId = async (req, res) => {
    let candiadteResponse = await candidateResponseRepo.deleteSingleResponseByCandidateIdQueId(req, res)
    return candiadteResponse;
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