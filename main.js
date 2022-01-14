// 프로젝트 애니메이션
const workContainer = document.querySelector('.home__categories');
const projectContainer = document.querySelector('.home__projects');

// 토글 버튼 클릭시 메뉴 나오게 (반응형)
const toggleBtn = document.querySelector('.navbar__toggle-btn');

toggleBtn.addEventListener('click', () => {
    workContainer.classList.toggle('open');
    
})
const projects = document.querySelectorAll('.project'); //프로젝트들 하나하나를 projects 배열에 담아줌
workContainer.addEventListener('click', (e) => {
const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter
    if(filter == null) {
        return; // 아무일도 안일어나게
    }

    // selected 제거랑 추가 애니메이션 효과
    const active = document.querySelector('.home__btn.selected')
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

        projectContainer.classList.add('anim-out');

        setTimeout(() => {
            projects.forEach((project) => { //프로젝트's에 있는 배열들 하나하나를 프로젝트로 받아옴
            if(filter === "전체" || filter === project.dataset.type) { //필터랑 타입 이름이 같은거면
                project.classList.remove('invisible')
            } else {
                project.classList.add('invisible')
            }
        });
            projectContainer.classList.remove('anim-out');
        }, 300);
});




// 내일 하기 위로 화살표 누르면 위로 이동하는거
// 스터디 프젝보고 하기 arrow up
//↑ 이거 누르면 맨 위로 이동
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
    selectNavItem(navItems[sectionIds.indexOf(selector)]);
}
