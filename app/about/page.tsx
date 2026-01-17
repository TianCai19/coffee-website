import Link from "next/link";

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
          <p className="text-xl">了解我们的故事与使命</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">我们的故事</h2>
              <p className="text-lg text-amber-700 mb-4">
                香浓咖啡成立于2020年，源于对完美咖啡的执着追求。我们的创始人在一次意大利之旅中，被当地咖啡文化的深厚底蕴深深震撼，决定将这份美好带回家乡。
              </p>
              <p className="text-lg text-amber-700 mb-4">
                从最初的小小咖啡摊位，到如今温馨舒适的咖啡厅，我们始终坚持选用最优质的咖啡豆，传承经典的制作工艺，为每一位顾客呈现最完美的咖啡体验。
              </p>
              <p className="text-lg text-amber-700">
                我们相信，每一杯咖啡都不仅仅是饮品，更是生活的艺术，是人与人之间情感交流的媒介。
              </p>
            </div>
            <div className="bg-amber-100 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">☕</div>
              <p className="text-2xl font-bold text-amber-900 mb-2">5年</p>
              <p className="text-lg text-amber-700">专业咖啡服务经验</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">我们的价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">品质至上</h3>
              <p className="text-amber-700">
                我们坚持使用最优质的咖啡豆，严格把控每一个制作环节，确保每一杯咖啡都达到最高标准。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">用心服务</h3>
              <p className="text-amber-700">
                我们用真诚的心对待每一位顾客，用专业的态度制作每一杯咖啡，用温暖的笑容迎接每一位朋友。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">持续创新</h3>
              <p className="text-amber-700">
                我们不断探索新的咖啡口味，研发独特的配方，为顾客带来惊喜的味蕾体验。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">我们的团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">张师傅</h3>
              <p className="text-amber-700 mb-2">首席咖啡师</p>
              <p className="text-sm text-amber-600">10年咖啡制作经验</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">李师傅</h3>
              <p className="text-amber-700 mb-2">甜品师</p>
              <p className="text-sm text-amber-600">专业甜品制作</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">王经理</h3>
              <p className="text-amber-700 mb-2">店长</p>
              <p className="text-sm text-amber-600">客户服务专家</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">期待您的光临</h2>
          <p className="text-xl mb-8">
            我们期待为您提供最优质的咖啡体验
          </p>
          <div className="space-x-4">
            <Link
              href="/menu"
              className="inline-block bg-white text-amber-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-50 transition"
            >
              查看菜单
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-amber-800 transition"
            >
              联系我们
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
