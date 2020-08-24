import isNotTwelve from './index.js'


function assert (condition) {
  if (!condition)
      throw new Error('Failed: ' + condition)
}


assert(!isNotTwelve(12))        // 12 is 12
assert(isNotTwelve(4))          // 4 is not 12
assert(isNotTwelve("12"))       // "12" is not 12
assert(isNotTwelve("Twelve"))   // "Twelve" is not 12