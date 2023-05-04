//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	get getwidth(width){
		return this.width;
	}

	get getheight(height){
		return this.height;
	}
	getArea(width,height){
		 let area =  this.width*this.height;
	          return area;
	}
}

class Square extends Rectangle {
	 constructor(side,side){
		 super(side,side);
	 }
	getPetimeter(){
		return 4*(this.width);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
