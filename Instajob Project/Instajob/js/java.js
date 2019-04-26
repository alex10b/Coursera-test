$("#jumboo").hover(
  function(){
  		$(".jumbotron", this).css("display", "block");
	}, function(){
  		$(".jumbotron", this).css("display", "none");
});