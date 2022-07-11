const functions=require('./functions');

//ToBe
test('Adds 2 + 2  equals to 4', ()=>{
    expect(functions.add(2,2)).toBe(4);
});

//Not ToBe
test('Adds 2 + 2 Not  equals to 5', ()=>{
    expect(functions.add(2,2)).not.toBe(5);
});

//ToBeNull
test('Should be null', ()=>{
    expect(functions.isNull()).toBeNull();
});

//ToBeFalsy
test('Should be falsy', ()=>{
    expect(functions.checkValue(0)).toBeFalsy();
});

test('User should be Ayesha Areej', ()=>{
    expect(functions.createUser()).toBe({
        firstName:'Ayesha', 
        lastName:'Areej'
    });
});




//Check for truthy and falsy values
//toBeNull matches only null 
//toBeUndefined matches only undefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false
//toBeDefined is the opposite of toBeUndefined


