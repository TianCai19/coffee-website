'use client';

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
          <p className="text-xl">期待与您的相遇</p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-8">联系信息</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-1">地址</h3>
                  <p className="text-amber-700">
                    北京市朝阳区咖啡街123号<br />
                    邮政编码：100020
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-1">电话</h3>
                  <p className="text-amber-700">
                    <a href="tel:+8613812345678" className="hover:text-amber-900">
                      +86 138-1234-5678
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-1">邮箱</h3>
                  <p className="text-amber-700">
                    <a href="mailto:info@coffee.com" className="hover:text-amber-900">
                      info@coffee.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">🕒</div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-1">营业时间</h3>
                  <p className="text-amber-700">
                    周一至周日<br />
                    上午 7:00 - 晚上 22:00
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">关注我们</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition"
                >
                  微信
                </a>
                <a
                  href="#"
                  className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition"
                >
                  微博
                </a>
                <a
                  href="#"
                  className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition"
                >
                  小红书
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-8">留言给 我们</h2>
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                留言提交成功，我们会尽快回复您！
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                提交失败，请稍后重试
              </div>
            )}
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-amber-900 font-semibold mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-amber-900 font-semibold mb-2">
                  邮箱 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="请输入您的邮箱"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-amber-900 font-semibold mb-2">
                  电话
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="请输入您的电话"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-amber-900 font-semibold mb-2">
                  留言内容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="请输入您的留言内容"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-amber-800 text-white py-3 rounded-lg font-semibold hover:bg-amber-900 transition disabled:opacity-50"
              >
                {submitting ? '提交中...' : '发送留言'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-8">找到我们</h2>
          <div className="bg-amber-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-amber-900 text-xl font-semibold">地图位置</p>
              <p className="text-amber-700 mt-2">北京市朝阳区咖啡街123号</p>
              <p className="text-amber-600 text-sm mt-2">
                （此处将集成 Google Maps 或其他地图服务）
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">期待您的光临</h2>
          <p className="text-xl mb-8">
            无论您是咖啡爱好者，还是寻找舒适环境的顾客，我们都期待为您提供最好的服务
          </p>
          <div className="space-x-4">
            <Link
              href="/menu"
              className="inline-block bg-white text-amber-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-50 transition"
            >
              查看菜单
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-amber-800 transition"
            >
              了解更多
            </Link>
          </div>
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
