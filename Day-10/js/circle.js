var topLeft = new Point(10, 20);
var rectSize = new Size(300, 300);
var rect = new Rectangle(topLeft, rectSize);
var path = new Path.Rectangle(rect, 200);
path.fillColor = 'red';
console.log(rect); // { x: 10, y: 20, width: 200, height: 100 }
console.log(rect.point); // { x: 10, y: 20 }
console.log(rect.size); // { width: 200, height: 100 }
path.strokeColor = 'red';