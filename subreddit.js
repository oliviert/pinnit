// Fetch local pins from browser
var pins = localStorage.getItem('pins');
if (pins) {
  pins = JSON.parse(pins);
} else {
  pins = [];
}

var $bar = $('.sr-list'); // Entire top bar
var $customBar = $('.flat-list.sr-bar.hover:eq(1)'); // Personal user bar

// Clear the bar of default subreddits
$customBar.empty();
$bar.children('span.separator:eq(1)').remove();
$bar.children('.flat-list.sr-bar.hover:eq(2)').remove();

// Add all user pins to subreddit bar
var i, len;
for (i = 0, len = pins.length; i < len; ++i) {
  if (i != 0) {
    $customBar.append('<li><span class="separator" id="'+pins[i]+'">-</span>'+
                      '<a href="http://reddit.com/r/'+pins[i]+'/" id="'+pins[i]+'">'+
                      pins[i]+'</a></li>');
  } else {
    $customBar.append('<li><a href="http://reddit.com/r/'+pins[i]+'/" id="'+pins[i]+
                      '">'+pins[i]+'</a></li>');
  }
}

var name = $('span.redditname').children('a').text(); // Name of current subreddit
var $subscribe = $('div.titlebox span.fancy-toggle-button'); // Element containing the subscribe/pin actions

// Check for pin status and create pin/unpin action accordingly.
if ($.inArray(name, pins) == -1) {
  $subscribe.after('<span class="fancy-toggle-button toggle">'+
                   '<a class="option active add" id="pin" href="#"'+ 
                   'tabindex="100")">pin</a></span>');
} else {
  $subscribe.after('<span class="fancy-toggle-button toggle">'+
                   '<a class="option active remove" id="pin" href="#"'+ 
                   'tabindex="100")">unpin</a></span>');
}

// Handle pin/unpin action
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
                        '<a href="http://reddit.com/r/'+name+'/" id="'+name+
                        '">'+name+'</a></li>');
    } else {
      $customBar.append('<li><a href="http://reddit.com/r/'+name+'/" id="'+
                        name+'">'+name+'</a></li>');
    }
    $pin.removeClass('add').addClass('remove').text('unpin');
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
    $pin.removeClass('remove').addClass('add').text('pin');
  }
});
