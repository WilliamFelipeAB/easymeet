import {getRepository} from 'typeorm';
import Evento from '../models/Evento'

import {Request, Response} from 'express';

import eventoView from '../views/eventosView';

export default {
    async index(request: Request, response: Response){
        
        const eventoRepository = getRepository(Evento);

        const eventos = await eventoRepository.find({
            relations: ['images']
        });

        return response.json(eventoView.renderMany(eventos));        
    },

    async show(request: Request, response: Response){
        
        const { id } = request.params;

        const eventoRepository = getRepository(Evento);

        const evento = await eventoRepository.findOneOrFail(id, {
            relations:['images']
        });

        return response.json(eventoView.render(evento));        
    },

    async create(request: Request, response: Response){
        const {
            nome,
            descricao,
            tipo,
            datahorainicial,
            datahorafinal,
            vagas_total,
            vagas_preenchidas,
            responsavel,
        } = request.body;
    
        const eventoRepository = getRepository(Evento);
        
        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image => {
            return {path:image.filename};
        })

        const evento = eventoRepository.create({
            nome,
            descricao,
            tipo,
            datahorainicial,
            datahorafinal,
            vagas_total,
            vagas_preenchidas,
            responsavel,
            images
        });
    
        await eventoRepository.save(evento);
    
        return response.status(201).json(evento);
    }
}