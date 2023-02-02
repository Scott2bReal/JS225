// Implement an ancestors method that returns the prototype chain (ancestors)
// of a calling object as an array of object names. Here's an example output:

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

foo.ancestors = function() {
  const allAncestors = []
  let prototype = Object.getPrototypeOf(this)
  while (true) {
     if (prototype.name) {
      allAncestors.push(prototype.name)
      prototype = Object.getPrototypeOf(prototype)
    } else {
      allAncestors.push('Object.prototype')
      return allAncestors
    }
  }
}

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
