import Imagem from '../models/Image';

export default{
    render(imagem: Imagem){
        return{
            id: imagem.id,
            url: `${process.env.API_URL}/uploads/${imagem.path}`
        }
    },

    renderMany(imagens: Imagem[]){
        return imagens.map(imagem => this.render(imagem));
    }
}