import variableObj from './constant';

const {
  colon, pixel, maxWidth, minWidth, windowWidth,
} = variableObj;

const isTrue = (ww, v, p) => (p === minWidth ? ww > v : ww < v);

export const checkCon = ({ p, v }) => {
  switch (p) {
    case maxWidth:
      return isTrue(windowWidth, v, p);
    case minWidth:
      return isTrue(windowWidth, v, p);
    default:
      return false;
  }
};

const change = (q) => {
  const qArr = q.split(colon);
  const p = qArr[0];
  const v = qArr[1].replace(pixel, '').trim();

  return { p, v };
};

const getQueryHandler = (q) => change(q);

export default getQueryHandler;
