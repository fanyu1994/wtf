function Indexjs() {
  const obj = {
    a: 1,
    b: '核实',
    c: {
      a: 2,
      b: RegExp(/[**]/),
      c: [22, 33],
      d: function () { console.log(999) }
    },
    d: function () { },
    e: Boolean(55),
    g: ['xx']
  }
  obj.g.push(obj.c)
  obj.c['e'] = obj.g
  function deepClone(target, map = new Map()) {
    if (typeof target === 'object' && target !== null) {
      if (map.get(target)) return map.get(target)
      const result = Array.isArray(target) ? [] : {}
      map.set(target, result)
      for (const key in target) {
        if (Object.hasOwnProperty.call(target, key)) {
          result[key] = deepClone(target[key], map)
        }
      }
      return result
    } else {
      return target
    }
  }

  let cc = deepClone(obj)

  return (
    <div>
      处理其它deepclone
    </div>
  )
}

export default Indexjs