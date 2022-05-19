// Type definitions for ./lib/index.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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
 * @param val 
 * @return  
 */
declare function toTypeString(val : any): string;

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
 * @param val 
 * @return  
 */
declare function typeName(val : any): string;

/**
 * 
 * @param val 
 * @param key 
 * @return  
 */
declare function hasOwn(val : any, key : any): boolean;

/**
 *  验证普通函数
 * @param {*} val 要验证的对象
 * @returns
 * @param val 
 * @return  
 */
declare function isFunction(val : any): boolean;

/**
 * 验证 async 的函数
 * @param {*} val 要验证的对象
 * @returns
 * @param val 
 * @return  
 */
declare function isAsync(val : any): boolean;

/**
 * 验证 Object，不含 null
 * @param {*} val 要验证的对象
 * @returns
 * @param val 
 * @return  
 */
declare function isObject(val : any): boolean;

/**
 *  验证数组
 * @param {*} val 要验证的对象
 * @returns
 * @param value 
 * @return  
 */
declare function isArray(value : any): boolean;

/**
 * 验证字符串
 * @param {*} val 要验证的对象
 * @returns
 * @param val 
 * @return  
 */
declare function isString(val : any): boolean;

/**
 * 验证 number
 * @param {*} val 要验证的对象
 * @returns
 * @param val 
 * @return  
 */
declare function isNumber(val : any): boolean;

/**
 * 验证 BigInt
 * @param {*} val 要验证的对象
 * @returns
 * @param val 
 * @return  
 */
declare function isBigInt(val : any): boolean;

/**
 * 验证 boolean
 * @param {*} val 要验证的对象
 * @returns
 * @param val 
 * @return  
 */
declare function isBoolean(val : any): boolean;

/**
 * 验证正则类型
 * @param {*} val 要验证的对象
 * @returns
 * @param val 
 * @return  
 */
declare function isRegExp(val : any): boolean;

/**
 * 验证日期
 * @param {*} val 要验证的对象
 * @returns
 * @param val 
 * @return  
 */
declare function isDate(val : any): boolean;

/**
 * 验证 map
 * @param {*} val 要验证的对象
 * @returns
 * @param val 
 * @return  
 */
declare function isMap(val : any): boolean;

/**
 * 验证 set
 * @param {*} val 要验证的对象
 * @returns
 * @param val 
 * @return  
 */
declare function isSet(val : any): boolean;

/**
 *  验证 Promise
 * @param {*} val 要验证的对象
 * @returns
 * @param val 
 * @return  
 */
declare function isPromise(val : any): boolean;

/**
 * 验证 Symbol
 * @param {*} val 要验证的对象
 * @returns
 * @param val 
 * @return  
 */
declare function isSymbol(val : any): boolean;

/**
 * null 或者 undefined 返回 true
 * @param {*} val 要验证的对象
 * @returns
 * @param val 
 * @return  
 */
declare function isNullOrUndefined(val : any): boolean;
