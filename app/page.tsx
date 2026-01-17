import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-amber-800">☕ 香浓咖啡</h1>
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-amber-50 to-orange-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
            欢迎来到香浓咖啡
          </h1>
          <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-2xl mx-auto">
            品味每一杯咖啡的温暖时光，享受生活中的小确幸
          </p>
          <div className="space-x-4">
            <Link
              href="/menu"
              className="inline-block bg-amber-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-900 transition"
            >
              查看菜单
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-amber-800 text-amber-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-50 transition"
            >
              找到我们
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              为什么选择我们
            </h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              我们致力于为您提供最优质的咖啡体验
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">精选咖啡豆</h3>
              <p className="text-amber-700">
                来自世界各地的优质咖啡豆，每一颗都经过精心挑选
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">专业咖啡师</h3>
              <p className="text-amber-700">
                经验丰富的咖啡师为您制作每一杯完美的咖啡
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">温馨环境</h3>
              <p className="text-amber-700">
                舒适宜人的环境，是您放松身心、享受时光的最佳选择
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            今天就来享受一杯好咖啡
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            我们期待为您提供最优质的咖啡体验
          </p>
          <Link
            href="/menu"
            className="inline-block bg-white text-amber-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-50 transition"
          >
            立即下单
          </Link>
        </div>
      </section>

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
