

let amount = +prompt('Write quantity of steps', ''),
    symbol = prompt('Enter the symbol', ''),
    last = prompt('Enter the end symbol', '');

for(let i = 0; i < amount; i++) {
  last = i == 0 ? last : symbol + last;
  console.log(last);
}


