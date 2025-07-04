// Immediately Invoked Function Expressions (IIFE)

(function chai(){ // this is named IIFE
    console.log((`DB connected`));
})();    // Here ";" mendetory to use

(  function aurcode(name){  // this is unnamed IIFE
    console.log(`DB connected two ${name}`)
})("vishal")