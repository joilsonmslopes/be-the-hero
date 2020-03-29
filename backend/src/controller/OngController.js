const generateUniqueId = require('../utils/generateUniqueId'); //Para retornar uma encriptação de algum ID ou Senha
const connection = require('../database/connection');

module.exports = {
    async index(request, response) { // Para listar tudo que tem dentro da table ongs
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    
        return response.json({ id });
    }
};