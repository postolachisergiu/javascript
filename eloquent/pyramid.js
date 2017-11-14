function createHalfPyramid (height) {

  for (var i = 1; i <= height; i++) {
    var row = '';

    for (var j = 1; j <= i; j++) {
      row += '#';
    }

    console.log(row);
  }
}

//createHalfPyramid(7);

function createHalfPyramidImproved(height) {
  for (var line = "#"; line.length <= height; line += "#")
  console.log(line);
}

createHalfPyramidImproved(16);
