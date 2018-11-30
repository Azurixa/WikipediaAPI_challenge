function goWiki(value){

    var a = $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        method: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        data: {
            action: 'opensearch',
            search: value
        }
    }).done( (res) => {
        drawResponse(res);
    });

}

function drawResponse(res){

    var html = '';

    for(var i = 1; i < res[1].length; i++){
        html += '<h5>'+res[1][i]+'</h5><p>'+res[2][i]+'</p><a href="'+res[3][i]+'" target="_blank">Read more on Wikipedia</a><hr>';
    }

    $('.response').html(html);

    window.a = res;
    console.log(res);
};

$('#search').click(() => {
    goWiki($('#search-input').val());
});
