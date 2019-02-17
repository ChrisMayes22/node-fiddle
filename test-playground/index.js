function add(a, b){
    return a + b;
}

function square(x){
    return x*x;
}

function setName(user, name){
    const names = name.split(' ')
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}

function asyncAdd(a, b, callback){
    return setTimeout(()=> callback(a + b), 1000);
}

function asyncSquare(a, callback){
    return setTimeout(()=> callback(a*a), 1000);
}

module.exports = {
    add,
    square,
    setName,
    asyncAdd,
    asyncSquare
}
