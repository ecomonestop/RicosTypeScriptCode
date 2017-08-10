var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        alert("Engine started: " + this.engine);
    };
    Car.prototype.stop = function () {
        alert("Engine stopped: " + this.engine);
    };
    return Car;
}());
//Standard Javascript ab
window.onload = function () {
    var car = new Car("V8");
    car.start();
    car.stop();
};
//# sourceMappingURL=Car.js.map