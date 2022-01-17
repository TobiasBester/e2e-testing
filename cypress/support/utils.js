export function timestampString () {
  return Date.now().toString()
}

export function randomEmail () {
  return `user-${timestampString()}@gmail.com`
}

export function getExistingEmail () {
  return 'bob@gmail.com'
}
