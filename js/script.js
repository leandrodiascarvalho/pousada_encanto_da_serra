document.addEventListener('DOMContentLoaded', function() {
    // jQuery initialization
    $(function() {
        // Suite descriptions
        const suiteDescriptions = {
            simple: {
                title: "Suíte Simples",
                shortDesc: "Nossa suíte simples oferece conforto com ótimo custo-benefício.",
                fullDesc: "A Suíte Simples da Pousada Encanto da Serra é perfeita para viajantes que buscam conforto com excelente custo-benefício. Com 25m², este espaço aconchegante possui uma decoração leve e harmoniosa que remete à tranquilidade da natureza ao redor. A cama Queen Size com lençóis de algodão egípcio garante noites de sono reparador após um dia de exploração pela região.",
                price: "R$ 350,00/noite",
                image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                amenities: [
                    "Cama Queen Size",
                    "Ar-condicionado",
                    "TV 32 polegadas",
                    "Wi-Fi gratuito",
                    "Frigobar",
                    "Banheiro privativo com chuveiro",
                    "Amenities naturais",
                    "Roupas de cama e banho premium"
                ]
            },
            luxury: {
                title: "Suíte Simples Luxo",
                shortDesc: "Nossa suíte de luxo proporciona uma experiência única com espaço amplo e comodidades premium.",
                fullDesc: "A Suíte Simples Luxo eleva sua experiência de hospedagem a um novo patamar. Com seus generosos 40m², este refúgio sofisticado combina elegância e conforto em cada detalhe. A cama King Size com colchão ortopédico e travesseiros de pluma garantem o máximo de conforto. O ambiente é complementado por uma área de estar com sofá confortável, perfeito para momentos de leitura ou relaxamento contemplando a vista da Serra através da ampla janela panorâmica.",
                price: "R$ 580,00/noite",
                image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                amenities: [
                    "Cama King Size",
                    "Ar-condicionado Split",
                    "Smart TV 43 polegadas",
                    "Sistema de som Bluetooth",
                    "Wi-Fi gratuito",
                    "Frigobar abastecido",
                    "Máquina de café espresso",
                    "Área de estar com sofá",
                    "Banheira de hidromassagem",
                    "Roupões e chinelos",
                    "Amenities premium",
                    "Varanda privativa"
                ]
            },
            romantic: {
                title: "Suíte Romântica",
                shortDesc: "Um refúgio especial para momentos de intimidade e conexão.",
                fullDesc: "Nossa Suíte Romântica foi projetada pensando em casais que buscam uma experiência única e memorável. Com 35m², este espaço íntimo oferece um ambiente acolhedor e sofisticado. Uma cama King Size com lençóis de seda, iluminação suave e decoração especial criam o cenário perfeito para momentos inesquecíveis. A varanda privativa permite que os casais desfrutem de vistas deslumbrantes da Serra em total privacidade.",
                price: "R$ 680,00/noite",
                image: "https://images.unsplash.com/photo-1633104685814-ab7b36246d56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                amenities: [
                    "Cama King Size",
                    "Champanhe de boas-vindas",
                    "Varanda privativa",
                    "Decoração romântica",
                    "Kit presente para o casal",
                    "Serviço de café da manhã no quarto",
                    "Jacuzzi para dois",
                    "Wi-Fi gratuito",
                    "TV Smart 43\"",
                    "Minibar premium"
                ]
            },
            "master-luxury": {
                title: "Suíte Master de Luxo",
                shortDesc: "A mais alta expressão de conforto e sofisticação.",
                fullDesc: "Nossa Suíte Master de Luxo representa o ápice da hospedagem de alto padrão. Com impressionantes 60m², este ambiente extraordinário oferece uma experiência verdadeiramente exclusiva. Uma cama Super King personalizada, área de estar privativa, jacuzzi panorâmica e serviços 24 horas garantem um refúgio de puro requinte. Cada detalhe foi cuidadosamente pensado para proporcionar o máximo de conforto e elegância.",
                price: "R$ 950,00/noite",
                image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                amenities: [
                    "Cama Super King personalizada",
                    "Jacuzzi panorâmica",
                    "Área de estar exclusiva",
                    "Serviço de mordomo 24h",
                    "Kit welcome VIP",
                    "Minibar premium",
                    "Máquina de café expresso",
                    "Sistema de som Bose",
                    "Smart TV 55\"",
                    "Menu de travesseiros",
                    "Varanda com vista panorâmica",
                    "Amenities importados",
                    "Adega privativa",
                    "Espumante e frutas"
                ]
            }
        };

        // Room detail modal
        $('.btn-more').click(function(e) {
            e.preventDefault();
            const suiteType = $(this).data('suite');
            const suite = suiteDescriptions[suiteType];
            
            // Populate room detail modal
            $('#room-detail-content').html(`
                <div class="room-detail-header">
                    <img src="${suite.image}" alt="${suite.title}">
                    <div class="room-detail-header-content">
                        <h2>${suite.title}</h2>
                        <p>${suite.shortDesc}</p>
                        <p class="price">${suite.price}</p>
                    </div>
                </div>
                <div class="room-detail-section">
                    <h3>Descrição</h3>
                    <p>${suite.fullDesc}</p>
                </div>
                <div class="room-detail-section">
                    <h3>Comodidades</h3>
                    <div class="amenities-list">
                        ${suite.amenities.map(amenity => `
                            <div class="amenity-item">
                                <svg viewBox="0 0 24 24" width="16" height="16">
                                    <path fill="currentColor" d="M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41-1.41L9,16.17z"/>
                                </svg>
                                ${amenity}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `);
            
            // Store selected suite type for booking
            $('#bookNowBtn').data('suite', suiteType);
            
            // Show modal
            $('#roomDetailModal').css('display', 'flex');
            document.body.style.overflow = 'hidden';
        });
        
        // Book Now button in room detail modal
        $('#bookNowBtn').click(function() {
            const suiteType = $(this).data('suite');
            const suiteSelect = $('#suite');
            
            // Set suite type in reservation form
            if (suiteSelect.length) {
                suiteSelect.find('option').each(function() {
                    if ($(this).val() === suiteType) {
                        suiteSelect.val(suiteType);
                        return false;
                    }
                });
            }
            
            // Add suite description to reservation form
            const suite = suiteDescriptions[suiteType];
            $('#suite-description').html(`
                <h3>${suite.title} - ${suite.price}</h3>
                <p>${suite.shortDesc}</p>
            `);
            
            // Close room detail modal and open reservation modal
            $('#roomDetailModal').css('display', 'none');
            $('#reservationModal').css('display', 'flex');
        });
        
        // Close modals
        $('.close-modal').click(function() {
            $(this).closest('.modal').css('display', 'none');
            document.body.style.overflow = '';
        });
        
        // Close modal when clicking outside
        $(window).click(function(e) {
            if ($(e.target).hasClass('modal')) {
                $('.modal').css('display', 'none');
                document.body.style.overflow = '';
            }
        });
        
        // Mobile Navigation
        $('.hamburger').click(function() {
            // Toggle Nav
            $('.nav-links').toggleClass('active');
            
            // Animate Links
            $('.nav-links li').each(function(index) {
                if ($(this).css('animation')) {
                    $(this).css('animation', '');
                } else {
                    $(this).css('animation', `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
                }
            });
            
            // Hamburger Animation
            $(this).toggleClass('toggle');
        });

        // Smooth Scrolling
        $('a[href^="#"]').click(function(e) {
            e.preventDefault();
            
            if ($('.nav-links').hasClass('active')) {
                $('.nav-links').removeClass('active');
                $('.hamburger').removeClass('toggle');
                
                $('.nav-links li').each(function() {
                    $(this).css('animation', '');
                });
            }
            
            const targetId = $(this).attr('href');
            const targetElement = $(targetId);
            
            if (targetElement.length) {
                $('html, body').animate({
                    scrollTop: targetElement.offset().top - 80
                }, 'smooth');
            }
        });

        // Modal Functionality
        const reserveBtn = $('#reserveBtn');
        const reservationModal = $('#reservationModal');
        const closeModalBtn = $('.close-modal');
        const suiteButtons = $('.btn-more');

        if (reserveBtn.length && reservationModal.length) {
            reserveBtn.click(function() {
                reservationModal.css('display', 'flex');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        }

        if (closeModalBtn.length && reservationModal.length) {
            closeModalBtn.click(function() {
                reservationModal.css('display', 'none');
                document.body.style.overflow = ''; // Enable scrolling
            });
        }

        // Close modal when clicking outside
        $(window).click(function(e) {
            if (e.target === reservationModal[0]) {
                reservationModal.css('display', 'none');
                document.body.style.overflow = ''; // Enable scrolling
            }
        });

        // Suite buttons open modal with pre-selected suite
        suiteButtons.click(function() {
            const suiteType = $(this).data('suite');
            const suiteSelect = $('#suite');
            
            if (suiteSelect.length) {
                // Set the suite type in the form
                suiteSelect.find('option').each(function() {
                    if ($(this).val() === suiteType) {
                        suiteSelect.val(suiteType);
                        return false;
                    }
                });
            }
            
            reservationModal.css('display', 'flex');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        // Add floating reserve button functionality
        const floatingReserveBtn = $('#floatingReserveBtn');
        
        if (floatingReserveBtn.length) {
            floatingReserveBtn.click(function() {
                $('#reservationModal').css('display', 'flex');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        }
        
        // Form submission handling
        const reservationForm = $('#reservationForm');
        
        if (reservationForm.length) {
            reservationForm.submit(function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(reservationForm[0]);
                let formValues = {};
                
                for (let [key, value] of formData.entries()) {
                    formValues[key] = value;
                }
                
                // In a real application, you would send this data to a server
                console.log('Form submitted:', formValues);
                
                // Show success message
                alert('Reserva enviada com sucesso! Em breve entraremos em contato.');
                
                // Close modal and reset form
                reservationModal.css('display', 'none');
                document.body.style.overflow = '';
                reservationForm[0].reset();
            });
        }

        // Date input validation - make sure checkout date is after checkin date
        const checkinInput = $('#checkin');
        const checkoutInput = $('#checkout');
        
        if (checkinInput.length && checkoutInput.length) {
            // Set min date to today for checkin
            const today = new Date();
            const todayFormatted = today.toISOString().split('T')[0];
            checkinInput.attr('min', todayFormatted);
            
            checkinInput.change(function() {
                // Set min date for checkout to be the check-in date
                checkoutInput.attr('min', checkinInput.val());
                
                // If checkout date is before new checkin date, reset it
                if (checkoutInput.val() && checkoutInput.val() < checkinInput.val()) {
                    checkoutInput.val('');
                }
            });
        }

        // Dark Mode Toggle
        const toggleSwitch = $('.theme-switch input[type="checkbox"]');
        const currentTheme = localStorage.getItem('theme');

        // Check for saved theme preference
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            
            if (currentTheme === 'dark') {
                toggleSwitch.prop('checked', true);
            }
        }

        // Handle toggle switch change
        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        }

        toggleSwitch.change(switchTheme);

        function initAnimations() {
            const suiteCards = $('.suite-card');
            const serviceCards = $('.service-card');
            
            function checkScroll() {
                const scrollPosition = $(window).scrollTop();
                const windowHeight = $(window).height();
                
                suiteCards.each(function() {
                    const cardTop = $(this).offset().top;
                    if (scrollPosition + windowHeight > cardTop + 100) {
                        $(this).addClass('animated');
                    }
                });
                
                serviceCards.each(function() {
                    const cardTop = $(this).offset().top;
                    if (scrollPosition + windowHeight > cardTop + 100) {
                        $(this).addClass('animated');
                    }
                });
            }
            
            // Initial check
            checkScroll();
            
            // On scroll
            $(window).scroll(checkScroll);
        }

        // Initialize animations
        initAnimations();
    });
});

// Add CSS class for hamburger toggle and dark mode improvements
const hamburgerStyle = document.createElement('style');
hamburgerStyle.innerHTML = `
    .hamburger.toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    .hamburger.toggle .line2 {
        opacity: 0;
    }
    .hamburger.toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    .suite-card.animated .room {
        transform: rotateX(15deg) rotateY(45deg);
    }
    [data-theme="dark"] .modal-content {
        border: 1px solid #333;
    }
    [data-theme="dark"] .suite-description {
        background-color: rgba(58, 107, 53, 0.3);
    }
    [data-theme="dark"] .room-detail-section h3,
    [data-theme="dark"] .room-detail-header-content h2,
    [data-theme="dark"] .suite-description h3 {
        color: #4a8b44;
    }
    [data-theme="dark"] .price {
        color: #f5d076 !important;
    }
`;
document.head.appendChild(hamburgerStyle);