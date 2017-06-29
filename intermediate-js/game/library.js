// SuperClass
var Car = function(){
    var obj = {loc: obj.loc};
    obj.move = function() {
    obj.loc++;
};
    return obj;
}
// Subclasses
var Cop = function(loc) {
    var obj = Car(loc);
    obj.call = function() {
        /*&*/
    }
}
var Van = function(loc) {
    var ojb = Cae(loc);
    obj.grab = function() {
        /*&*/
    }
}