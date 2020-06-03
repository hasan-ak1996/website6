$(document).ready(function(){
	$(".list-unstyled li").click(function(){
		$(this).addClass('selected').siblings('li').removeClass('selected');
		$('.info-content div').hide();
		$('.'+ $(this).data('class')).fadeIn();
	});
	$('#btn').click(function(){
		$('nav').addClass('visible-xs');
		$(this).off('click')
	})
});