## Crear base de datos y lanzar aplicación

**Pasos**

1. Entrar en la siguiente carpeta:

```sh
cd src
```

2. Crear archivo `.env`:

```sh
mv .env.example  .env
nano  .env
```

3. Completar la URL de tu base de datos en Vercel:

```
POSTGRES_URL="postgres://..."
```

El formato de la URL es el siguiente `POSTGRES_URL="postgres://usuario:password@host:5432/basedatos"`


4. Ejecutar script:

```sh
npm run seed
```

4. Lanzar aplicación:

```sh
npm run dev
```


## Paquetes usados para Postgres de Vercel

- `@vercel/postgres`