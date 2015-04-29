(function () {
  if (window.SnakeGame === undefined) {
    window.SnakeGame = {};
  }

  var SnakeGame = window.SnakeGame;

  var View = window.SnakeGame.View = function ($el) {
    this.$el = $el;
    this.board = new SnakeGame.Board();
    this.bindKeys();

    setInterval(this.step.bind(this), 1000);
  };

  SnakeGame.View.prototype.step = function() {
    this.board.snake.move();
    this.$el.html(this.board.render());
  }

  SnakeGame.View.prototype.bindKeys = function () {
    var view = this;
    var dirs = {37:"W", 38:"N", 39:"E",40:"S"};

    $(window).on("keydown", function (event) {
      view.board.snake.turn(dirs[event.which]);
    });
  };

})();
