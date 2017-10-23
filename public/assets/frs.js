$(document).ready(function(){

  $('form').on('submit', function(){

      var newPlayer = $('form input');
      var players = {playerName: newPlayer.val()};
console.log(newPlayer.val());
      $.ajax({
        type: 'POST',
        url: '/addPlayer',
        data: players,
        success: function(data){

          //do something with the data via front-end framework
          
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});