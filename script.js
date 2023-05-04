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
		return this.width*this.height;
	}
}

class Square extends Rectangle {
	getPetimeter(){
		return 2*(this.width+this.height);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
