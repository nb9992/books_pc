
//메인 슬라이드
const swiper = new Swiper('.main1', {
    // Optional parameters
    loop: true,
    autoplay: true,
    speed:1500,
    infinite:true,
    pauseOnHover:false, 
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
});


//검색버튼
$('.search_btn').click(function(e){
    e.preventDefault();
    $('.search_pop').show();//열고
});

$('.close').click(function(){
    $('.search_pop').hide();//닫고
})


//푸터에 글로벌사이트 버튼
var aa = 0; //변수 aa에 0을 넣는다.(toggle ul가 안보이는 상태)

$('.toggle').click(function(){
    if(aa == 0){
        $('.toggle ul').show();
        aa = 5;
    } else {                     //.toggle ul가 보이는 상태
        $('.toggle ul').hide();
        aa = 0;
    }
    
});