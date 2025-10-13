'use server'
import { sql } from '@vercel/postgres';


export async function getArticulos() {
    try {
        const { rows } = await sql`select * from articulos;`
        return rows;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}


export async function getArticulo(id) {
    try {
        const { rows } = await sql`select * from articulos where id=${id};`
        return rows[0];
    } catch (error) {
        // console.log(error);  
        return null;
    }
}