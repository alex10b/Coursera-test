$(document).ready(function(){

	$('.miswitch a').click(function(){
		$('.swicht-btn').toggleClass('on');

		if($('#swicht-btn').attr('class') == 'swicht-btn on'){
			$('.pricing-table-cont').toggleClass('rotando-tabla');
		} else{
			$('.pricing-table-cont').toggleClass('rotando-tabla');
		}

	});


});