$(document).load(function() {
	images();
});

$(window).resize(function() {
	images();
});

function images() {
	var img = $('.bannerFeature .item img');
	var imgH = img.height();
	var imgW = img.width();
	var img2 = $('.small .item img');
	var imgH2 = img2.height();
	var imgW2 = img2.width();
	$('.bannerFeature .item').css({
		height: imgH,
		width: imgW
	});
	$('.small .item').css({
		height: imgH2,
		width: imgW2
	});
}

// ### ALL THE SOURCE LOGIC ### //

console.log(parent.directory);
var getImages = function() {

};