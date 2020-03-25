const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const { page = 1} = request.query;

        const [count] = await connection('incidents').count();

        console.log(count);

        const incidents = await connection('incidents') // PAGINAÇÃO
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5) // Para mostrar os registro de 5 em 5
        .offset((page - 1) * 5) // Calculo feito para na primeira pagina começar com os 5 registros
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf'
        ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not permitted'});
        }

        await connection('incidents').where('id', id).delete(); //Para deletar o casa com a id correta

        return response.status(204).send();
    } 
};