const swiper = new Swiper("#kv", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        autoplay: {
            delay: 3000 //3秒ごとにスライダを切り替える
        }
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: "clickable"
    },
    loop: true, //繰り返し指定
    spaceBetween: 0, //スライド感の余白
    slidesPerView: 1.8, //一度に表示するスライド枚数
    centeredSlides: true, //スライダーの最初と最後に余白を追加せずスライドが真ん中に配置される
    centeredSlidesBounds: true, //アクティブなスライドを中央に配置
    autoplay: {
        disableOnInteraction: false //スライドに触っても自動再生を停止しない
    }
});

const loop = new Swiper("#loop", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    loop: true,
    slidesPerView: 1.5,
    centeredSlides: true,
    breakpoints: {
        // 599px以上の場合
        768: {
            slidesPerView: 1.8
        },
        // 1024px以上の場合
        1024: {
            slidesPerView: 3
        }
    }
});