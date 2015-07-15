$(document).ready(function(){
    makeGrid(16);
    
    $('.button').on('click', function(){
        var n_squares = prompt("What size grid do you want? (Default: 16)");
        makeGrid(n_squares);
    })
});

function makeGrid(nSquares)
{
    $('#grid').empty();
     for(var i = 0; i < nSquares; i++)
    {
        // $('#grid').append('<div class="row">');
        for(var j = 0; j < nSquares; j++)
            $('#grid').append('<div class="square"></div>');
        $('#grid').append('</div>');
    }
    var dim = $('#grid').height();
    squareDim = (dim-nSquares)/nSquares;

    $('.square').css({'height':squareDim+'px', 'width':squareDim+'px', 'margin':'0.5px'});
    
    // Adds the color change effect when hovered over.
    $('.square').on('mouseenter', function()
    {
       $(this).addClass('hover');
    });
}