

var path=require('path');
var childProcess=require('child_process');
//console.log('Hello World!!!');



//Exec
//childProcess.exec('node NodeProcessCreation\\childApp.js',function(err,stdout,stderr){
//    if(err) throw err;
//    console.log(stdout);
//});

//Spawn
//for(var i=0;i<5;i++){
//    var dir=childProcess.spawn('node',['NodeProcessCreation\\childApp.js'],{env:{i:i}});
//
////dir.stdin.write('Hi child Process');
//
//    dir.stdout.on('data',function(data){
//        console.log(''+data);
//    });
//
//    dir.stderr.on('data',function(data){
//        console.log(data);
//    });
//}
//
////dir.on('exit',function(err){
////    console.log(err);
////});


//Fork
for(var i=0;i<5;i++){
    var dir=childProcess.fork('NodeProcessCreation\\childApp.js',{env:{i:i}});

//dir.stdin.write('Hi child Process');

    dir.on('data',function(data){
        console.log(''+data);
    });

}
//dir.on('exit',function(err){
//    console.log(err);
//});


//setInterval(function(){},1000);