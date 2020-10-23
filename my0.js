 　　//モーダル表示
    $('.modal').modal({dismissible: false});
    $('#alert').modal('open');
    $('#close').click(function(){
       $('#alert').modal('close');
    });