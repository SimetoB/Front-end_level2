// Load from local storage
function storage() {
	if (typeof(Storage) !== "undefined") {
		if (localStorage.getItem('imgArray')) {
			var tmp = localStorage.getItem('imgArray');
			imgArr = JSON.parse(tmp);
			return imgArr;
		} else {
			var imgArr = [
				['how-to-achieve-success.jpg', 0],
				['imPOSSIBLE.jpg', 0],
				['on-top-of-the-mountain.jpg', 0],
				['success-just-ahead.jpg', 0],
				['the-iceberg-of-success.jpg', 0]
			];
			return imgArr;
		}
	} else {
		alert ("Не можеш да използваш тази функция. Трябва да си обновиш браузъра.");
	}
};

var imgSrc = storage(),
	i = 0;

// Render image
function renderImg() {
	$('#gallery').attr('src', imgSrc[i][0]);
	$('#target').attr('href', imgSrc[i][0]);
	saveToLocal();
}

renderImg();

// Render star
function renderStar() {
	if (imgSrc[i][1]) {
		$('#star-holder').html('<img src="star-liked.jpg" id="star" alt="star" /><br />Times liked ' + imgSrc[i][1]);
	} else {
		$('#star-holder').html('<img src="star.png" id="star" alt="star" /><br />Times liked ' + imgSrc[i][1]);
	}
}

renderStar();

// Save to local storage
function saveToLocal() {
	if (typeof(Storage) !== 'undefined') {
		var tmp = JSON.stringify(imgSrc);
		localStorage.setItem('imgArray', tmp);
	}
};

// Change background
$('#color').focusout(function(){
	$('#wrapper').css('background-color', $('#color').val());
});


// Prev button
$('#prev').click(function(){
	if (i == 0 ) {
		i = imgSrc.length - 1;
		renderImg();
		renderStar();
	} else {
		i -= 1;
		renderImg();
		renderStar();
	}
});

// Next button
$('#next').click(function(){
	if (i == imgSrc.length - 1 ) {
		i = 0;
		renderImg();
		renderStar();
	} else {
		i += 1;
		renderImg();
		renderStar();
	}
});

// Add button
$('#add').click(function(){
	var newSrc = prompt('Enter New Image URL', 'http://webacademy.bg/wa_logo.png');
	if (!newSrc) {
		return;
	} else {
		imgSrc.push([newSrc, 0]);
	}
});

// Change star
$('#star-holder').on('click', function(ev) {
	if (ev.target.id === 'star') {
		if (imgSrc[i][1]) {
			imgSrc[i][1] = 0;
			$('#star-holder').html('<img src="star.png" id="star" alt="star" /><br />Times liked ' + imgSrc[i][1]);
			saveToLocal();
		} else {
			imgSrc[i][1] = 1;
			$('#star-holder').html('<img src="star-liked.jpg" id="star" alt="star" /><br />Times liked ' + imgSrc[i][1]);
			saveToLocal();
		}
	}
});