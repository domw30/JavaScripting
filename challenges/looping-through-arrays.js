var pets = ['cat', 'dog', 'rat'];

for (var i = 0, length = pets.length; i < length; i++) {
  pets[i] = pets[i] + 's';
}

console.log(pets);


//Initialize i as 0. As long as i is less than the length of items
//in 'pets', continue looping. With each loop, increment i by 1.
