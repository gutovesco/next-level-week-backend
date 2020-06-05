import knex from '../database/connection'
import {Request, Response} from 'express'

export default class ItemsController{
    async index(request: Request, response: Response){
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3330/uploads/${item.image}`
        }
    })
    
    return response.json(serializedItems)   
}
}