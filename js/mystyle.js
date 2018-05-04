
$('#Modal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

$(document).ready(function()){
  $("card").click(function){
    
  }
}

function (x)