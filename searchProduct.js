const products = [
    {name: 'iphone x', price: 60000},
    {name: 'samsung phone s12', price: 50000},
    {name: 'huawei phone p20', price: 40000},
    {name: 'dell laptop', price: 65000},
    {name: 'hp laptop pt45', price: 45000},
    {name: 'iwatch x', price: 10000},
    {name: 'smart watch x', price: 20000},
];
function search(products, searchItem){
    const items = [];
    for(const product of products){
        if(product.name.includes(searchItem)){
            items.push(product);
        }
    }
    return items;
}
const matched = search(products, 'phone');
console.log(matched);