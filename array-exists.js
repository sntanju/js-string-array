function megaFriends(friends){
    if(Array.isArray(friends) == false){
        return 'Please provide an array';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['Lion','Fox', 'Hare', 'Tortoise', 'Tiger'] ;
const myBigBuddy = megaFriends(friends);
//console.log(myBigBuddy);

if(friends.indexOf('Fox') != -1){
    console.log('Fox Exists');
}
else{
    console.log("Fox doesn't exists");
}
if(friends.includes('Lion')){
    //console.log('Lion Exists using includes');
}


// concat
const first = [1, 2, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined); 