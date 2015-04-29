(function () {
  if (window.Hanoi.View === 'undefined') {
    window.Hanoi.View = {};
  }

  var Hanoi = window.Hanoi;

  Hanoi.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.fromPile = null;
    this.setupTowers();
    this.clickTower();
    this.render();
  };

  Hanoi.View.prototype.setupTowers = function () {
    var $towers = this.$el;
    var towers = this.game.towers
    for (var i = 0; i < 3; i++) {
      $towers.append('<ul class="group" data-tower=\"' + i + '\"></ul>');
      for (var j = 0; j < 3; j++) {
        $tower = this.$el.find("ul[data-tower=" + i + "]")
        if (towers[i][j]) {
          $tower.append("<li class=disk" + j + "></li>");
        } else {
          $tower.append("<li></li>");
        }
      }
    }
  };

  Hanoi.View.prototype.render = function (game) {
    for (var k = 1; k < this.game.towers.length + 1; k++) {
      this.$el.find("li").removeClass("disk" + k);
    }
    for (var i = 0; i < this.game.towers.length; i++) {
      var tower = this.game.towers[i];
      var $tower = this.$el.find("ul[data-tower=" + i + "]");
      for (var j = 0; j < tower.length; j++) {
        var $disk = $tower.children().eq(j);
        $disk.addClass('disk' + tower[j]);
      }
  }
  };

  Hanoi.View.prototype.clickTower = function () {
    var view = this;

    this.$el.on('click', 'ul', function (event) {

      if (view.fromPile === null) {
        view.fromPile = $(event.currentTarget).data('tower');
        view.$el.find("ul").eq(view.fromPile).toggleClass("highlighted");
      } else {
        view.toPile = $(event.currentTarget).data('tower');
        if (view.game.move(view.fromPile, view.toPile)) {
          view.$el.find("ul").eq(view.fromPile).toggleClass("highlighted");
          view.fromPile = null;
          view.toPile = null;
          view.$el.find("ul").eq(view.fromPile).find("li").eq(0).removeClass("disk0")
          view.render();
          if (view.game.isWon()) {
            alert("You win!");
          }
        }
      }
    });
  }

})();
