
var count = 0;

function main () {
    var api = {};

    var saved = count++;

    api.testing = saved;
    var readout = function readout() {
        console.log ("this is: " + this);
    }

    api.checkout = readout;

    readout ();

    return api;

}

var retval = main();

retval.checkout();



console.log (retval);
console.log ("this is: " + retval);

var test = main();
var test2 = main();
var test3 = main();
console.log (test);
console.log (test2);
 test3.testing= 8;
console.log(test3);
console.log (test);
console.log (test2);

