// Character data with photos
const characters = [
	{
		id: 1,
		name: "Zelko",
		role: "El Mentor y Guía",
		birthDate: "23 de Julio, 2004",
		initial: "Z",
		photo:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zelko.jpg-ZOvTsziAw2638B79AK6m0R9G953MGg.jpeg", // Zelko.jpg
		description:
			"El mayor del grupo y antiguo líder, Zelko es esa figura paternal que todos necesitamos. Con su experiencia y sabiduría, ha sido el pilar fundamental del coro durante años. Su personalidad tranquila y reflexiva lo convierte en el consejero perfecto para cualquier situación. Siempre dispuesto a escuchar y ofrecer su apoyo, Zelko tiene esa habilidad especial de ayudar a cada miembro a encontrar su propio camino y desarrollar su potencial.",
		quote:
			"El verdadero poder no está en mandar, sino en saber cuándo dar el paso al costado.",
		isLeader: false,
	},
	{
		id: 2,
		name: "Godoy",
		role: "El Alma Alegre",
		birthDate: "13 de Septiembre, 2006",
		initial: "G",
		photo:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Godoy.jpg-E76GAHkHbB9zkrWU8V3k6dnKtMEezL.jpeg", // Godoy.jpg
		description:
			"Hermano menor de Zelko, Godoy es pura energía positiva. Su carisma natural y su increíble sentido del humor lo convierten en el corazón alegre del grupo. Tiene esa capacidad mágica de transformar cualquier momento difícil en una oportunidad para sonreír. Su personalidad extrovertida y su habilidad para conectar con todos hacen que sea imposible estar triste cuando él está cerca.",
		quote: "La risa es el idioma universal que une corazones y sana almas.",
		isLeader: false,
	},
	{
		id: 3,
		name: "Bambe",
		role: "El Espíritu Aventurero",
		birthDate: "6 de Febrero, 2008",
		initial: "B",
		photo:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambe.jpg-xGDqH5bYPI5cmU5dEId40COwaObInS.jpeg", // Bambe.jpg
		description:
			"El más cercano a Zelko, Bambe es sinónimo de diversión y aventura. Su personalidad espontánea y su creatividad para las 'loqueras' hacen que cada día sea una nueva aventura. Es uno de los tigueres más bacanos del coro, siempre listo para probar algo nuevo o para sacar al grupo de la rutina con sus ideas innovadoras.",
		quote: "Donde hay Bambe, hay aventura. Donde hay aventura, hay vida.",
		isLeader: false,
	},
	{
		id: 4,
		name: "Braylin",
		role: "El Compañero Leal",
		birthDate: "14 de Mayo, 2008",
		initial: "BR",
		photo:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Braylin.jpg-WFX8rnAn7QWoEoL5uegbr6HwVbvBBP.jpeg", // Braylin.jpg
		description:
			"Con una personalidad 'pila de corita' y súper bacano, Braylin es ese amigo en el que siempre puedes confiar. Su cercanía especial con Bambe crea una dupla dinámica dentro del grupo. Es una persona genuina y auténtica, que aporta estabilidad y confianza al coro. Su naturaleza colaborativa y su actitud positiva lo convierten en un elemento clave para la armonía del grupo.",
		quote: "La lealtad no se negocia, se vive y se demuestra cada día.",
		isLeader: false,
	},
	{
		id: 5,
		name: "Bryan",
		role: "La Conexión Internacional",
		birthDate: "6 de Enero, 2010",
		initial: "BY",
		photo:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bryan.jpg-dMU7Cnbmhty5dRsTDsVR4ejn3cmcqh.jpeg", // Bryan.jpg
		description:
			"Viviendo en Cranston, Rhode Island, Bryan representa la dimensión internacional del coro. Su experiencia bicultural aporta una perspectiva única al grupo, enriqueciendo las conversaciones y ampliando horizontes. A pesar de la distancia física, su conexión emocional con el coro permanece fuerte, demostrando que la amistad verdadera trasciende fronteras.",
		quote: "Las distancias se miden en kilómetros, la hermandad en corazones.",
		isLeader: false,
	},
	{
		id: 6,
		name: "Disney",
		role: "El Corazón Solidario",
		birthDate: "25 de Julio, 2008",
		initial: "D",
		photo:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disney.jpg-On4jiztn1k40cVwheJdtoV1z5N0KIi.jpeg", // Disney.jpg
		description:
			"Disney es esa persona especial que siempre está ahí para los demás, sin importar las circunstancias. Su naturaleza altruista y su capacidad de empatía la convierten en un pilar emocional dentro del grupo. Su amistad cercana con Karelys demuestra su habilidad para crear vínculos profundos y duraderos.",
		quote:
			"El verdadero poder está en levantar a otros cuando más lo necesitan.",
		isLeader: false,
	},
	{
		id: 7,
		name: "Karelys",
		role: "La Guerrera Incansable",
		birthDate: "28 de Octubre, 2009",
		initial: "K",
		photo:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/La%20hermosa%20sonrisa%20de%20Karelys%202.jpg-rAMviOZUDZlD0w2dHq3GLpcBhiwccH.jpeg", // Karelys.jpg
		description:
			"Venezolana de corazón pero dominicana de adopción, Karelys representa la fortaleza hecha persona. Su increíble resistencia mental y su capacidad de adaptación son verdaderamente admirables. A pesar de los desafíos que ha enfrentado, siempre encuentra tiempo y energía para preocuparse por el bienestar de los demás.",
		quote:
			"Las raíces pueden cambiar de tierra, pero el alma permanece inquebrantable.",
		isLeader: false,
	},
	{
		id: 8,
		name: "Aisha",
		role: "La Sanadora de Almas",
		birthDate: "18 de Mayo, 2008",
		initial: "A",
		photo:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aisha.jpg-2q2eDMxy89W2tRHIuGZlYWh1KEsS8D.jpeg", // Aisha.jpg
		description:
			"Con una personalidad reservada pero profundamente empática, Aisha aporta una dimensión psicológica única al grupo. Su cercanía especial con Karelys muestra su capacidad para formar conexiones significativas. Metida de lleno en su papel de psicóloga, Aisha combina su conocimiento profesional con una genuina preocupación por el bienestar mental de todos.",
		quote:
			"Las palabras más poderosas a veces son las que nunca se pronuncian, sino las que se sienten.",
		isLeader: false,
	},
	{
		id: 9,
		name: "Jeico",
		role: "El Nuevo Líder Visionario",
		birthDate: "3 de Diciembre, 2006",
		initial: "J",
		photo:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeico.jpg-AiUtZ8TKOoHXL5aiBi6ipOKEwBM8Lr.jpeg", // Jeico.jpg
		description:
			"El nuevo jefe del grupo, Jeico aporta una perspectiva fresca y ambiciosa al liderazgo. Su personalidad tranquila pero determinada, combinada con ideas muy claras, lo convierte en el líder ideal para esta nueva etapa. Como observador nato, tiene la habilidad de analizar situaciones y tomar decisiones estratégicas que beneficien a todo el grupo.",
		quote:
			"El futuro pertenece a quienes se atreven a soñar más alto que las montañas.",
		isLeader: true,
	},
];

// Global variables
let currentIndex = 0;
let isAnimating = false;

// DOM elements
const characterName = document.getElementById("characterName");
const characterRole = document.getElementById("characterRole");
const characterBirthDate = document.getElementById("characterBirthDate");
const characterDescription = document.getElementById("characterDescription");
const characterQuote = document.getElementById("characterQuote");
const characterPhoto = document.getElementById("characterPhoto");
const characterInitial = document.getElementById("characterInitial");
const leaderBadge = document.getElementById("leaderBadge");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicators = document.getElementById("indicators");
const characterGrid = document.getElementById("characterGrid");
const currentSlide = document.getElementById("currentSlide");
const totalSlides = document.getElementById("totalSlides");

// Initialize the slider
function init() {
	createParticles();
	createIndicators();
	createCharacterGrid();
	updateSlide();
	setupEventListeners();

	// Set total slides
	totalSlides.textContent = characters.length;
}

// Create floating particles
function createParticles() {
	const particlesContainer = document.getElementById("particles");
	const particleCount = 50;

	for (let i = 0; i < particleCount; i++) {
		const particle = document.createElement("div");
		particle.className = "particle";
		particle.style.left = Math.random() * 100 + "%";
		particle.style.animationDelay = Math.random() * 6 + "s";
		particle.style.animationDuration = Math.random() * 3 + 3 + "s";
		particlesContainer.appendChild(particle);
	}
}

// Create slide indicators
function createIndicators() {
	indicators.innerHTML = "";
	characters.forEach((_, index) => {
		const indicator = document.createElement("div");
		indicator.className = "indicator";
		if (index === currentIndex) indicator.classList.add("active");
		indicator.addEventListener("click", () => goToSlide(index));
		indicators.appendChild(indicator);
	});
}

// Create character grid
function createCharacterGrid() {
	characterGrid.innerHTML = "";
	characters.forEach((character, index) => {
		const gridItem = document.createElement("div");
		gridItem.className = "grid-character";
		if (index === currentIndex) gridItem.classList.add("active");

		gridItem.innerHTML = `
            <div class="grid-avatar ${index === currentIndex ? "active" : ""}">
                <img src="${character.photo}" alt="${
			character.name
		}" class="grid-character-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <span class="grid-character-initial" style="display: none;">${
									character.initial
								}</span>
                ${
									character.isLeader
										? '<span class="grid-leader-crown">👑</span>'
										: ""
								}
            </div>
            <p class="grid-character-name">${character.name}</p>
        `;

		gridItem.addEventListener("click", () => goToSlide(index));
		characterGrid.appendChild(gridItem);
	});
}

// Update slide content
function updateSlide() {
	if (isAnimating) return;

	const character = characters[currentIndex];

	// Update text content with animation
	characterName.style.opacity = "0";
	characterRole.style.opacity = "0";
	characterBirthDate.style.opacity = "0";
	characterDescription.style.opacity = "0";

	setTimeout(() => {
		characterName.textContent = character.name;
		characterRole.textContent = character.role;
		characterBirthDate.textContent = character.birthDate;
		characterDescription.textContent = character.description;

		// Animate text back in
		characterName.style.opacity = "1";
		characterRole.style.opacity = "1";
		characterBirthDate.style.opacity = "1";
		characterDescription.style.opacity = "1";
	}, 200);

	// Update photo with better error handling
	characterPhoto.style.display = "block";
	characterInitial.style.display = "none";

	characterPhoto.onload = function () {
		this.style.opacity = "1";
		characterInitial.style.display = "none";
	};

	characterPhoto.onerror = function () {
		this.style.display = "none";
		characterInitial.style.display = "flex";
		characterInitial.textContent = character.initial;
	};

	characterPhoto.src = character.photo;
	characterPhoto.alt = character.name;

	// Update quote
	if (character.quote) {
		characterQuote.textContent = character.quote;
		characterQuote.classList.add("show");
	} else {
		characterQuote.classList.remove("show");
	}

	// Update leader badge
	if (character.isLeader) {
		leaderBadge.classList.add("show");
	} else {
		leaderBadge.classList.remove("show");
	}

	// Update indicators
	document.querySelectorAll(".indicator").forEach((indicator, index) => {
		indicator.classList.toggle("active", index === currentIndex);
	});

	// Update character grid
	document.querySelectorAll(".grid-character").forEach((gridItem, index) => {
		const avatar = gridItem.querySelector(".grid-avatar");
		avatar.classList.toggle("active", index === currentIndex);
	});

	// Update counter
	currentSlide.textContent = currentIndex + 1;
}

// Go to specific slide
function goToSlide(index) {
	if (isAnimating || index === currentIndex) return;

	isAnimating = true;
	currentIndex = index;

	// Add slide transition effect
	const sliderCard = document.querySelector(".slider-card");
	sliderCard.style.transform = "scale(0.95)";
	sliderCard.style.opacity = "0.7";

	setTimeout(() => {
		updateSlide();
		sliderCard.style.transform = "scale(1)";
		sliderCard.style.opacity = "1";
		isAnimating = false;
	}, 300);
}

// Next slide
function nextSlide() {
	const nextIndex = (currentIndex + 1) % characters.length;
	goToSlide(nextIndex);
}

// Previous slide
function prevSlide() {
	const prevIndex = (currentIndex - 1 + characters.length) % characters.length;
	goToSlide(prevIndex);
}

// Setup event listeners
function setupEventListeners() {
	prevBtn.addEventListener("click", prevSlide);
	nextBtn.addEventListener("click", nextSlide);

	// Keyboard navigation
	document.addEventListener("keydown", e => {
		if (e.key === "ArrowLeft") prevSlide();
		if (e.key === "ArrowRight") nextSlide();
	});

	// Touch/swipe support
	let startX = 0;
	let endX = 0;

	document.addEventListener("touchstart", e => {
		startX = e.touches[0].clientX;
	});

	document.addEventListener("touchend", e => {
		endX = e.changedTouches[0].clientX;
		handleSwipe();
	});

	function handleSwipe() {
		const threshold = 50;
		const diff = startX - endX;

		if (Math.abs(diff) > threshold) {
			if (diff > 0) {
				nextSlide();
			} else {
				prevSlide();
			}
		}
	}

	// Auto-play (optional - uncomment to enable)
	// setInterval(nextSlide, 5000);
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
