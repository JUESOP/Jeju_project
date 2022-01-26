    let bigPic = document.querySelector(".cup"); //큰 이미지 찾아옴
    let smallPic = document.querySelectorAll(".small"); //작은 이미지 찾아옴

    smallPic.forEach((newPic) => {
        newPic.addEventListener('click', changePic);
    });

    function changePic() {
            //click 이벤트가 발생한 대상(this)의 src 속성을 newPic에 저장 / smallPic을 newPic에 저장
            newPic = this.src;

            //bigPic의 src 속성을 newPic의 속성으로 바꿔줌
            bigPic.setAttribute("src", newPic); 
    };

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(33.4221679507275, 126.67548265318273), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
            mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
        }; 

    // 지도를 생성한다 
    var map = new kakao.maps.Map(mapContainer, mapOption); 

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(33.4221679507275, 126.67548265318273); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);