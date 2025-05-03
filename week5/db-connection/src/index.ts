import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {  PrismaClient } from './generated/prisma/index.js'
import { mainRouter } from './routes/index.route.ts'
const app = new Hono()
export const db =  new PrismaClient();

app.route("", mainRouter);

app.get('/users', async (c) => {
  const users = await db.user.findMany();
  return c.json(users);
});

app.patch('/todos/:id/complete', async (c) => {
  const id = Number(c.req.param('id'));
  try {
    const todo = await db.todo.update({
      where: { id },
      data: { completed: true },
    });
    return c.json(todo);
  } catch {
    return c.json({ error: 'not found' }, 404);
  }
});

app.patch('/todos/:id/title', async (c) => {
  const id = Number(c.req.param('id'));
  const { title } = await c.req.json();
  try {
    const todo = await db.todo.update({
      where: { id },
      data: { title },
    });
    return c.json(todo);
  } catch {
    return c.json({ error: 'not found' }, 404);
  }
});

app.get('/users/:id/todos', async (c) => {
  const userId = Number(c.req.param('id'));
  const todos = await db.todo.findMany({
    where: { userId },
  });
  return c.json(todos);
});

app.patch('/users/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const { firstName, lastName } = await c.req.json();
  try {
    const user = await db.user.update({
      where: { id },
      data: { firstName, lastName },
    });
    return c.json(user);
  } catch {
    return c.json({ error: 'not found' }, 404);
  }
});

db.$connect()
	.then(() => {
		console.log("Connected to the database");
	})
	.catch((error) => {
		console.error("Error connecting to the database:", error);
	});
  
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
