const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sistema de tradução
const translations = {
    'pt': {
        // Header
        'inicio': 'Início',
        'projetos': 'Projetos',
        'habilidades': 'Habilidades',
        'sobre': 'Sobre Mim',
        'experiencia': 'Experiência',
        'contato': 'Contacto',
        // Hero
        'hero-title': 'Lenice Pereira',
        'hero-tagline': 'Aspirante a Desenvolvedora Full Stack',
        'hero-description': 'Desenvolvendo projetos práticos que unem funcionalidade, código limpo e experiência do usuário.',
        'ver-projetos': 'Ver Projetos',
        'fale-comigo': 'Fale Comigo',
        'especializacao': 'Tecnologias',
        'tecnologias': 'Full-Stack Web Developer | PHP | JavaScript | Laravel | Codeigniter | MySQL | HTML5 | CSS3',
        'localizacao': 'Localização',
        'portugal': 'Portugal',
        // Projetos
        'meus-projetos': 'Meus Projetos em Destaque',
        'gestor-financeiro': 'Gestor Financeiro',
        'gestor-desc': 'Aplicação web desenvolvida com Laravel 12, Livewire 3 e Tailwind CSS de gestão financeira. Com uma visão detalhada das finanças, categorização automática, gestão de múltiplas contas e suporte. Com sistema de autenticação segura com 2FA, backoffice administrativo e suporte multi‑idioma (EN/FR/PT)',
        'game-lab': 'Game Lab',
        'game-desc': 'Site com 6 jogos web interativos. Cada aplicação implementa lógicas de jogo distintas (adivinhação, memória, padrões, etc.) utilizando o stack nativo (HTML5, CSS3, JavaScript)',
        'hemovida': 'HemoVida',
        'hemovida-desc': 'Aplicação web full-stack (PHP/MySQL/Bootstrap) que automatiza todo o ciclo de doação de sangue, do registo de dadores ao controlo de inventário, exames e transfusões. Arquitetura centrada em SQL',
        'taskflow': 'TaskFlow',
        'taskflow-desc': 'Site desenvolvido com HTML5, CSS3 e JavaScript puro para organização pessoal. Permite criar, editar e priorizar tarefas utilizando a Drag & Drop API para movê-las entre colunas. Dados persistentes via Local Storage, interface responsiva e funcionalidade de salvamento automático.',
        'weather-app': 'Previsão do Tempo',
        'weather-desc': 'Aplicação web desenvolvida com HTML5, CSS3 e JavaScript que mostra condições meteorológicas em tempo real. Utiliza a OpenWeatherMap API para fornecer dados como temperatura atual, mínima/máxima, umidade e velocidade do vento para qualquer cidade pesquisada',
        'studify': 'Plataforma de Aprendizagem ',
        'studify-desc': 'Plataforma web educativa desenvolvida com Laravel e Bootstrap para organização e gestão de trilhas de estudo interativas. Permite a criação e acompanhamento de percursos de aprendizagem personalizados, com progresso visual, recursos multimédia e trilhas validadas',
        'ver-mais': 'Ver Mais no GitHub',
        // Habilidades
        'habilidades-title': 'Habilidades Técnicas',
        // Sobre
        'sobre-title': 'Sobre Mim',
        'sobre-text1': 'Sou Lenice Pereira, uma profissional em transição para a área de tecnologia, atualmente focada em desenvolvimento web full stack. Com formação recente em Tecnologias e Programação de Sistemas de Informação e experiência anterior em comunicação e análise de negócios, trago uma perspectiva híbrida que une habilidades técnicas emergentes com entendimento estratégico.',
        'sobre-text2': 'Minha jornada até aqui me ensinou a valorizar a atenção aos detalhes e o foco no usuário final, garantindo que soluções sejam tanto funcionais quanto relevantes.',
        'sobre-text3': 'Sou proativa, adaptável e aprendo rápido. Busco uma oportunidade de estágio onde possa colocar em prática meus conhecimentos enquanto continuo aprendendo e contribuindo com uma equipe.',
        'entre-contato': 'Entre em Contacto',
        // Experiência
        'experiencia-title': 'Experiência Profissional',
        'dev-junior': 'Desenvolvedora Web Junior',
        'atendimento-senior': 'Atendimento Sênior',
        'analista-negocios': 'Analista de Negócios',
        'formacao-academica': 'Formação Acadêmica',
        // Contato
        'contato-title': 'Entre em Contacto',
        'contato-intro': 'Estou sempre aberta a novos projetos e oportunidades. Vamos conversar sobre como posso ajudar a transformar suas ideias em soluções digitais!',
        'email': 'Email',
        'telefone': 'Telefone',
        'localizacao': 'Localização',
        'disponivel': 'Disponível para projetos',
        'enviar-email': 'Enviar email',
        'ligar-agora': 'Ligar agora',
        'conecte-redes': 'Ou conecte-se comigo nas redes sociais:',
    },

    'en': {
        // Header
        'inicio': 'Home',
        'projetos': 'Projects',
        'habilidades': 'Skills',
        'sobre': 'About',
        'experiencia': 'Experience',
        'contato': 'Contact',
        // Hero
        'hero-title': 'Lenice Pereira',
        'hero-tagline': 'Aspiring Full Stack Developer',
        'hero-description': 'Developing practical projects that combine functionality, clean code, and user experience.',
        'ver-projetos': 'View Projects',
        'fale-comigo': 'Get In Touch',
        'especializacao': 'Technologies',
        'tecnologias': 'Full-Stack Web Developer | PHP | JavaScript | Laravel | Codeigniter | MySQL | HTML5 | CSS3',
        'localizacao': 'Location',
        'portugal': 'Portugal',
        // Projetos
        'meus-projetos': 'My Featured Projects',
        'gestor-financeiro': 'Financial Manager',
        'gestor-desc': 'Comprehensive personal financial management web application, built with Laravel 12, Livewire 3, and Tailwind CSS. With a detailed view of finances, automatic categorization, multi-account management, and support. Featuring secure authentication with 2FA, administrative backoffice, and multi-language support (EN/FR/PT)',
        'game-lab': 'Game Lab',
        'game-desc': 'Website with 6 interactive web games. Each application implements distinct game logics (guessing, memory, patterns, etc.) using the native stack (HTML5, CSS3, JavaScript)',
        'hemovida': 'HemoVida',
        'hemovida-desc': 'Full-stack web application (PHP/MySQL/Bootstrap) that automates the entire blood donation cycle, from donor registration to inventory control, medical screenings, and transfusions. SQL-centered architecture',
        'taskflow': 'TaskFlow',
        'taskflow-desc': 'Interactive web application developed with HTML5, CSS3, and pure JavaScript for personal organization. Allows creating, editing, and prioritizing tasks using the Drag & Drop API to move them between columns. Persistent data via Local Storage, responsive interface, and auto-save functionality.',
        'weather-app': 'Weather App',
        'weather-desc': 'Web application developed with HTML5, CSS3, and JavaScript that displays real-time weather conditions. Utilizes the OpenWeatherMap API to provide data such as current temperature, min/max, humidity, and wind speed for any searched city',
        'studify': 'Learning Platform',
        'studify-desc': 'Educational web platform developed with Laravel and Bootstrap for organizing and managing interactive study paths. Allows the creation and tracking of personalized learning journeys, with visual progress, multimedia resources, and validated tracks',
        'ver-mais': 'View More on GitHub',
        // Habilidades
        'habilidades-title': 'Technical Skills',
        // Sobre
        'sobre-title': 'About Me',
        'sobre-text1': 'I am Lenice Pereira, a professional transitioning into the technology field, currently focused on full stack web development. With recent training in Information Systems Technologies and Programming and previous experience in communication and business analysis, I bring a hybrid perspective that combines emerging technical skills with strategic understanding.',
        'sobre-text2': 'My journey so far has taught me to value attention to detail and a focus on the end user, ensuring that solutions are both functional and relevant.',
        'sobre-text3': 'I am proactive, adaptable, and a fast learner. I am seeking an internship opportunity where I can apply my knowledge while continuing to learn and contribute to a team.',
        'entre-contato': 'Get In Touch',
        // Experiência
        'experiencia-title': 'Professional Experience',
        'dev-junior': 'Junior Web Developer',
        'atendimento-senior': 'Senior Customer Service',
        'analista-negocios': 'Business Analyst',
        'formacao-academica': 'Academic Education',
        // Contato
        'contato-title': 'Get In Touch',
        'contato-intro': 'I am always open to new projects and opportunities. Let\'s talk about how I can help transform your ideas into digital solutions!',
        'email': 'Email',
        'telefone': 'Phone',
        'localizacao': 'Location',
        'disponivel': 'Available for projects',
        'enviar-email': 'Send email',
        'ligar-agora': 'Call now',
        'conecte-redes': 'Or connect with me on social media:',
    
    }
};

let currentLang = localStorage.getItem('language') || 'pt';

// Função para traduzir a página
function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Aplicar traduções aos elementos que têm data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[lang][key];
            } else {
                // Tratar quebras de linha
                const text = translations[lang][key];
                if (text.includes('\n')) {
                    element.innerHTML = text.replace(/\n/g, '<br>');
                } else {
                    element.textContent = text;
                }
            }
        }
    });
    
    // Atualizar botão de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Inicializar tradução ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    translatePage(currentLang);
});

// Event listeners para botões de idioma
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        translatePage(lang);
    });
});