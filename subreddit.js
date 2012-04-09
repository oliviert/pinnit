var $bar = $('.sr-list');
var $customBar = $('.flat-list.sr-bar.hover:eq(1)');
var subreddits = ['nba', 'madmen', 'gameofthrones', 'programming', 'python', 'starcraft', 'malefashionadvice', 
                  'wow', 'arduino', 'videos'];
var i, len;
$customBar.empty();
$bar.children('span.separator:eq(1)').remove();
$bar.children('.flat-list.sr-bar.hover:eq(2)').remove();
for (i = 0, len = subreddits.length; i < len; ++i) {
  if (i != 0) {
    $customBar.append('<li><span class="separator">-</span>'+
                    '<a href="http://reddit.com/r/'+subreddits[i]+'/">'+subreddits[i]+'</a></li>');
  } else {
    $customBar.append('<li><a href="http://reddit.com/r/'+subreddits[i]+'/">'+subreddits[i]+'</a></li>');
  }
}
