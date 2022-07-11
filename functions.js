const functions ={
    add:( num1,num2)=> num1 +num2,
    isNull:()=> null,
    checkValue: y=>y,
    createUser:()=>{
        const user={ firstName:'Ayesha'};
        user['lastName']='Areej';
        return user;
    }

}

module.exports=functions;