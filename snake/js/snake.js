(function() {

  if (window.SnakeGame === undefined) {
    window.SnakeGame = {};
  }

  window.SnakeGame.Snake = function() {
    this.dir = "E";
    this.segments = [[4,4], [4,5], [4,6], [4,7]];
  }

  window.SnakeGame.Snake.DIRS =
               { "N": [-1,0],
                 "W": [0, -1],
                 "S": [1, 0],
                 "E": [0,1]};

  window.SnakeGame.Snake.prototype.move = function() {
    var segCoord = new SnakeGame.Coord(this.segments[0]);
    var newHead = segCoord.plus(new SnakeGame.Coord(SnakeGame.Snake.DIRS[this.dir]));

    var oldHead = this.segments[0];
    var newSegments = [];
    newSegments[0] = newHead;


    for (var i = 1; i < this.segments.length; i++) {
      if (i == 1) {
        newSegments[i] = oldHead;
      } else {

        newSegments[i] = this.segments[i-1];
        if (i < this.segments.length - 1) {
          newSegments[i+1] = this.segments[i];
        }
      }
    }
    this.segments = newSegments;
  }


  window.SnakeGame.Snake.prototype.turn = function(dir) {
    this.dir = dir;
  }

  window.SnakeGame.Snake.prototype.segmentsIncludes = function(arr) {

    function eqArrays(arr1, arr2) {
      return arr1[0] === arr2[0] && arr1[1] === arr2[1];
    }

    for (i = 0; i < this.segments.length; i++) {
      if (eqArrays(arr, this.segments[i])) {
        return true;
      }
    }

    return false;
  }

})();
