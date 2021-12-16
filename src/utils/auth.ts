type ketS = string
type values = object | string | number

/*
* 设置setLocalStorage
* */
export function setLocalStorage(key: ketS, value: values) {
  window.localStorage.setItem(key, window.JSON.stringify(value))
}
/*
* 获取getLocalStorage
* */
export function getLocalStorage(key: ketS) {
  return window.JSON.parse(window.localStorage.getItem(key) || '[]')
}
/*
* 设置setSessionStorage
* */
export function setSessionStorage(key: ketS, value: values) {
  window.sessionStorage.setItem(key, window.JSON.stringify(value))
}
/*
* 获取getSessionStorage
* */
export function getSessionStorage(key: ketS) {
  return window.JSON.parse(window.sessionStorage.getItem(key) || '[]')
}
