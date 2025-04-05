/* eslint-disable */
/*
  What are we going to do here?
  1. Understand the code
  2. Refactor it
  3. Type it
  4. Test it
*/
export const whatDoesItDo = (xs: any, key: any) => {
  return xs.reduce(function (rv: any, x: any) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}
