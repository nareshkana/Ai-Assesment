/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./util/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:4u9HdPGqTSWw@ep-old-bird-a5parpc3.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };