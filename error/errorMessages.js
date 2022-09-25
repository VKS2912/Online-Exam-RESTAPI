module.exports = {
    notfound: {
        Status: 404,
        Message: "Not Found"
    },
    ValidationError:{
    Status : 422,
    Message: "Status Validation Error , Status Should be [0 , 1 , 2]"
    },
    incorrectdata:{
        Status : 422,
        Message: "incorrect data formate..."
    }


}