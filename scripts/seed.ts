import "dotenv/config";
import * as schema from "../database/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database...");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Hindi",
        imageSrc: "IN-India.svg",
      },
      {
        id: 2,
        title: "Bengali",
        imageSrc: "BD-Bangladesh.svg",
      },
      {
        id: 3,
        title: "French",
        imageSrc: "FR-France.svg",
      },
      {
        id: 4,
        title: "English",
        imageSrc: "GB-England.svg",
      },
      {
        id: 5,
        title: "Russian",
        imageSrc: "RU-Russia.svg",
      },
    ]);
    console.log("Seed complete!");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};
main();
