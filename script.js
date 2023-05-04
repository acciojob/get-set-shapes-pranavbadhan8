//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	get getwidth(){
		return this.width;
	}

	get getheight(){
		return this.height;
	}
	getArea(){
		 let area =  this.width*this.height;
	          return area;
	}
}

class Square extends Rectangle {
	 constructor(side){
		 super(side,side);
	 }
	getPetimeter(){
		return 4*(this.width);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
