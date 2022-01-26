let bigPic = document.querySelector(".cup"); //큰 이미지 찾아옴
let smallPic = document.querySelectorAll(".small"); //작은 이미지 찾아옴

    for(let i = 0; i < smallPic.length; i++) {
        //클릭하면 changePic 함수 호출
        smallPic[i].addEventListener("click", changePic);
    }

    function changePic() {
        //click 이벤트가 발생한 대상(this)의 src 속성을 newPic에 저장 / smallPic을 newPic에 저장
        let newPic = this.src;

        //bigPic의 src 속성을 newPic의 속성으로 바꿔줌
        bigPic.setAttribute("src", newPic); 
    }