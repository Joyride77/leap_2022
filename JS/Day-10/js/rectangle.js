var topLeft = new Point(0, 0);
var rectSize = new Size(400, 200);
var rect = new Rectangle(topLeft, rectSize);
var path = new Path.Rectangle(rect, 4);
path.fillColor = 'blue';
path.strokeColor = 'red';
console.log(rect); // { x: 10, y: 20, width: 200, height: 100 }
console.log(rect.point); // { x: 10, y: 20 }
console.log(rect.size); // { width: 200, height: 100 }