 document.getElementById('calculate-btn').addEventListener('click', function() {
            
            const transport = parseInt(document.getElementById('transport').value) || 0;
            const energy = parseInt(document.getElementById('energy').value) || 0;
            const meals = parseInt(document.getElementById('meals').value) || 0;
            const recycling = parseInt(document.getElementById('recycling').value) || 0;
            
           
            let footprint = (transport * 0.2) + (energy * 0.1) + (meals * 0.5);
            
           
            footprint = footprint * (1 - (recycling / 100));
            
       
            footprint = Math.round(footprint * 10) / 10;
            
           
            let message = "";
            if (footprint < 5) {
                message = "Parabéns! Sua pegada ecológica é baixa. Você está fazendo um excelente trabalho para preservar o planeta.";
            } else if (footprint < 10) {
                message = "Sua pegada ecológica está na média. Há algumas áreas onde você pode melhorar para reduzir seu impacto.";
            } else {
                message = "Sua pegada ecológica é alta. Considere implementar mais práticas sustentáveis no seu dia a dia.";
            }
            
        
            document.getElementById('footprint-value').textContent = `Sua pegada ecológica é ${footprint} toneladas de CO2 por ano.`;
            document.getElementById('footprint-message').textContent = message;
            document.getElementById('result').style.display = 'block';
            
        
            document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
        });

      
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        
        window.addEventListener('scroll', function() {
            const fab = document.querySelector('.fab');
            if (window.scrollY > 300) {
                fab.style.display = 'flex';
            } else {
                fab.style.display = 'none';
            }
        });

  
        document.querySelectorAll('nav a, .footer-column a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    document.querySelector(targetId).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

      
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.pillar-card, .tip-card, .news-card, .factor').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });