'use server'
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';



export async function newArticulo(prevState, formData) {
  try {
    const nombre = formData.get('nombre');
    const descripcion = formData.get('descripcion');
    const precio = formData.get('precio');

    const results = await sql`
    insert into articulos(nombre,descripcion,precio) values (${nombre}, ${descripcion}, ${precio});
    `
    console.log(results);

    revalidatePath('/articulos');
    return { success: 'Operación exitosa' }
  } catch (error) {
    console.log(error);
  }

}



export async function editArticulo(prevState, formData) {
  const id = formData.get('id')
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = formData.get('precio')

  try {
    const results = await sql` 
    update articulos set nombre=${nombre}, descripcion=${descripcion}, precio=${precio} where id = ${id};
    `
    console.log(results);

    revalidatePath('/articulos');
    return { success: 'Operación exitosa' }
  } catch (error) {
    console.log(error);
  }

}



export async function deleteArticulo(prevState, formData) {
  try {
    const id = formData.get('id');

    const results = await sql`delete from articulos where id = ${id};`
    console.log(results);

    revalidatePath('/articulos');
    return { success: 'Operación exitosa' }
  } catch (error) {
    console.log(error);
  }

}