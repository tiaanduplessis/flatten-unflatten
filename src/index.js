import set from 'set-nested-prop'

export function flatten (
  obj = {},
  { delimiter = '.', prevLevel = '', arrays = false } = {}
) {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = prevLevel ? `${prevLevel}${delimiter}${key}` : key
    const val = obj[key]

    if (Array.isArray(val) && !arrays) {
      acc[newKey] = val
    } else if (typeof val === 'object' && key !== null) {
      Object.assign(
        acc,
        flatten(val, { delimiter, prevLevel: newKey, arrays })
      )
    } else {
      acc[newKey] = val
    }

    return acc
  }, {})
}

export function unflatten (obj = {}, config) {
  const keys = Object.keys(obj)
  const conf = Object.assign({ force: true }, config)
  return keys.reduce((acc, key, i) => {
    const val = obj[key]
    return set(acc, key, val, conf)
  }, {})
}
