$(function() {

	/**
	 * TAB
	 */
	$('nav li').click(function() {
		$(this).addClass('on').siblings('li').removeClass('on')
		$('main .main').eq($(this).index()).show().siblings('.main').hide()
	})
})