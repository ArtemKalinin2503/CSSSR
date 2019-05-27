$(document).ready(function() {
	function skillJS() {
		let slider = $('.skillJS__slider');
    //Инициализация слайдера с навыками по JS
    function sliderJSOwl() {
			slider.owlCarousel({
				loop: true,
				margin: 25,
				responsiveClass: true,
				loadedClass: 'owl-carousel owl-loaded',
				responsive: {
					0: {
						items: 2,
						nav: false,
						loop: false
					},
					400: {
						items: 2,
						nav: false,
						loop: false
					},
					500: {
						items: 2,
						nav: false,
						loop: false
					},
					600: {
						items: 3,
						nav: false,
						loop: false
					},
					900: {
						items: 4,
						nav: false,
						loop: false
					}
				}
			});
    }
    sliderJSOwl();

    //При ресайзе окна заново инициализируем слайдер
		$(document).on('custom:resize', function() {
      sliderJSOwl();
    });

    //Функция которая добавялет первому слайду класс first-active и последнему last-active (это необходимо чтобы последний слайд всегда был в правом углу слайдера)
		function lastItemsSlider() {
			let lastItemsActive = $('.owl-stage').find('.active'); //Найдем все активыне слайды
			let nextSlideNoActive = lastItemsActive.last().next(); //Найдем последний активный слайд и следующий слайд после него
			for (var i = 0; i < lastItemsActive.length; i++) {
				$(lastItemsActive[i]).removeClass('last-active');
				$(lastItemsActive[i]).removeClass('first-active');
			}
			lastItemsActive.last().addClass('last-active'); //Добавим последнему слайду с классом active класс last-active
			lastItemsActive.first().addClass('first-active'); //Добавим первому слайду с классом active класс first-active
			nextSlideNoActive.addClass('last-active');
		}

		slider.on('translate.owl.carousel', function() {
			lastItemsSlider();
		});

		slider.on('resize.owl.carousel', function() {
			lastItemsSlider();
		});

		slider.on('resized.owl.carousel', function() {
			lastItemsSlider();
		});

		slider.on('translated.owl.carousel', function() {
			lastItemsSlider();
		});

		slider.on('drag.owl.carousel', function() {
			lastItemsSlider();
		});

		lastItemsSlider();

		//Добавляем класс active-skills на выбранный уровень навыков в JS (для добавления afte со стрелочкой)
		$('.skillJS__item-slider').on('click', function() {
			let itemSlider = $('.skillJS__item-slider');
			for (let i = 0; i < itemSlider.length; i++) {
				$(itemSlider[i]).removeClass('active-skills');
			}
			$(this).addClass('active-skills');
		});
	}
	skillJS();
});
