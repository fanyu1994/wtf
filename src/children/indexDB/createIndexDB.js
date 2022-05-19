let request = null,
  db = null

let dbPromise = async ({
  dbName,
  dbVersion,
  ...args
}) => {
  let version = await window.indexedDB.databases().then(res => {
    return res.find(e => e.name === dbName) && res.find(e => e.name === dbName).version + 1
  })
  request = window.indexedDB.open(dbName, dbVersion || version || 1)
  return new Promise((resolve, reject) => {
    // success事件表示成功打开数据库
    request.onsuccess = e => {
      db = request.result
      console.log(db, '数据库打开成功!')
      dbPromise({
        dbName: dbName,
        dbVersion: ++ dbVersion 
      })
    }

    // 如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件upgradeneeded
    request.onupgradeneeded = e => {
      db = e.target.result;
      console.log(db, '数据库(新版本)打开成功!')
      resolve(db)
    }

    //error事件表示打开数据库失败
    request.onerror = e => {
      console.log('数据库打开报错');
      reject(e)
    }
  })
}

export default dbPromise
