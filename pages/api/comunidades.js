import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(req, res){

    if(req.method === 'POST'){
        const TOKEN = '4d000e5649c0cd9ecd43828292ab12';
        const client = new SiteClient(TOKEN);

        const comunidadeCriada = await client.items.create({
            itemType: '972387',
            ...req
        })

        res.json({
            comunidadeCriada: comunidadeCriada
        })
    }
    return;
}