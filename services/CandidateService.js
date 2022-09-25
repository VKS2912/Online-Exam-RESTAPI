const candidateRepo = require('../repo/CandidateRepo')


const create = async (req, res) => {
    const createcandiddate = await candidateRepo.addcandidate(req, res);
    return createcandiddate;
}
const getall = async (req, res) => {
    let allcandidate = await candidateRepo.getAllcandidate();
    return allcandidate;
}
const getallWithExam = async () => {
    let allcandidate = await candidateRepo.getAllcandidateWithExam();
    return allcandidate;
}

const getOneById = async (req) => {
    let oneCandidate = await candidateRepo.getCandidatebyId(req);
    return oneCandidate;
}
const getOneByIdWithExam = async (req) => {
    let oneCandidate = await candidateRepo.getCandidatebyIdWithExam(req);
    return oneCandidate;
}

const updateById = async (req) => {
    let updatedCandidate = await candidateRepo.updateCandidate(req);
    return updatedCandidate;
}

const deleteCandidate = async (req) => {
    let deletedcandidate = await candidateRepo.deleteCandidateByid(req);
    return deletedcandidate;
}
module.exports = {
    create,
    getall,
    getOneById,
    updateById,
    deleteCandidate,
    getOneByIdWithExam,
    getallWithExam,
}