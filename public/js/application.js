$(document).ready(function(){

	$('#get_color').on('click', function(e){
	  e.preventDefault();
        $.ajax({
           url:      '/color',
           type:     'post',
           dateType:  'json'
        }).done(function(response){
        	data = JSON.parse(response)
        	var box = $('ul li:nth-child('+data[0]+')')
        	box.css('background-color', data[1])
        })

     
   });
});