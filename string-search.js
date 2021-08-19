const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB amera flashlight Phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenovo commercial yoga laptop', 
    'LG supernova laptop',
    'HTC low price phone', 
   'Dell purple color phone with Laptop'
];

const searcing = 'Dell';

//indexOf

const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searcing.toLowerCase()) != -1){
        //output.push(product);
    }
}

//console.log(output);
for(const product of products){
    if(product.toLowerCase().includes(searcing.toLowerCase())){
        //output.push(product);
    }
}

console.log(output);

//starts with
for(const product of products){
    if(product.toLowerCase().startsWith(searcing.toLowerCase())){
        output.push(product);
    }
}
console.log(output);