const area = (side1, side2, side3) => {
  const side1IsNum = typeof side1 === "number";
  const side2IsNum = typeof side2 === "number";
  const side3IsNum = typeof side3 === "number";
  if (!(side1IsNum && side2IsNum && side3IsNum)) {
    return NaN;
  } else {
    // Using Heron's formula to find the area.
    const semiPerimeter = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - side1) *
        (semiPerimeter - side2) *
        (semiPerimeter - side3)
    );
    return area.toFixed(2);
  }
};

console.log(area(5, 6, 7));
console.log(area("helo", 6, 7));
