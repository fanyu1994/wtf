/**
* 用 call 的方式获取类型
* @param {*} val 要验证的实例
* @returns
* *   '[object Object]',
* *   '[object Array]',
* *   '[object Map]',
* *   '[object Set]',
* *   '[object Function]',
* *   '[object AsyncFunction]',
* *   '[object Promise]',
* *   '[object Symbol]',
* *   '[object String]',
* *   '[object Number]',
* *   '[object BigInt]',
* *   '[object RegExp]',
* *   '[object Date]',
* *   '[object Math]',
* *   '[object Null]',
* *   '[object Undefined]'
* *   其他
*/
const toTypeString = (val) => {
  return Object.prototype.toString.call(val)
}

/**
 * 获取具体类型
 * @param {*} val 要验证的实例
 * @returns 
 * *   'function',
 * *   'async',
 * *   'object',
 * *   'array',
 * *   'string',
 * *   'number',
 * *   'bigInt',
 * *   'regExp',
 * *   'date',
 * *   'map',
 * *   'set',
 * *   'promise',
 * *   'symbol',
 * *   'math',
 * *   'null',
 * *   'undefined'
 * *   其他
 */
const typeName = (val) => {
  return Object.prototype.toString.call(val).replace(/^\[object (\S+)\]$/, '$1').toLowerCase()
}

const hasOwnProperty = Object.prototype.hasOwnProperty
const hasOwn = (val, key) => hasOwnProperty.call(val, key)

/**
 *  验证普通函数
 * @param {*} val 要验证的对象
 * @returns 
 */
const isFunction = (val) => toTypeString(val) === '[object Function]'

/**
 * 验证 async 的函数
 * @param {*} val 要验证的对象
 * @returns 
 */
const isAsync = (val) => toTypeString(val) === '[object asyncFunction]'

/**
 * 验证 Object，不含 null
 * @param {*} val 要验证的对象
 * @returns 
 */
const isObject = (val) => val !== null && typeof val === 'object'

/**
 *  验证数组
 * @param {*} val 要验证的对象
 * @returns 
 */
const isArray = Array.isArray

/**
* 验证字符串
* @param {*} val 要验证的对象
* @returns 
*/
const isString = (val) => typeof val === 'string'

/**
 * 验证 number
 * @param {*} val 要验证的对象
 * @returns 
 */

const isNumber = (val) => typeof val === 'number'

/**
 * 验证 BigInt
 * @param {*} val 要验证的对象
 * @returns 
 */
const isBigInt = (val) => typeof val === 'bigint'

/**
 * 验证 boolean
 * @param {*} val 要验证的对象
 * @returns 
 */
const isBoolean = (val) => typeof val === 'boolean'

/**
* 验证正则类型
* @param {*} val 要验证的对象
* @returns 
*/
const isRegExp = (val) => toTypeString(val) === '[object RegExp]'
/**
 * 验证日期
 * @param {*} val 要验证的对象
 * @returns 
 */
const isDate = (val) => val instanceof Date

/**
 * 验证 map
 * @param {*} val 要验证的对象
 * @returns 
 */
const isMap = (val) => toTypeString(val) === '[object Map]'
/**
 * 验证 set
 * @param {*} val 要验证的对象
 * @returns 
 */
const isSet = (val) => toTypeString(val) === '[object Set]'
/**
 *  验证 Promise
 * @param {*} val 要验证的对象
 * @returns 
 */
const isPromise = (val) => toTypeString(val) === '[object Promise]'
/**
 * 验证 Symbol
 * @param {*} val 要验证的对象
 * @returns 
 */
const isSymbol = (val) => typeof val === 'symbol'

/**
 * null 或者 undefined 返回 true
 * @param {*} val 要验证的对象
 * @returns 
 */
const isNullOrUndefined = (val) => {
  if (val === null) return true
  if (typeof val === 'undefined') return true
  return false
}

/**
 * OSS 图片上传
 * @param { region } region yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
 * @param { accessKeyId } accessKeyId yourAccessKeyId
 * @param { accessKeySecret } accessKeySecret yourAccessKeySecret
 * @param { bucket } bucket Bucket名称
 * @param { file } file 上传文件信息
 * @returns
 */
const OSS = require('ali-oss')
const ossUploadFile = (params) => {
  const { region, accessKeyId, accessKeySecret, bucket, file, path } = params;

  // const path = require("path")
  const client = new OSS({
    region,
    accessKeyId,
    accessKeySecret,
    bucket,

  });

  // const headers = {
  //   // 指定该Object被下载时网页的缓存行为。
  //   // 'Cache-Control': 'no-cache', 
  //   // 指定该Object被下载时的名称。
  //   // 'Content-Disposition': 'oss_download.txt', 
  //   // 指定该Object被下载时的内容编码格式。
  //   // 'Content-Encoding': 'UTF-8', 
  //   // 指定过期时间。
  //   // 'Expires': 'Wed, 08 Jul 2022 16:57:01 GMT', 
  //   // 指定Object的存储类型。
  //   // 'x-oss-storage-class': 'Standard', 
  //   // 指定Object的访问权限。
  //   // 'x-oss-object-acl': 'private', 
  //   // 设置Object的标签，可同时设置多个标签。
  //   // 'x-oss-tagging': 'Tag1=1&Tag2=2', 
  //   // 指定CopyObject操作时是否覆盖同名目标Object。此处设置为true，表示禁止覆盖同名Object。
  //   // 'x-oss-forbid-overwrite': 'true', 
  // };
  return new Promise((resolve, reject) => {
    async function put() {
      try {
        const result = await client.put(path, file);
        resolve(result);
      } catch (e) {
        reject(e);
      }
    }
    put();
  });
}



export {
  toTypeString, // Object.prototype.toString.call(val)
  typeName, // 获取可以识别的名称

  hasOwnProperty,
  hasOwn,

  isFunction, // 验证普通函数
  isAsync, // 验证 async 的函数
  isObject, // 验证 Object
  isArray, // 验证数组
  isString, // 验证字符串
  isNumber, // 验证 number
  isBigInt, // 验证 BigInt
  isBoolean, // 验证 布尔
  isRegExp, // 验证正则类型
  isDate, // 验证日期
  isMap, // 验证 map
  isSet, // 验证 set
  isPromise, // 验证 Promise
  isSymbol, // 验证 Symbol

  isNullOrUndefined, // null 或者 undefined 返回 true
  ossUploadFile
}