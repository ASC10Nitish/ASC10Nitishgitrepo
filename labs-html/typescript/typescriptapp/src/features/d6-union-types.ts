interface Circle
{ 
    kind:"circle";
    radius:number;
}
interface Square
{ 
    kind:"square";
    side:number;
}
function getArea(shape:Circle | Square):number
{ 
    switch(shape.kind)
    { 
     case "circle":
        return Math.PI * shape.radius**2;
     case "square":
        return shape.side**2;   
    }
}