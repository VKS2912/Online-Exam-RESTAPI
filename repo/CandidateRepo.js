const db = require('../entity')
const { upcomingexam, sequelize } = require('../entity');
const candidate = require('../entity/candidate');
//const candidate = require('../entity/candidate');

const Candidate = db.candidates;

const addcandidate = async (req) => {
    try {
        let info = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            contact: req.body.contact
        }
        const candidate = await Candidate.create(info);
        return candidate;
    } catch (error) {
        throw new Error("incorrectdata")
    }  
}
const getAllcandidate = async () => {
    let candidate = await Candidate.findAll({
        attributes: { exclude: 'password' }
    });
    if (!candidate && candidate.length <= 0) {
        throw new Error("notfound")
    }
    return candidate;
}
const getAllcandidateWithExam = async () => {
    let candidate = await Candidate.findAll({
        include: upcomingexam,
        attributes: { exclude: 'password' }

    });
    if (!candidate && candidate.length <= 0) {
        throw new Error("notfound")
    }
    return candidate;
}

const getCandidatebyId = async (req) => {
    let Id = req.params.id;
    let candidate = await Candidate.findOne({
        where: { id: Id },
        attributes: { exclude: 'password' }
    })
    if (!candidate) {
        throw new Error("notfound")
    }
    return candidate;
}
const getCandidatebyIdWithExam = async (req) => {
    let Id = req.params.id;
    let candidate = await Candidate.findOne({
        where: { id: Id },
        include: upcomingexam,
        attributes: { exclude: 'password' }
    });
    if (!candidate) {
        throw new Error("notfound")
    }
    return candidate;
}
const updateCandidate = async (req) => {
    let Id = req.params.id;
    let candidate = await Candidate.update(req.body, {
        where: { id: Id },
        include: upcomingexam,
        attributes: { exclude: 'password' }
    });
    if (!candidate[0]) {
        throw new Error("notfound")
    }
    return candidate;
}
const deleteCandidateByid = async (req) => {
    let Id = req.params.id;
    let candidate = await Candidate.destroy({
        where: { id: Id }
    });
    if (!candidate) {
        throw new Error("notfound")
    }
    return candidate;
 }
module.exports = {
    addcandidate,
    getAllcandidate,
    getCandidatebyId,
    updateCandidate,
    deleteCandidateByid,
    getAllcandidateWithExam,
    getCandidatebyIdWithExam,
}
