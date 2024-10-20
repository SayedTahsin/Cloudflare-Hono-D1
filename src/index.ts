import { Hono } from "hono";

type Bindings = {
  DB: D1Database;
  OWNER: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});
app.get("/customers", async (c) => {
  const customers = await c.env.DB.prepare("select * from customers").all();

  return c.json(customers.results);
});

export default app;
