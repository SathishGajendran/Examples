


console.log('Hello Master '+process.env.i);

setInterval(function(){
    console.log(process.env.i+' '+new Date());
},1000);
