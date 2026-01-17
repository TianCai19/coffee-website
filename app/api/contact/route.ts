import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { messages } from '@/lib/db/schema';

export async function POST(request: Request) {
  try {
    // 检查数据库是否已连接
    if (!db) {
      return NextResponse.json(
        { error: '数据库未连接' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, phone, message } = body;

    // 验证必填字段
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '姓名、邮箱和留言内容为必填项' },
        { status: 400 }
      );
    }

    // 插入留言到数据库
    await db.insert(messages).values({
      name,
      email,
      phone,
      message,
    });

    return NextResponse.json(
      { success: true, message: '留言提交成功，我们会尽快回复您！' },
      { status: 201 }
    );
  } catch (error) {
    console.error('提交留言失败:', error);
    return NextResponse.json(
      { error: '提交留言失败，请稍后重试' },
      { status: 500 }
    );
  }
}
