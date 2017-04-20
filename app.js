var divList = document.getElementById('js-quote');
var divGif = document.getElementById('js-gif');

var startTweet = '"' + 'I have an attention span that\'s as long as it has to be.' + '" ' + 'http://bit.ly/2nqd8lC';

$("#tweet-this").attr("href", 'https://twitter.com/intent/tweet?text=' + startTweet);

var newContent = "";
var newGif = "";

function getQuote() {

  newContent = "";

  $.ajax({
     url: 'https://api.whatdoestrumpthink.com/api/v1/quotes/random',
     dataType: 'JSON',
     success: function(quote) {
       newContent+= '<h3> "'+ quote.message + ' "</h3>';
      divList.innerHTML = newContent;
      var newTweet = "";
      if (quote.message.length > 110) {
        newTweet = '"' + quote.message.slice(0, 110) + '..." ' + 'http://bit.ly/2nqd8lC';
      } else {
        newTweet = '"' + quote.message + '." ' + 'http://bit.ly/2nqd8lC';
        }

      $("#tweet-this").attr("href", 'https://twitter.com/intent/tweet?text=' + newTweet);
     },
     error: function() {
       console.log("Something went wrong");
     }
   });
}

function getGif() {
  newGif = "";

  $.ajax({
    url:'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=trump',
    dataType: 'JSON',
    success: function(gif) {
      newGif += '<img class="gif" src=' + gif.data.image_url + ' />';
      divGif.innerHTML = newGif;
    },
    error: function() {
     console.log("Something went wrong");
   }
  });
}
