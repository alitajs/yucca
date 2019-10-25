interface IObject {
  [key: string]: any;
}

function getEnumerableKeys(target: IObject) {
  const keys = [];
  for (const key in target) {
    keys.push(key);
  }
  return keys;
}

/**
 *
 * @param a
 * @param b
 */
function deepEql(a: IObject, b: IObject) {
  if (!a || !b || (Array.isArray(a) && Array.isArray(b))) {
    return false;
  }
  const $a = getEnumerableKeys(a);
  const $b = getEnumerableKeys(b);
  if ($a.length && $b.length && $a.length === $b.length) {
    return !$a.some((key) => {
      const aa = a[key];
      const bb = b[key];
      return aa !== bb;
    });
  }
  return false;
}

/**
 * 判断两个对象是否相等
 * @param obj1
 * @param obj2
 */
export function objectEqual(
  obj1: IObject,
  obj2: IObject
): boolean {
  if (obj1 === obj2 || deepEql(obj1, obj2)) {
    return true;
  }
  if (!obj1 || !obj2 || getEnumerableKeys(obj1).length !== getEnumerableKeys(obj2).length) {
    return false;
  }
  // animation 写在标签上的进行判断是否相等， 判断每个参数有没有 function;
  let equalBool = true;
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false;
    }
    for (let i = 0; i < obj1.length; i += 1) {
      const currentObj = obj1[i];
      const nextObj = obj2[i];
      for (const p in currentObj) {
        if (currentObj[p] !== nextObj[p]) {
          if (typeof currentObj[p] === 'object' && typeof nextObj[p] === 'object') {
            equalBool = objectEqual(currentObj[p], nextObj[p]);
          } else if (typeof currentObj[p] === 'function' && typeof nextObj[p] === 'function') {
            if (currentObj[p].toString() !== nextObj[p].toString()) {
              equalBool = false;
            }
          } else {
            equalBool = false;
          }
          if (!equalBool) {
            return false;
          }
        }
      }
    }
  }

  const setEqualBool = (objA: IObject, objB: IObject) => {
    getEnumerableKeys(objA).forEach((key) => {
      // 如果前面有参数匹配不相同则直接返回；
      if (!equalBool) {
        return;
      }
      if (!(key in objB)) {
        equalBool = false;
      }
      if (typeof objA[key] === 'object' && typeof objB[key] === 'object') {
        equalBool = objectEqual(objA[key], objB[key]);
      } else if (typeof objA[key] === 'function' && typeof objB[key] === 'function') {
        if (objA[key].name !== objB[key].name) {
          equalBool = false;
        }
      } else if (objA[key] !== objB[key]) {
        equalBool = false;
      }
    });
  };

  setEqualBool(obj1, obj2);
  setEqualBool(obj2, obj1);
  return equalBool;
}
