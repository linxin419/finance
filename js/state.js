$(function() {

	/**
	 * 大TAB
	 */
	$('nav li').click(function() {
		$(this).addClass('on').siblings('li').removeClass('on')
		$('main .main').eq($(this).index()).show().siblings('.main').hide()
		$('main .main').eq($(this).index()).addClass('on').siblings('.main').removeClass('on')
	})

	/**
	 * 小TAB
	 */
	$('.tab li').click(function() {
		$(this).addClass('on').siblings('li').removeClass('on')
		$('.main.on .order .list').eq($(this).index()).show().siblings('.list').hide()
	})
})