function sum(a, b, c) {
   if (c === "+") {
      return a + b;
   } else if (c === "-") {
      return a - b;
   } else if (c === "*") {
      return a * b;
   } else if (c === "/") {
      return a / b;
   }
};

const catalog = [
   {
      title: 'Overseas Trio',
      year: '1957',
      rating: '5/5',
   },
   {
      title: 'Lonely Town',
      year: '1959',
      rating: '5/5',
   },
   {
      title: 'Calypso',
      year: '1977',
      rating: '5/5',
   },
];

let a = 3;
let b = 4;
let c = "twelve"; 

module.exports = {
   a: a,
   b: b,
   c: c,
   sum: sum,
   catalog: catalog,
   values: [a, b, c, sum, catalog]
}
