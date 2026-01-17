import Link from "next/link";

export default function MenuPage() {
  const menuItems = [
    {
      category: "咖啡类",
      items: [
        { name: "美式咖啡", description: "经典黑咖啡，浓郁香醇", price: "￥28" },
        { name: "拿铁咖啡", description: "丝滑牛奶与浓缩咖啡的完美结合", price: "￥35" },
        { name: "卡布奇诺", description: "经典意式咖啡，奶泡丰富", price: "￥32" },
        { name: "摩卡咖啡", description: "巧克力与咖啡的浪漫邂逅", price: "￥38" },
        { name: "焦糖玛奇朵", description: "甜蜜焦糖与咖啡的层次感", price: "￥40" },
        { name: "意式浓缩", description: "浓郁纯粹的意式经典", price: "￥25" },
      ]
    },
    {
      category: "非咖啡类",
      items: [
        { name: "经典红茶", description: "醇厚甘甜的经典红茶", price: "￥22" },
        { name: "柠檬蜂蜜茶", description: "清新柠檬与甜蜜蜂蜜的完美搭配", price: "￥25" },
        { name: "水果茶", description: "新鲜水果调制的水果茶", price: "￥28" },
        { name: "热巧克力", description: "浓郁丝滑的热巧克力", price: "￥30" },
      ]
    },
    {
      category: "甜点小食",
      items: [
        { name: "提拉米苏", description: "经典意式甜点", price: "￥32" },
        { name: "蓝莓芝士蛋糕", description: "浓郁芝士配新鲜蓝莓", price: "￥35" },
        { name: "巧克力布朗尼", description: "浓郁巧克力布朗尼", price: "￥28" },
        { name: "牛角包", description: "酥脆香甜的牛角包", price: "￥18" },
        { name: "马卡龙", description: "法式精致小点", price: "￥25" },
        { name: "司康饼", description: "英式经典下午茶", price: "￥22" },
      ]
    }
  ];

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
        {menuItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 border-b-2 border-amber-300 pb-2">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                    <span className="text-lg font-bold text-amber-800">{item.price}</span>
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
