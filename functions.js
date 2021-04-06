// let sample = "house"

// for (var i = 0; i <= sample.length -2; i++) {
//    console.log(sample.substring(i, i+2))
// }

function square(a){
   return a * a
}

function area(length, height = 0){
   if (height && (length !== height)) {
      return`rectangle: ${length * height}`
   } else {
      return `square: ${length * length}`
   }
}

function biggerThanTen(number){
   if(number > 10){
      return true
   } else{
      return false
   }
}

function evenOdd(bottom, top) {
   var even = 0
   var odd = 0
   for (let x = bottom; x <= top; x++){
      
      if (x%2){
         odd++
      } else{
         even++
      }
   } return `even: ${even}, odd: ${odd}`;
}


module.exports = {
   square: square,
   area: area,
   biggerThanTen: biggerThanTen,
   evenOdd: evenOdd
}