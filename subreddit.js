var bar = $('.sr-list');
var subreddits = ['nba', 'madmen', 'gameofthrones', 'programming', 'python', 'starcraft', 'malefashionadvice', 
                  'wow', 'arduino', 'videos'];
bar.empty();
bar.append('<ul class="flat-list sr-bar hover">'+
           '<li><a href="http://www.reddit.com/r/all">all</a></li>'+
           '<li><span class="separator">-</span><a href="http://www.reddit.com/r/random/">random</a></li>'+
           '</ul>');
bar.append('<span class="separator"> | </span>');
bar.append('<ul class="flat-list sr-bar hover" id="myreddit"></ul>');
var myreddit = $('ul#myreddit');
var i, len;
for (i = 0, len = subreddits.length; i < len; ++i) {
  if (i != 0) {
    myreddit.append('<li><span class="separator">-</span>'+
                    '<a href="http://reddit.com/r/'+subreddits[i]+'/">'+subreddits[i]+'</a></li>');
  } else {
    myreddit.append('<li><a href="http://reddit.com/r/'+subreddits[i]+'/">'+subreddits[i]+'</a></li>');
  }
}
