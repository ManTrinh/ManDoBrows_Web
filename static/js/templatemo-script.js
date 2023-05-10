const initBg = (autoplay = true) => {
    const bgImgsNames = ['mandoeyebrows_bg1.jpg', 'diagoona-bg-3.jpg', 'diagoona-bg-2.jpg'];
    const bgImgs = bgImgsNames.map(img => "../static/img/" + img);

    $.backstretch(bgImgs, { duration: 4000, fade: 500 });

    if (!autoplay) {
        $.backstretch('pause');
    }
}

const setBg = id => {
    $.backstretch('show', id);
}

const setBgOverlay = () => {
    const windowWidth = window.innerWidth;
    const bgHeight = $('body').height();
    const tmBgLeft = $('.tm-bg-left');

    $('.tm-bg').height(bgHeight);

    if (windowWidth > 768) {
        tmBgLeft.css('border-left', `0`)
            .css('border-top', `${bgHeight}px solid transparent`);
    } else {
        tmBgLeft.css('border-left', `${windowWidth}px solid transparent`)
            .css('border-top', `0`);
    }
}

$(document).ready(function () {
    const autoplayBg = true;	// set Auto Play for Background Images
    initBg(autoplayBg);
    setBgOverlay();

    const bgControl = $('.tm-bg-control');
    bgControl.click(function () {
        bgControl.removeClass('active');
        $(this).addClass('active');
        const id = $(this).data('id');
        setBg(id);
    });

    $(window).on("backstretch.after", function (e, instance, index) {
        const bgControl = $('.tm-bg-control');
        bgControl.removeClass('active');
        const current = $(".tm-bg-controls-wrapper").find(`[data-id=${index}]`);
        current.addClass('active');
    });

    $(window).resize(function () {
        setBgOverlay();
    });
});

var listContent = ["Powder brows is a cosmetic semi permanent makeup technique designed to create eyebrows with soft powder effect, very similar to powder makeup. Powder effect is done with a shading technique using a permanent makeup device, which is similar to a tattoo gun. For clients who draw on their eyebrows everyday, this can be an amazing, beautiful solution. It is also a great alternative for clients that are not good candidates for Microblading or Combo Brows because their skin is too oily as shading is suitable for any skin type!",
    "The Machine Hair Strokes technique creates the same realistic hair-strokes effect as Microblading, but with a machine rather than a hand tool. You get longer-lasting results and half the healing time because more pigment is deposited without cutting into or “blading” the skin. This procedure is a terrific option for people with significant skin conditions such as very oily skin, excessive bleeding, and sensitive skin. The Machine Hair Strokes procedure is used for enhancing the appearance of eyebrows in the same way temporary makeup would be used.It will enable you to look your best while saving time in the morning and can be used for people recovering from chemotherapy, alopecia, or scarring.",
    ""]
let zoom1 = document.querySelector('.serviceImg1')
let zoom2 = document.querySelector('.serviceImg2')
zoom1.addEventListener('click', function () {
    document.querySelector('.test1').innerHTML = '';
    document.querySelector('.test2').innerHTML = '';
    var title = 'Powder Brows';
    var content = listContent[0];
    document.getElementById("info").innerHTML = `<h1>${title}</h1><p>${content}</p>`;
})

zoom2.addEventListener('click', function () {
    document.querySelector('.test1').innerHTML = '';
    document.querySelector('.test2').innerHTML = '';
    var title = 'Natural Hairstrokes';
    var content = listContent[1];
    document.getElementById("info").innerHTML = `<h1>${title}</h1><p>${content}</p>`;
})

/*zoom.addEventListener('mouseout', () => {
    document.getElementById("demo").innerHTML = "";
})*/