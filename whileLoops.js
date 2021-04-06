var x = 0;
while(x <= 350) {
   console.log(x)
    x +=50;
    
}

var animals = ['cat', 'dog', 'chicken', 'pig', 'cow', 'horse'];

for (animal of animals){
    if (animal === 'pig') continue;
    console.log(animal);
}

var car = {brand: 'Ford', model: 'Focus', year: '2018'}

for (specs in car){
    console.log(car[specs]);
}