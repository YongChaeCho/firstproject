
// 1) .gnb: mouse over, focus 시 밑줄(span.bar)
$(function () {
    // 선택자 : selector

    $('.gnb li a').on('mouseenter focus', function(){ 
        let bar= $(this).position().left;
        let widthNumber = $(this).width();
        $('span.bar').css({'left':bar + 'px', 'width':widthNumber + 'px', opacity : 1})
    });

    $('.gnb li a').on('mouseleave', function(){ 
        $('span.bar').css({'left' :0, 'width':0, opacity : 0})
    });
});

// circleBox SVG image(회색 원) 의 길이 구하기
$(function () {
    // each() 메소드 : jQuery 에서 반복문 실행할 때 사용함
    $('.svgAni').find('path').each(function(i, path) {
        let length = path.getTotalLength();
   //     alert('path 의 전체 길이 : ' + length);
    });
});

// scroll animation
$(function () {
    $('.animate').scrolla({
        mobile: true, //mobile version 활성화
        once: true, // scroll 할 때, 한 번만 적용함


    });
});
//배경색 변경하기
//on('scroll resize') - scroll 이나 resize 할 때 이벤트
$(window).on('scroll resize', function() {
    // 화면 top 의 위치값
    let scrollTop = $(document).scrollTop();

    function bgColor(){
        if(scrollTop > 1400 ) {
            $('body').addClass('on');
        } else { // 아닌 경우, class 속성값 on을 삭제함
            $('body').removeClass('on');
        }
        if(scrollTop > 2700){
            $('body').removeClass('on');
        }
    }
});
 // 햄버거 메뉴
$(function () {
    //열기버튼(햄버거 버튼) 클릭하면
    // '.menuOpen .menuWrap element 의 class 값이 on 이 됨
    $('.menuOpen button.open').on('click', function (){
        $('.menuOpen .menuWrap').addClass('on');
    });

    // '.menuOpen .menuWrap element 의 class 값이 삭제됨
    $('.menuOpen .menuWrap .close').on('click', function (){
        $('.menuOpen .menuWrap').removeClass('on');
    })
});