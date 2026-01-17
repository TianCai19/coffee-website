import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// 创建数据库连接（仅在环境变量存在时）
let dbInstance: any = null;

if (process.env.DATABASE_URL) {
  const sql = neon(process.env.DATABASE_URL);
  dbInstance = drizzle(sql, { schema });
}

export { dbInstance as db };
