{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Kind = Circle | Rectangle;

  const calculateShapeArea = (kind: Kind) => {
    let result: number;
    if (kind.shape === "circle") {
      result = Math.PI * kind.radius * kind.radius;
      return result;
    } else if (kind.shape === "rectangle") {
      result = kind.width * kind.height;
      return result;
    }
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea);
}
