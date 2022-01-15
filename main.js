// 토글 버튼 클릭시 메뉴 나오게 (반응형)
    const toggleBtn = document.querySelector('.navbar__toggle-btn');
    const homeCategories = document.querySelector('.home__categories');
        toggleBtn.addEventListener('click', () => {
            homeCategories.classList.toggle('open');
        });
        

// 카테고리 클릭 시 일치하는 것만 보여주기
    homeCategories.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;     
            if(filter == null) {
                return; // 아무일도 안 일어나게
            };
        
// selected 제거랑 추가 애니메이션 효과
        const active = document.querySelector('.home__btn.selected');
            active.classList.remove('selected');
        const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
            target.classList.add('selected');
        const homeProjects = document.querySelector('.home__projects');
            homeProjects.classList.add('anim-out');
       
            setTimeout(() => {
                const projects = document.querySelectorAll('.project');
                    projects.forEach((project) => { //프로젝트's에 있는 배열들 하나하나를 프로젝트로 받아옴
                        if (filter === "전체" || filter === project.dataset.type) { //필터랑 타입 이름이 같은거면
                            project.classList.remove('invisible')
                            
                        } else {
                            project.classList.add('invisible')
                        }
                    });
                    homeCategories.classList.toggle('open');
                    homeProjects.classList.remove('anim-out');
            }, 200);
            
    });

// ↑ 버튼 클릭하면 맨 위로 올라가게
    const arrowUp = document.querySelector('.arrow-up');
    const scrollTo = document.querySelector('#navbar');
        arrowUp.addEventListener('click', () => {
        scrollTo.scrollIntoView({ behavior: 'smooth'});
        });

// 밑으로 스크롤 시 ↑ 모양 생기게
    const home = document.querySelector('.home__container');
    const homeHeight = home.getBoundingClientRect().height;
        document.addEventListener('scroll', () => {
            if(window.scrollY > homeHeight + 110) {
                arrowUp.classList.add('visible');
            } else {
                arrowUp.classList.remove('visible');
            }
        });
