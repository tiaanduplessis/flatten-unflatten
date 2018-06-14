import { flatten, unflatten } from '../'

test('should export functions', () => {
  expect(flatten).toBeDefined()
  expect(unflatten).toBeDefined()
  expect(typeof flatten).toBe('function')
  expect(typeof unflatten).toBe('function')
  expect(typeof flatten()).toBe('object')
  expect(typeof unflatten()).toBe('object')
})

test('should flatten a object', () => {
  const obj = {
    bar: 5,
    baz: {
      bar: 1,
      foo: {
        ping: 'pong',
        arr: [1, 3, 4, 5]
      }
    }
  }

  const flat = flatten(obj)

  expect(flat['baz.bar']).toBe(1)
  expect(flat['baz.foo.ping']).toBe('pong')
})

test('should flatten with custom delimiter', () => {
  const obj = {
    bar: 5,
    baz: {
      bar: 1,
      foo: {
        ping: 'pong',
        arr: [1, 3, 4, 5]
      }
    }
  }

  const flat = flatten(obj, {delimiter: '*'})

  expect(flat['baz*bar']).toBe(1)
  expect(flat['baz*foo*ping']).toBe('pong')
})

test('should flatten a array', () => {
  const obj = {
    foo: 1,
    bar: [
      1, 2, 3
    ]
  }

  const flat = flatten(obj, {arrays: true})

  expect(flat['bar.0']).toBe(1)
  expect(flat['bar.1']).toBe(2)
})

test('should unflatten a flat object', () => {
  const obj = flatten({
    bar: 5,
    baz: {
      bar: 1,
      foo: {
        ping: 'pong',
        arr: [1, 3, 4, 5]
      }
    }
  })

  const unflat = unflatten(obj)

  expect(unflat.baz.bar).toBe(1)
  expect(unflat.baz.foo.ping).toBe('pong')
})
