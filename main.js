// 토글 버튼 클릭시 메뉴 나오게 (반응형)
const toggleBtn = document.querySelector('.navbar__toggle-btn');
const homeCategories = document.querySelector('.home__categories');
    toggleBtn.addEventListener('click', () => {
        homeCategories.classList.toggle('open');
})

const projects = document.querySelectorAll('.project'); //프로젝트들 하나하나를 projects 배열에 담아줌
    homeCategories.addEventListener('click', (e) => {
const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter
    if(filter == null) {
        return; // 아무일도 안일어나게
    }
    homeCategories.classList.remove('open');
    
    // selected 제거랑 추가 애니메이션 효과
    const active = document.querySelector('.home__btn.selected')
        active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
        target.classList.add('selected');
    const homeProjects = document.querySelector('.home__projects');
        homeProjects.classList.add('anim-out');
        
        setTimeout(() => {
            projects.forEach((project) => { //프로젝트's에 있는 배열들 하나하나를 프로젝트로 받아옴
            if(filter === "전체" || filter === project.dataset.type) { //필터랑 타입 이름이 같은거면
                project.classList.remove('invisible')
            } else {
                project.classList.add('invisible')
                }
            });
            homeProjects.classList.remove('anim-out');
        }, 300);
});


// ↑ 버튼 클릭하면 맨 위로 올라가게
const arrowUp = document.querySelector('.arrow-up');
const scrollTo = document.querySelector('#navbar');
    arrowUp.addEventListener('click', () => {
    scrollTo.scrollIntoView({ behavior: 'smooth'});
    });
