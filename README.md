```
bun add -g wrangler
bun i
bun run dev
```

- Create schema.sql in root Directory

```
# ./schema.sql
create table customers
(
    id INTEGER primary key,
    name TEXT,
    email TEXT
);

insert into customers (name , email) values ('sayed','tahsin@gmail.com');
```

```
wrangler d1 create hono-cloudflare-worker-d1
```

- After creating a db, you will get some valiable like below, copy paste these variable in wrangler.toml file.

```
[[d1_databases]]
binding = "DB" # i.e. available in your Worker on env.DB
database_name = "hono-cfw-d1"
database_id = "xxx-xxx-431c-9670-c6c067364108"
```

- To execute the schema, run these commands.

```
wrangler d1 execute hono-cloudflare-worker-d1 --local --file=./schema.sql
wrangler d1 execute hono-cloudflare-worker-d1 --remote -- file=./schema.sql
```

```
bun run deploy
```
