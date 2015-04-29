(function() {

  if (window.SnakeGame === undefined) {
    window.SnakeGame = {};
  }

  window.SnakeGame.Board = function() {
    this.snake = new window.SnakeGame.Snake();
    this.grid = [];
    for(var i = 0; i < 10; i++) {
      this.grid.push(new Array(10));
    }
  };

  window.SnakeGame.Board.prototype.render = function() {
    var boardString = "";
    for(var i = 0; i < this.grid.length; i++) {
      for(var j = 0; j < this.grid[i].length; j++) {
        if (this.snake.segmentsIncludes([i,j])) {
          boardString += "S";
        } else {
          boardString += " . ";
        }
      }

      boardString += "<br>";
    }

    return boardString;
  };


})();
