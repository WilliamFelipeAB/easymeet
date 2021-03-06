import {ErrorRequestHandler, request, response} from 'express';

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    console.error(error);

    return response.status(500).json({message: 'Erro do servidor interno'});
}


export default errorHandler;