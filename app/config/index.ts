const config = {
  server: { port: process.env.SERVER_PORT },
  db: {
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_name: process.env.DB_NAME,
    db_port: process.env.DB_PORT,
  },
}

export default config
