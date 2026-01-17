'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface MenuData {
  [category: string]: MenuItem[];
}

export default function MenuPage() {
  const [menuData, setMenuData] = useState<MenuData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch('/api/menu');
      if (response.ok) {
        const data = await response.json();
        setMenuData(data);
      }
    } catch (error) {
      console.error('获取菜单失败:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">☕</div>
          <p className="text-xl text-amber-900">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 pt-16">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-amber-800">☕ 香浓咖啡</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-amber-900 hover:text-amber-600 px-3 py-2 text-sm font-medium">
                  首页
                </Link>
                <Link href="/menu" className="text-amber-900 hover:text-amber-600 px-3 py-2 text-sm font-medium">
                  菜单
                </Link>
                <Link href="/about" className="text-amber-900 hover:text-amber-600 px-3 py-2 text-sm font-medium">
                  关于我们
                </Link>
                <Link href="/contact" className="text-amber-900 hover:text-amber-600 px-3 py-2 text-sm font-medium">
                  联系我们
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-amber-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">我们的菜单</h1>
          <p className="text-xl">精心调制的每一杯，品味生活的美好</p>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {Object.entries(menuData).map(([category, items]) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 border-b-2 border-amber-300 pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                    <span className="text-lg font-bold text-amber-800">￥{item.price}</span>
                  </div>
                  <p className="text-amber-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">心动不如行动</h2>
          <p className="text-xl mb-8">欢迎到店品尝，我们期待为您服务</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-50 transition"
          >
            查看位置
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">☕ 香浓咖啡</h3>
            <p className="mb-4">营业时间：周一至周日 7:00 - 22:00</p>
            <p className="text-amber-200">
              © 2025 香浓咖啡. 保留所有权利.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
