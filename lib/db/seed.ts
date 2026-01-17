import { db } from './index';
import { menuItems } from './schema';

const initialMenuItems = [
  // 咖啡类
  { name: '美式咖啡', description: '经典黑咖啡，浓郁香醇', price: 28, category: '咖啡类' },
  { name: '拿铁咖啡', description: '丝滑牛奶与浓缩咖啡的完美结合', price: 35, category: '咖啡类' },
  { name: '卡布奇诺', description: '经典意式咖啡，奶泡丰富', price: 32, category: '咖啡类' },
  { name: '摩卡咖啡', description: '巧克力与咖啡的浪漫邂逅', price: 38, category: '咖啡类' },
  { name: '焦糖玛奇朵', description: '甜蜜焦糖与咖啡的层次感', price: 40, category: '咖啡类' },
  { name: '意式浓缩', description: '浓郁纯粹的意式经典', price: 25, category: '咖啡类' },

  // 非咖啡类
  { name: '经典红茶', description: '醇厚甘甜的经典红茶', price: 22, category: '非咖啡类' },
  { name: '柠檬蜂蜜茶', description: '清新柠檬与甜蜜蜂蜜的完美搭配', price: 25, category: '非咖啡类' },
  { name: '水果茶', description: '新鲜水果调制的水果茶', price: 28, category: '非咖啡类' },
  { name: '热巧克力', description: '浓郁丝滑的热巧克力', price: 30, category: '非咖啡类' },

  // 甜点小食
  { name: '提拉米苏', description: '经典意式甜点', price: 32, category: '甜点小食' },
  { name: '蓝莓芝士蛋糕', description: '浓郁芝士配新鲜蓝莓', price: 35, category: '甜点小食' },
  { name: '巧克力布朗尼', description: '浓郁巧克力布朗尼', price: 28, category: '甜点小食' },
  { name: '牛角包', description: '酥脆香甜的牛角包', price: 18, category: '甜点小食' },
  { name: '马卡龙', description: '法式精致小点', price: 25, category: '甜点小食' },
  { name: '司康饼', description: '英式经典下午茶', price: 22, category: '甜点小食' },
];

export async function initializeDatabase() {
  try {
    console.log('开始初始化数据库...');

    // 插入初始菜单数据
    await db.insert(menuItems).values(initialMenuItems);

    console.log('✅ 数据库初始化成功！');
    console.log(`已插入 ${initialMenuItems.length} 个菜单项`);
  } catch (error) {
    console.error('❌ 数据库初始化失败:', error);
    throw error;
  }
}

// 如果直接运行此文件，则执行初始化
if (require.main === module) {
  initializeDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
