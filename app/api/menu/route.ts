import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { menuItems } from '@/lib/db/schema';

export async function GET() {
  try {
    // 检查数据库是否已连接
    if (!db) {
      return NextResponse.json(
        { error: '数据库未连接' },
        { status: 503 }
      );
    }

    // 获取所有菜单项
    const items = await db.select().from(menuItems);

    // 按分类组织菜单项
    const menuByCategory = items.reduce((acc: Record<string, any[]>, item: any) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    return NextResponse.json(menuByCategory);
  } catch (error) {
    console.error('获取菜单失败:', error);
    return NextResponse.json(
      { error: '获取菜单失败' },
      { status: 500 }
    );
  }
}
