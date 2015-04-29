(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.$el = $el;
    this.game = game;
  };

  View.prototype.bindEvents = function () {
    var $grid = $('.grid');
    var view = this;
    $grid.on('click', 'li', function (event) {
      view.makeMove($(this))
    });
  };

  View.prototype.makeMove = function ($square) {
    var index = $square.index();
    var col = index % 3;
    var row = Math.floor(index / 3);
    try {
      this.styleSquare($square);
      this.game.playMove([row, col]);
      if (this.game.isOver()) {
        alert(this.game.winner() + " wins!")
      }
    } catch (e) {
      alert("Invalid move! " + e.msg);
    }
  };

  View.prototype.styleSquare = function($square) {
    $square.addClass("played");
    $square.text(this.game.currentPlayer);
    if (this.game.currentPlayer === "x") {
      $square.addClass("x");
    } else {
      $square.addClass("o");
    }
  }

  View.prototype.setupBoard = function () {
    this.$el.append('<ul class="group"></ul>');
    for (var i = 0; i < 9; i++) {
      var $ul = $("ul");
      $ul.append("<li></li>");
    }
  };
})();
