

$(document).ready(function(){
$('#addtodo').click(function(){
  $(
  "<div class='box' id = 'ele'>"
  +"<div class = 'item' id='item'>"
      +$('#input')[0].value
        +'<a id="del-button" class="delete is-danger" ></a>'
  +'</div>'
  +'</div>'
).appendTo($('#todoul')[0]);
// console.log($('#todoul #del-button'));
});
$(document).on('click','#del-button',function(){
  $(this)[0].parentNode.parentNode.remove();
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                $('#todoul').sortable();    
});
