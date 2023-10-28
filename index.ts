import { Elysia, t } from 'elysia'
import { cors } from "@elysiajs/cors";
import { pool } from './db';

const PORT = Bun.env.PORT || 8080;

const app = new Elysia()
app.use(cors());

app.post('/user',
  async ({ body }) => {
    try {
      const name = body?.name
      const surname = body?.surname

      const newPerson = await pool.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname])

      return new Response(JSON.stringify(newPerson), {
        headers: { "Content-Type": "application/json" },
      });

    } catch (error) {
      console.error("Произошла ошибка:", error);
      return new Response(JSON.stringify({ message: "Ошибка при создании пользователя" }), {
        headers: { "Content-Type": "application/json" },
        status: 500,
      });
    }
  },
  {
    body: t.Object({
      name: t.String(),
      surname: t.String(),
    })
  })

// app.get('/user/', getUsers)
// app.get('/user/:id', getOneUser)
// app.put('/user', editUser)
// app.delete('/user', deleteUser)


app.listen(Number(PORT));

console.log(`🦊 Elysia is running at on port ${app.server?.port}...`)
