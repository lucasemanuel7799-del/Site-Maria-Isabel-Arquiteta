// O Grid foi calculado para formar um bloco perfeito de 4 colunas e 4 linhas.
const projects = [
    {
        id: 1,
        title: "Loja De bem Com a Vida",
        category: "Comercial",
        bentoClass: "md:col-span-2 md:row-span-1",
        coverImage: "assets/projetos/loja-de-bem-com-a-vida/01_resultado.webp", // Capa escolhida
        images: [
            "assets/projetos/loja-de-bem-com-a-vida/01_resultado.webp", 
            "assets/projetos/loja-de-bem-com-a-vida/02_resultado.webp",
            "assets/projetos/loja-de-bem-com-a-vida/03_resultado.webp",
            "assets/projetos/loja-de-bem-com-a-vida/04_resultado.webp",
            "assets/projetos/loja-de-bem-com-a-vida/05_resultado.webp",
            "assets/projetos/loja-de-bem-com-a-vida/06_resultado.webp",
            "assets/projetos/loja-de-bem-com-a-vida/07_resultado.webp",
            "assets/projetos/loja-de-bem-com-a-vida/08_resultado.webp",
            "assets/projetos/loja-de-bem-com-a-vida/09_resultado.webp",
            "assets/projetos/loja-de-bem-com-a-vida/10_resultado.webp"
        ]
    },
    {
        id: 2,
        title: "Malu & Marcelo",
        category: "Interiores",
        bentoClass: "md:col-span-1 md:row-span-2",
        // Define a capa independente da ordem do modal
        coverImage: "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/05_resultado.webp", 
        // A ORDEM AQUI IMPORTA: O carrossel vai seguir essa ordem
        images: {
            "Hall": [
                "assets/projetos/malu-e-marcelo/hall/01_resultado.webp",
            ],
            "Lavabo": [
                "assets/projetos/malu-e-marcelo/lavabo/01_resultado.webp", 
                "assets/projetos/malu-e-marcelo/lavabo/02_resultado.webp",
                "assets/projetos/malu-e-marcelo/lavabo/03_resultado.webp"
            ],
            "Sala Estar/Jantar": [
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/05_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/01_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/02_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/03_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/04_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/06_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/07_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/08_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/09_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/10_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/11_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/12_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/13_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/14_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/15_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/16_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/17_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/18_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/19_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-estar-e-jantar/20_resultado.webp"
            ],
            "Sala de TV": [
                "assets/projetos/malu-e-marcelo/sala-de-tv/01_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-tv/02_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-tv/03_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-tv/04_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-tv/05_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-tv/06_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-tv/07_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-tv/08_resultado.webp",
                "assets/projetos/malu-e-marcelo/sala-de-tv/09_resultado.webp",
            ]
        }
    },
    {
        id: 3,
        title: "Cozinha",
        category: "Interiores",
        bentoClass: "md:col-span-1 md:row-span-2", 
        coverImage: "assets/projetos/cozinha-gourmet/01_resultado.webp", // Capa escolhida
        images: [
            "assets/projetos/cozinha-gourmet/01_resultado.webp",
            "assets/projetos/cozinha-gourmet/02_resultado.webp",
            "assets/projetos/cozinha-gourmet/03_resultado.webp",
            "assets/projetos/cozinha-gourmet/04_resultado.webp",
            "assets/projetos/cozinha-gourmet/05_resultado.webp",
            "assets/projetos/cozinha-gourmet/06_resultado.webp"
        ]
    },
    {
        id: 4,
        title: "Quarto Casal",
        category: "Interiores",
        bentoClass: "md:col-span-2 md:row-span-1", 
        coverImage: "assets/projetos/quarto-ana-maria/01_resultado.webp", // Capa escolhida
        images: [
            "assets/projetos/quarto-ana-maria/01_resultado.webp",
            "assets/projetos/quarto-ana-maria/02_resultado.webp",
            "assets/projetos/quarto-ana-maria/03_resultado.webp",
            "assets/projetos/quarto-ana-maria/04_resultado.webp",
            "assets/projetos/quarto-ana-maria/05_resultado.webp",
            "assets/projetos/quarto-ana-maria/06_resultado.webp",
        ]
    },
    {
        id: 5,
        title: "Varanda Gourmet",
        category: "Residencial",
        bentoClass: "md:col-span-1 md:row-span-2", 
        coverImage: "assets/projetos/varanda-ingrid-e-kadu/01_resultado.webp", // Capa escolhida
        images: [
            "assets/projetos/varanda-ingrid-e-kadu/01_resultado.webp",
            "assets/projetos/varanda-ingrid-e-kadu/02_resultado.webp",
            "assets/projetos/varanda-ingrid-e-kadu/03_resultado.webp",
            "assets/projetos/varanda-ingrid-e-kadu/04_resultado.webp",
        ]
    },
    {
        id: 6,
        title: "Escritório Industrial",
        category: "Comercial",
        bentoClass: "md:col-span-2 md:row-span-1", 
        coverImage: "assets/projetos/escritorio-industrial/01_resultado.webp", // Capa escolhida
        images: [
            "assets/projetos/escritorio-industrial/01_resultado.webp",
            "assets/projetos/escritorio-industrial/02_resultado.webp",
            "assets/projetos/escritorio-industrial/03_resultado.webp",
            "assets/projetos/escritorio-industrial/04_resultado.webp",
            "assets/projetos/escritorio-industrial/05_resultado.webp",
            "assets/projetos/escritorio-industrial/06_resultado.webp",
            "assets/projetos/escritorio-industrial/07_resultado.webp"
        ]
    },
    {
        id: 7,
        title: "Quarto Infantil",
        category: "Residencial",
        bentoClass: "md:col-span-1 md:row-span-2", 
        coverImage: "assets/projetos/quarto-pedro/01_resultado.webp", // Capa escolhida
        images: [
            "assets/projetos/quarto-pedro/01_resultado.webp",
            "assets/projetos/quarto-pedro/02_resultado.webp",
            "assets/projetos/quarto-pedro/03_resultado.webp",
            "assets/projetos/quarto-pedro/04_resultado.webp",
            "assets/projetos/quarto-pedro/05_resultado.webp",
            "assets/projetos/quarto-pedro/06_resultado.webp",
            "assets/projetos/quarto-pedro/07_resultado.webp",
            "assets/projetos/quarto-pedro/08_resultado.webp",
            "assets/projetos/quarto-pedro/09_resultado.webp",
        ]
    },
    {
        id: 8,
        title: "Mari & Jd",
        category: "Residencial",
        bentoClass: "md:col-span-2 md:row-span-1", 
        coverImage: "assets/projetos/mari-e-jd/cozinha/02_resultado.webp", // Capa escolhida
        images: {
            "Sala": [
                "assets/projetos/mari-e-jd/sala/01_resultado.webp",
                "assets/projetos/mari-e-jd/sala/02_resultado.webp"
            ],
            "Cozinha": [
                "assets/projetos/mari-e-jd/cozinha/01_resultado.webp", 
                "assets/projetos/mari-e-jd/cozinha/02_resultado.webp",
                "assets/projetos/mari-e-jd/cozinha/03_resultado.webp"
            ],
            "Escritório": [
                "assets/projetos/mari-e-jd/escritorio/01_resultado.webp",
                "assets/projetos/mari-e-jd/escritorio/02_resultado.webp"
            ],
            "Suíte": [
                "assets/projetos/mari-e-jd/suite/01_resultado.webp",
                "assets/projetos/mari-e-jd/suite/02_resultado.webp",
                "assets/projetos/mari-e-jd/suite/03_resultado.webp"
            ]
        }
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('portfolio-grid');
    const modal = document.getElementById('gallery-modal');
    const modalSlider = document.getElementById('modal-slider');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalTabs = document.getElementById('modal-tabs');
    const slideCounter = document.getElementById('slide-counter');
    const closeModalBtn = document.getElementById('close-modal');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    const filterButtons = document.querySelectorAll('.filter-btn'); // Botões de filtro

    // Variáveis globais para controlar o modal aberto
    let flatImages = []; // Array unificado de todas as imagens do projeto aberto
    let currentSlideIndex = 0;

    // --- 1. Lógica de Filtro e Renderização de Cards ---
    function renderProjects(filter = 'todos') {
        // Limpa o grid atual
        gridContainer.innerHTML = '';

        // Filtra o array baseado na categoria escolhida
        const filteredProjects = filter === 'todos' 
            ? projects 
            : projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

        filteredProjects.forEach((proj) => {
            let coverImg;
            if (proj.coverImage) {
                coverImg = proj.coverImage;
            } else if (Array.isArray(proj.images)) {
                coverImg = proj.images[0];
            } else {
                const firstCategory = Object.keys(proj.images)[0];
                coverImg = proj.images[firstCategory][0];
            }
            
            // Adicionado a classe animate-fadeIn para dar efeito na troca
            const articleHTML = `
                <article class="group relative overflow-hidden cursor-pointer w-full h-full bg-zinc-100 animate-fadeIn ${proj.bentoClass}" onclick="openModal(${proj.id})">
                    <div class="absolute inset-0 overflow-hidden">
                        <img src="${coverImg}" 
                             class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                             alt="${proj.title} capa">
                        <div class="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    </div>
                    
                    <div class="absolute inset-0 z-20 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                        <span class="text-zinc-300 text-xs tracking-widest uppercase mb-2">${proj.category}</span>
                        <h3 class="text-white text-2xl md:text-3xl font-serif">${proj.title}</h3>
                    </div>
                </article>
            `;
            gridContainer.insertAdjacentHTML('beforeend', articleHTML);
        });
    }

    // Inicializa carregando todos os projetos
    renderProjects();

    // Eventos de clique nos botões de Filtro
    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove a cor escura e a borda ativa de todos
                filterButtons.forEach(b => {
                    b.classList.remove('border-zinc-900', 'text-zinc-900');
                    b.classList.add('text-zinc-400', 'border-transparent');
                });

                // Coloca a cor ativa apenas no clicado
                btn.classList.remove('text-zinc-400', 'border-transparent');
                btn.classList.add('border-zinc-900', 'text-zinc-900');

                // Puxa a string (ex: 'Residencial') e refaz o grid
                const filterValue = btn.getAttribute('data-filter');
                renderProjects(filterValue);
            });
        });
    }

    // --- 2. Lógica do Modal ---
    function updateUI() {
        if (!flatImages[currentSlideIndex]) return; // Proteção contra quebra
        
        slideCounter.innerText = `${currentSlideIndex + 1} / ${flatImages.length}`;

        const slideElements = modalSlider.querySelectorAll('.snap-center');
        if(slideElements[currentSlideIndex]) {
            slideElements[currentSlideIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }

        const currentItem = flatImages[currentSlideIndex];
        if (currentItem && currentItem.categoryName && modalTabs.children.length > 0) {
            Array.from(modalTabs.children).forEach(btn => {
                if (btn.innerText === currentItem.categoryName) {
                    btn.className = 'text-sm uppercase tracking-widest pb-1 border-b-2 border-white text-white transition-colors';
                } else {
                    btn.className = 'text-sm uppercase tracking-widest pb-1 border-b-2 border-transparent text-zinc-500 hover:text-zinc-300 transition-colors';
                }
            });
        }
    }

    window.openModal = function(projectId) {
        const project = projects.find(p => p.id === projectId);
        if(!project) return;

        flatImages = []; 
        modalTabs.innerHTML = '';
        currentSlideIndex = 0;

        modalTitle.innerText = project.title;
        modalCategory.innerText = project.category;

        if (Array.isArray(project.images)) {
            project.images.forEach(imgUrl => {
                flatImages.push({ url: imgUrl, categoryName: null });
            });
        } else {
            const categories = Object.keys(project.images);
            
            categories.forEach((cat, index) => {
                const btn = document.createElement('button');
                btn.innerText = cat;
                btn.className = `text-sm uppercase tracking-widest pb-1 border-b-2 transition-colors ${index === 0 ? 'border-white text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`;
                
                btn.onclick = () => {
                    const targetIndex = flatImages.findIndex(img => img.categoryName === cat);
                    currentSlideIndex = targetIndex;
                    updateUI();
                };
                modalTabs.appendChild(btn);

                project.images[cat].forEach(imgUrl => {
                    flatImages.push({ url: imgUrl, categoryName: cat });
                });
            });
        }

        modalSlider.innerHTML = flatImages.map(img => `
            <div class="snap-center shrink-0 w-full h-full flex items-center justify-center p-2">
                <img src="${img.url}" class="max-w-full max-h-full object-contain rounded-sm shadow-2xl">
            </div>
        `).join('');

        updateUI(); 

        modal.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
    };

    // Botões do Modal
    prevBtn.onclick = () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateUI();
        }
    };

    nextBtn.onclick = () => {
        if (currentSlideIndex < flatImages.length - 1) {
            currentSlideIndex++;
            updateUI();
        }
    };

    // Scroll manual no celular
    modalSlider.addEventListener('scroll', () => {
        clearTimeout(modalSlider.scrollTimeout);
        modalSlider.scrollTimeout = setTimeout(() => {
            const slideWidth = modalSlider.clientWidth;
            const scrollPosition = modalSlider.scrollLeft;
            currentSlideIndex = Math.round(scrollPosition / slideWidth);
            updateUI();
        }, 100);
    });

    function closeModal() {
        modal.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            modalSlider.innerHTML = '';
            modalTabs.innerHTML = '';
        }, 300);
    }

    closeModalBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('snap-center')) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('pointer-events-none')) return;
        
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });

    // --- 3. Slideshow do Perfil (Seção Sobre) ---
    const profileSlideshow = document.querySelector('.profile-slideshow-container');
    if (profileSlideshow) {
        const profileSlides = profileSlideshow.querySelectorAll('.profile-slide');
        if (profileSlides.length > 1) {
            let currentProfileSlide = 0;
            setInterval(() => {
                profileSlides[currentProfileSlide].classList.remove('opacity-100');
                profileSlides[currentProfileSlide].classList.add('opacity-0');
                currentProfileSlide = (currentProfileSlide + 1) % profileSlides.length;
                profileSlides[currentProfileSlide].classList.remove('opacity-0');
                profileSlides[currentProfileSlide].classList.add('opacity-100');
            }, 4000); 
        }
    }

    // --- 4. Menu Mobile ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileNav) {
        // Ao clicar no hambúrguer, mostra ou esconde o menu
        mobileMenuBtn.onclick = () => {
            mobileNav.classList.toggle('hidden');
            mobileNav.classList.toggle('flex');
        };

        // Ao clicar em qualquer link (ex: Projetos, Sobre), fecha o menu e vai pra seção
        mobileLinks.forEach(link => {
            link.onclick = () => {
                mobileNav.classList.add('hidden');
                mobileNav.classList.remove('flex');
            };
        });
    }
});