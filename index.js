//separate items with commas
//prompt user for froyo flavors and store result
//store result in array
//build an object to track flavors
//build loop to update object
//use a function

const froyoFlavors = [`vanilla`,`vanilla`,`vanilla`,`strawberry`,`coffee`,`coffee`];


const orderFlavors = {
    vanilla: 3,
    strawberry: 1,
    coffee: 2,
}
orderFlavors.cheesecake = 4;

for (const keys in orderFlavors){
    console.log(orderFlavors);
}
//---------------------------------------------------------------------------------------

let order = prompt();

if (order === `vanilla`){
    froyoFlavors.push(order)
    orderFlavors.vanilla = 4
    console.log(`vanilla+1`)}
 else if (order === `strawberry`){
    froyoFlavors.push(order)
    orderFlavors.strawberry = 2
    console.log(`strawberry+1`)}
else if (order === `coffee`){
    orderFlavors.coffee = 3
    froyoFlavors.push(order)
    console.log(`coffee+1`)}
else if (order === `cheesecake`){
    orderFlavors.cheesecake = 5
    froyoFlavors.push(order)
    console.log(`cheesecake+1`)}
else{
    alert(`We don't have that flavor. Try again.`)
}
console.log(froyoFlavors);
//---------------------------------------------------------------------------------------
//console.log(Object.keys(orderFlavors));
//console.log(Object.values(orderFlavors));


for (const values in orderFlavors){
    console.log(orderFlavors);
}

//create a funciton that displays the order
const orderForm = (message) =>{
    if (message)
    alert(`You have chosen ${message}`)
}
(orderForm(order));