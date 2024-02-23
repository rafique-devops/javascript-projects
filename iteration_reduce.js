const myNums = [1,2,3]

const myTotal = myNums.reduce( function (acc,currval){
    console.log(`acc: ${acc} & currval: ${currval}`);
    return acc + currval;
}, 1);

console.log(`Total Value: ${myTotal}`);

const anotherTotal = myNums.reduce( (acc, curr)=>{
    return acc + curr;
},1)

console.log(anotherTotal);

const shoppingCart = [
    {
        itemName:"Javascript Course",
        price: 2999,
        quantity:2
    },
    {
        itemName:"Python Course",
        price: 1199,
        quantity:1
    },
    {
        itemName:"Mobile Devlopment Course",
        price: 5999,
        quantity:0
    },
    {
        itemName:"Data Science Course",
        price: 12999,
        quantity:1
    },
]

const cartValue = shoppingCart.reduce( (acc, item)=>{
    return acc + (item.price * item.quantity)
},0)

console.log(cartValue);