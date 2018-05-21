$(function() {

	/**
	 * 树形展开
	 */
	$('.structure.on .ico').click(function() {
		$(this).parents('.view').siblings('.structure').stop().slideToggle()
	})

	/**
	 * TAB
	 */
	$('nav li').click(function() {
		$(this).addClass('on').siblings('li').removeClass('on')
		$('main .main').eq($(this).index()).show().siblings('.main').hide()
	})
})