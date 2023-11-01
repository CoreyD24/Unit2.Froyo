const orderFlavors = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
}
//displays whole order with flavors and quantity
for (const keys in orderFlavors){
    console.log(orderFlavors);
}
//---------------------------------------------------------------------------------------
//prompt takes in order and does certain things based on what it is
const input = prompt();
//input is split by comma
let order = input.split(`, `);
//order stored in an array
console.log(order);

//for loop to address each index
for (i=0; i < order.length; i++){
    const flavor = order[i]
//for each input, if statment is intitiated
    if (order[i] == `vanilla`){
        orderFlavors.vanilla += 1}
    else if (order[i] == `strawberry`){
        orderFlavors.strawberry += 1}
    else if (order[i] == `coffee`){
        orderFlavors.coffee += 1}
    else{
        alert(`We don't have that flavor. Try again.`)
    }}

//---------------------------------------------------------------------------------------
//displays updated list of ordered items versus line 17. Before and after
for (const values in orderFlavors){
    console.log(orderFlavors);
}

//create a funciton that displays the order
const orderForm = (message) =>{
    if (message){
        alert(`You have chosen ${message}.`)}
}
order = order.join(`, `);
orderForm(order);