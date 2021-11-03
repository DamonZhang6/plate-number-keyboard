import { REG_MOBILE, REG_PLATE_NUM, REG_TABLE } from './reg';

/**
 * 获取元素距离页面顶部以及右边的距离
 * @param el
 * @returns {{top: number, left: number}}
 */
export const getVertexPosition = (el) => {
  let currentTarget = el;
  let top = 0;
  let left = 0;

  while (currentTarget !== null) {
    top += currentTarget.offsetTop;
    left += currentTarget.offsetLeft;
    currentTarget = currentTarget.offsetParent;
  }

  return { top, left };
};

export function isMobile(opts = {}) {
  let { ua } = opts;

  if (!ua && typeof navigator !== 'undefined') ua = navigator.userAgent;

  if (ua && ua.headers && typeof ua.headers['user-agent'] === 'string') {
    ua = ua.headers['user-agent'];
  }

  if (typeof ua !== 'string') return false;

  let result = opts.tablet ? REG_TABLE.test(ua) : REG_MOBILE.test(ua);

  if (
    !result &&
    opts.tablet &&
    opts.featureDetect &&
    navigator &&
    navigator.maxTouchPoints > 1 &&
    ua.indexOf('Macintosh') !== -1 &&
    ua.indexOf('Safari') !== -1
  ) {
    result = true;
  }

  return result;
}

export const isPlateNum = (plateNum) => REG_PLATE_NUM.test(plateNum);

export const isLiter = (liter) => /[\u4e00-\u9fa5]/.test(liter);

export const isNumber = (value) => /(0|^[1-9]\d*$)/.test(value);

// export const isMobile = () => /Android|webOS|iPhone|iPod|BlackBerry
// |RIM|Windows Phone|Nexus|Nokia|iPad/i.test(navigator.userAgent);
