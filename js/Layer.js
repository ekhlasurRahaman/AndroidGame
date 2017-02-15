// a grid of Sprites.
// there is a Layer of Tile.floor sprites below the room,
// on top of which is another Layer containing the actual obstacles.

var Layer = {
  create: function(container, tiles, room, extra_class) {
    var element = $('<div class="layer"/>');
    if (extra_class) element.addClass(extra_class);
    container.append(element);
    
    var spriteIndex = 0;
    var lines = new Array();
    for (var i = 1; i <= room.h; i++)
    {
      var line = $("<div class='layer-line'></div>");
      line.css('width', (room.w * 63) + 'px');
      element.append(line);
      lines.push(line);
    }
    
    if (extra_class){
    var line = $("<div class='layer-line'><img src='./img/left-arrow.png' width='60' height='60' alt='left arrow'><img src='./img/up-arrow.png' width='60' height='60' alt='up arrow'><img src='./img/down-arrow.png' width='60' height='60' alt='down arrow'><img src='./img/right-arrow.png' width='60' height='60' alt='right arrow'><img src='./img/transparent.png' width='170' height='65' alt='transparent'><img src='./img/reload.png' width='40' height='40' alt='reload' margin-bottom='40px'><img src='./img/interact.png' width='45' height='45' alt='interact'></div>");
      line.css('width', (room.w * 63) + 'px');
      element.append(line);
      lines.push(line);
   }
      
      
    var sprites = tiles.map(function(pos, tile) {
      return Sprite.create(lines[pos.y], tile);
    });
    
    return {
      sprite_at: function(pos) {
        return sprites.at(pos);
      }
    };
  }
};
