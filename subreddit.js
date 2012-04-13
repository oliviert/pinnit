var pins = localStorage.getItem('pins');
if (pins) {
  pins = JSON.parse(pins);
} else {
  pins = [];
}
var $bar = $('.sr-list');
var $customBar = $('.flat-list.sr-bar.hover:eq(1)');
var subreddits = ['nba', 'madmen', 'gameofthrones', 'programming', 
                  'python', 'starcraft', 'malefashionadvice', 'wow', 
                  'arduino', 'videos'];
var i, len;
$customBar.empty();
$bar.children('span.separator:eq(1)').remove();
$bar.children('.flat-list.sr-bar.hover:eq(2)').remove();
for (i = 0, len = pins.length; i < len; ++i) {
  if (i != 0) {
    $customBar.append('<li><span class="separator" id="'+pins[i]+'">-</span>'+
                    '<a href="http://reddit.com/r/'+pins[i]+'/" id="'+pins[i]+'">'+pins[i]+'</a></li>');
  } else {
    $customBar.append('<li><a href="http://reddit.com/r/'+pins[i]+'/" id="'+pins[i]+'">'+pins[i]+'</a></li>');
  }
}
var name = $('span.redditname').children('a').text();
var $subscribe = $('div.titlebox span.fancy-toggle-button');
$subscribe.after('<span class="fancy-toggle-button toggle">'+
                '<a class="option active add" id="pin" href="#"'+ 
                'tabindex="100")">pin</a></span>');
$pin = $('span.fancy-toggle-button a#pin');
$pin.click(function() {
  event.preventDefault();
  if ($pin.hasClass('add')) {
    if ($.inArray(name, pins) > -1) {
      return;
    }
    pins.push(name);
    localStorage.setItem('pins', JSON.stringify(pins));
    if (pins.length > 1) {
      $customBar.append('<li><span class="separator" id="'+name+'">-</span>'+
                        '<a href="http://reddit.com/r/'+name+'/" id="'+name+'">'+name+'</a></li>');
    } else {
      $customBar.append('<li><a href="http://reddit.com/r/'+name+'/" id="'+name+'">'+name+'</a></li>');
    }
    $pin.removeClass('add').addClass('remove');
  } else {
    if ($.inArray(name, pins) == -1) {
      return;
    }
    pins = jQuery.grep(pins, function(value) {
      return value != name;
    });
    localStorage.setItem('pins', JSON.stringify(pins));
    $customBar.children('li').children('a#'+name).remove();
    $customBar.children('li').children('span#'+name).remove();
    $pin.removeClass('remove').addClass('add');
  }
});
