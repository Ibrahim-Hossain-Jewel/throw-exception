//Exception handling are below
// const myobj = {
//     a: 1,
//     b: 2
// }
//throw an exception using object.
const myObj1 = {
    toString: function(){
        return 'I am an object exception';
    }
};
//throw myObj1;

function myException(message) {
    this.message = message;
    this.name = 'hello name exception';
    this.toString = function () {
        return this.name +' '+ this.message;
    }
}
//now throw new exception in js.
throw new myException('Missing data!').toString();

