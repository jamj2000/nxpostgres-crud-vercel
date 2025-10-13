import { sql } from '@vercel/postgres';


const load = async () => {
    try {
        let result = await sql`
        CREATE TABLE IF NOT EXISTS articulos (
            id SERIAL PRIMARY KEY,
            nombre TEXT NOT NULL,
            descripcion TEXT,
            precio DECIMAL(10,2)
            );
        `;
        console.log("Creada tabla artículos");

        result = await sql`
        INSERT INTO articulos (nombre, descripcion, precio)
        VALUES 
           ('PC', 'Ordenador de sobremesa', 1999.99),
           ('Impresora', 'Impresora Epson', 155.99),
           ('Teclado', 'Teclado USB', 19.91);
        `;
        console.log("Insertados varios artículos");

        await sql.end()

    } catch (error) {
        console.log(error);
    }
}

load();

