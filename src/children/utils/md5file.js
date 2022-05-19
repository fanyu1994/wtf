
 const md5File = (file) => {
  return new Promise((resolve, reject) => {
    // 文件截取
    let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
      chunkSize = file?.size / 100,
      chunks = 100,
      currentChunk = 0,
      spark = new SparkMD5.ArrayBuffer(),
      fileReader = new FileReader();

    fileReader.onload = function (e) {
      console.log('read chunk nr', currentChunk + 1, 'of', chunks);
      spark.append(e.target.result);
      currentChunk += 1;

      if (currentChunk < chunks) {
        loadNext();
      } else {
        let result = spark.end()
        resolve(result)
      }
    };

    fileReader.onerror = function () {
      message.error('文件读取错误')
    };

    const loadNext = () => {
      const start = currentChunk * chunkSize,
        end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

      // 文件切片
      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
      // 检查进度条
      dispatch({ type: 'check', checkPercent: currentChunk + 1 })
    }

    loadNext();
  })
}

module.exports = md5File
