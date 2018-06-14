import {flatten, unflatten} from 'flatten-unflatten'

const foo = {
  bar: 5,
  baz: {
    bar: 1,
    foo: {
      ping: 'pong',
      arr: [1, 3, 4, 5]
    }
  }
}

const flatFoo = flatten(foo)
console.log(flatFoo) // {bar: 5, baz.bar: 1, baz.foo.ping: "pong", baz.foo.arr: Array[4]}

const starryFlatFoo = flatten(foo, { delimiter: '*' })
console.log(starryFlatFoo) // {bar: 5, baz*bar: 1, baz*foo*ping: "pong", baz*foo*arr: Array[4]}
console.log(flatten(foo, { arrays: true })) // {bar: 5, baz.bar: 1, baz.foo.ping: "pong", baz.foo.arr.0: 1, baz.foo.arr.1: 3…}

console.log(unflatten(flatFoo)) // {bar: 5, baz: Object}
console.log(unflatten(starryFlatFoo, { delimiter: '*' })) // {bar: 5, baz: Object}
