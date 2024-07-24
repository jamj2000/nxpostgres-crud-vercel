// import { sql } from '@vercel/postgres';
import postgres from 'postgres'

const sql = postgres(process.env.POSTGRES_URL)

// export default sql


async function crearTabla() {
    try {
        const result1 = await sql`
        CREATE TABLE IF NOT EXISTS articulos2 (
            id SERIAL PRIMARY KEY,
            nombre TEXT NOT NULL,
            descripcion TEXT,
            precio DECIMAL(10,2),
            "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
            );
        `;

        const result2 = await sql`
        INSERT INTO articulos (nombre, descripcion, precio)
        VALUES 
           ('PC', 'Ordenador de sobremesa', 999.99),
           ('Impresora', 'Impresora Epson', 55.99),
           ('Teclado', 'Teclado USB', 19.91);
        `;

        await sql.end()
        
    } catch (error) {
        console.log(error);
    }
}

crearTabla();

