const __DEV__ = process.env.NODE_ENV === 'development'

export const getItem = (key) => {
  let value;
  try {
    value = window.localStorage.getItem(key)
  } catch (e) {
    if (__DEV__) {
      throw new Error('浏览器不支持localStorage!')
    }
  }

  try {
    value = JSON.parse(value)
  } catch (e) {}
  return value
}

export const setItem = (key, value) => {
  value = typeof value === 'object' ? JSON.stringify(value) : value
  try {
    window.localStorage.setItem(key, value)
  } catch (e) {
    if (__DEV__) {
      throw new Error('浏览器不支持localStorage!')
    }
  }
}

export const removeItem = (key) => {
  try {
    window.localStorage.removeItem(key)
  } catch (e) {
    if (__DEV__) {
      throw new Error('浏览器不支持localStorage!')
    }
  }
}
