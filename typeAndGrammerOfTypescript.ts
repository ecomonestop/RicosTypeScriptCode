
//inference of the type i.e. number
var i = 12;

//explicit typing using the var <name>: <type> | = <init value that must be of same type as <type>>
var g: number = 3;

//the default any type
var a;

//giving a function a type.  Type is defined by var <func name> : (<function params>) => <return type> | = function implementation
var myFunc : (s: string, ss: string) => void
        = function (s, ss) {
                 s + ss;
                           };



myFunc("word1", "word2");