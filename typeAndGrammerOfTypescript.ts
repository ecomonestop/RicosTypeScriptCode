/// <reference path="./node_modules/@types/knockout/index.d.ts" />
//ambient declaration and types
//typescript.codeplex.com is a website that has typing files or typescript definition files
//or a github called DefinitelyTyped for 3rd party
declare var ko: KnockoutStatic;

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


module demo_1 {
        var name = ko.observable("Rico");
        var id = ko.observable(1)
        var guy = {
                id: id,
                fullname: name
        };

        var value: string = guy.fullname();
        console.log(value);

}




