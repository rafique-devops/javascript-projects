//this is how normal functions are invoked
function chai()
{
    console.log(`DB Connected with Tea...!`);
}
chai();

//implicit functions
(function coffee() //named iifee
{
    console.log(`DB Connected with Coffee...!`);
}());

(()=>{ //unnamed iifee
    console.log(`DB Connected via Arrow`);
})();

((name)=>{
   console.log(`Welcome to IIFE, Mr. ${name}`); 
})('Rafique');