const { response, request } = require("express")


const validarJWT = (req = request, res = response, next ) => {
    const token = req.header('x-token');

    console.log(token);

    next();
}

module.exports = {
    validarJWT
}