function calculateTriangleArea() {
  // triangle base value
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  //   convert string to number
  const base = parseFloat(triangleBaseText);
  console.log(base);

  //   triangle height value
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);
  //   calculate are
  const area = 0.5 * base * height;
  console.log(area);
  const areaDisplay = document.getElementById("area-span");
  areaDisplay.innerText = area;
}

function calculateRectangleArea() {
  // rectangle width value
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthText = rectangleWidthInput.value;
  const rectangleWidth = parseFloat(rectangleWidthText);
  // rectangle value length value
  const rectangleLengthInput = document.getElementById("rectangle-height");
  const rectangleLengthText = rectangleLengthInput.value;
  const rectangleLength = parseFloat(rectangleLengthText);

  const rectangleArea = rectangleWidth * rectangleLength;
  const areaDisplay = document.getElementById("rectangle-area-span");
  areaDisplay.innerText = rectangleArea;
}
