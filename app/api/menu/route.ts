import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { menuItems } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    // 获取所有菜单项
    const items = await db.select().from(menuItems);

    // 按分类组织菜单项
    const menuByCategory = items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, typeof items>);

    return NextResponse.json(menuByCategory);
  } catch (error) {
    console.error('获取菜单失败:', error);
    return NextResponse.json(
      { error: '获取菜单失败' },
      { status: 500 }
    );
  }
}
