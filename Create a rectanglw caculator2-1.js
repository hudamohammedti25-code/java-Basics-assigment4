const rectangle = {
    width: 10,
    height: 5,
    getArea : function() {
        return this.width * this.height;
    },
    getPerimeter : function() {
        return 2 * (this.width + this.height);
    }
};

console.log("Rectangle Area: " , rectangle.getArea());
console.log("Rectangle Perimeter: " , rectangle.getPerimeter());