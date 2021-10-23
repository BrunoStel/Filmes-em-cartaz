$(function(){
    $.ajax({
        url:'https://api.b7web.com.br/cinema/',
        type:'GET',
        dataType:'json',
        beforeSend:function(){
            $('.filmes').html('<div class="d-flex align-items-center"><strong>Carregando...</strong><div class="spinner-border ml-auto" role="status" aria-hidden="true"></div></div>')
        },
        success:function(json){
            var html =''
            for(var i in json){
                html += '<div class="col-md-4 filme"><img class="img-thumbnail img-fluid" src="'+json[i].avatar+'"/>'+json[i].titulo+'</div>'
            }
            $('.filmes').html(html)
        }
    })
})