/**
 * Created by HiWin10 on 2017/9/18.
 */
//界面尺寸修正
var doc = document,
    win = window,
    oBody = doc.documentElement || doc.body,
    resize = "onorientationchange" in win ? "orientationchange" : "resize";
rem();
addEventListener(resize, rem, false);
function rem() {
    /*doc.body.clientWidth是获取当前的body的宽度，640是我们的移动端的最大宽度，相除就会得出一个比例，在乘以100px，就会得出我们当前的1rem等于多少px*/
    oBody.style.fontSize = 100 * (doc.body.clientWidth / 640) + "px";
    console.log(oBody.style.fontSize);
}



var mySwiper = new Swiper('.swiper-container',{
		effect : 'fade',
		autoplay:1000,
		fade: {
		  crossFade: false,
		}
		}) 

var mySwiper = new Swiper('.swiper-container',{
			effect : 'fade',
			autoplay:1000,
			fade: {
			  crossFade: false,
			},
			
		
		// 如果需要分页器
		pagination: '.swiper-pagination',
		
		// 如果需要前进后退按钮
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		
		// 如果需要滚动条
		scrollbar: '.swiper-scrollbar',
		 }) 
