export const sliderOptions = { // 轮播图配置
  direction: 'horizontal', // horizontal:水平 vertical:垂直
  loop: true, // 是否无缝滚动
  interval: 5000, // 自动播放时间间隔，为0则不自动播放
  pagination: true // 是否需要分页器
};

const prefix = 'mall-category';
const suffix = 'key';
export const CATEGORY_CONTENT_KEY = `${prefix}-content-${suffix}`;
export const CATEGORY_CONTENT_UPDATE_TIME_INTERVAL = 1 * 24 * 60 * 60 * 1000;
export const HEADER_TRANSITION_HEIGHT = 100;

export const navItems2 = [
  // 原nav.uve的数据
  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-1.png'),
    text: '心理咨询'
  },
  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-2.png'),
    text: '网络营销'
  },
  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-3.png'),
    text: '游戏电玩'
  },
  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-4.png'),
    text: '专业咨询'
  },
  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-5.png'),
    text: '专业技能'
  }
];

export const skillNames = [
  {
    'name': '热门推荐',
    'id': 'WQR2006'
  },
  {
    'name': '慕淘超市',
    'id': 'WQ1968'
  },
  {
    'name': '国际名牌',
    'id': 'WQ1969'
  },
  {
    'name': '奢侈品',
    'id': 'WQ1970'
  }
];
