

$(document).ready(function(){
$('#addtodo').click(function(){
  if($('#input')[0].value != ''){
    $(
    "<div class='box'>"
    +"<div class = 'item' id='item'>"
        +$('#input')[0].value
          +'<a id="del-button" class="delete is-danger" ></a>'
    +'</div>'
    +'</div>'
  ).appendTo($('#todoul')[0]);
  $('input')[0].value='';
}
// console.log($('#todoul #del-button'));
});
$(document).on('click','#del-button',function(){
  $(this)[0].parentNode.parentNode.remove();
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                $('#todoul').sortable();
});
