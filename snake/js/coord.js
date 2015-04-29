(function() {
  if (window.SnakeGame === undefined) {
    window.SnakeGame = {};
  }

  var Coord = window.SnakeGame.Coord = function(pos) {
    this.x = pos[0];
    this.y = pos[1];
  };

  Coord.prototype.plus = function(other) {
    return [this.x + other.x, this.y + other.y];
  };

  Coord.prototype.isOpposite = function() {
  };

})();
