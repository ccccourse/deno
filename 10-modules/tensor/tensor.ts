export function add (a:Array<number>, b:Array<number>) {
  let len = a.length
  let c = new Array(len)
  for (let i = 0; i < len; i++) {
    c[i] = a[i] + b[i]
  }
  return c
}
