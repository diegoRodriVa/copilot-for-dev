/* eslint-disable */
/*
  What are we going to do here?
  0. Provide context with this comments
  1. Understand the code
  2. Refactor it
  3. Type it
  4. Test it
  5. Don't change the name of the function
  6. Use more meaningful names for the variables and parameters
*/
export const whatDoesItDo = (xs: any, key: any) => {
  return xs.reduce(function (rv: any, x: any) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}
