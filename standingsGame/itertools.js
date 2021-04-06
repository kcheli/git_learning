function* permutations(iterable, m) {
   const elements = Array.from(iterable);
   const n = elements.length;
   const k = m === undefined ? n : m;
   if (k > n) return;

   let indices = Array.from({ length: n }, (_v, i) => i);
   const kConfig = { length: k };
   const cycles = Array.from(kConfig, (_v, i) => n - i);

   const fromElement = (_v, i) => elements[indices[i]];
   const makePermutation = () => Array.from(kConfig, fromElement);

   yield makePermutation();
   if (n < 1) return;

   let repeat = false;
   do {
      repeat = false;

      // offset = cycles[target]
      // target - index to swap into
      // offset - position (from the end) to swap out of
      // source = n - offset
      // source - index to swap out of
      //
      // for loop only executes until the next value is
      // yielded - then it starts over.
      // When it runs to completion without yielding
      // a value the generator is complete.

      for (let target = k - 1; target >= 0; target -= 1) {
         cycles[target] -= 1;
         const offset = cycles[target];
         if (offset > 0) {
            // swap `target` with `-offset`
            const source = n - offset;
            const used = indices[target];
            indices[target] = indices[source];
            indices[source] = used;

            yield makePermutation();
            repeat = true;
            break;
         } else {
            // move `target` to the end
            // and reset the swap out offset
            indices = indices
               .slice(0, target)
               .concat(indices.slice(target + 1), [indices[target]]);
            cycles[target] = n - target;
         }
      }
   } while (repeat);
}

for (const p of permutations('ABCD', 2)) {
   console.log(p.join(''));
}

function* range(...args) {
   const [start, end, step] =
      args.length === 1
         ? [0, args[0], 1]
         : args.length === 2
            ? [args[0], args[1], 1]
            : args;

   for (let i = start; i < end; i += step) yield i;
}

for (const p of permutations(range(3))) {
   console.log(p.join(''));
}

module.exports = {
   permutation: permutations
}