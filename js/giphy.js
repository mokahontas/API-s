var baseGiphyURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";
var $baseGiphyContent = $(".giphy .content");
//
var giphyTimer = null;
//
var displayGiphyInformation = function ( data ) {
  var giphy  = data.data.image_url;
  var $img = $("<img>").attr( "src", giphy );
  $baseGiphyContent.prepend( $img );

};
var getGiphyInformation = function () {
  var url = baseGiphyURL;
//search funciton
var currentValue = $(".search").val();
if ( currentValue !== "" ) {
  url += "&tag=";
  url += currentValue;
}

  $.ajax({
    url: url,
    dataType: "JSON",
    type: "GET"
  }).done( displayGiphyInformation );
};
//
$(document).ready(function () {
  getGiphyInformation();
// giphyTimer = window.setInterval( getGiphyInformation, 1000 );

$(".giphy button").on("click", getGiphyInformation );
});
