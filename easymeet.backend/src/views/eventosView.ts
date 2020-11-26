import Evento from '../models/Evento';
import imagensView from './imagensView';

export default{
    render(evento: Evento){
        return{
            id: evento.id,
            descricao: evento.descricao,
            datahorainicio: evento.datahorainicial,
            datahorafinal: evento.datahorafinal,
            tipo: evento.tipo,
            vagas_total: evento.vagas_total,
            vagas_preenchidas: evento.vagas_preenchidas,
            responsavel: evento.responsavel,
            images: imagensView.renderMany(evento.images)
        }
    },

    renderMany(eventos: Evento[]){
        return eventos.map(evento => this.render(evento))
    }
}