const toggleOpen = document.getElementById('toggle-open');
const toggleClose = document.getElementById('toggle-close');
const navBar = document.getElementById('navbar');
const homePage = document.getElementById('home');
const destinationPage = document.getElementById('destination')
const crewPage = document.getElementById('crew')
const techPage = document.getElementById('technology')
const planetImage = document.getElementById('planet-image');
const moon = document.getElementById('moon');
const mars = document.getElementById('mars');
const europa = document.getElementById('europa');
const titan = document.getElementById('titan');
const planetName = document.getElementById('planet-name');
const planetDetails = document.getElementById('planet-details');
const planetDistance = document.getElementById('planet-distance');
const travelTime = document.getElementById('travel-time');
//Crew carousel DOM
const sliderOne = document.getElementById('slider1');
const sliderTwo = document.getElementById('slider2');
const sliderThree = document.getElementById('slider3');
const sliderFour = document.getElementById('slider4');
const memberPosition = document.getElementById('position');
const memberName = document.getElementById('name');
const memberInfo = document.getElementById('member-info');
const memberPhoto = document.getElementById('member-photo');
//Tech Carousel DOM
const techSlider1 = document.getElementById('tech-slider1');
const techSlider2 = document.getElementById('tech-slider2');
const techSlider3 = document.getElementById('tech-slider3');
const sliderText1 = document.getElementById('slider-text1');
const sliderText2 = document.getElementById('slider-text2');
const sliderText3 = document.getElementById('slider-text3');
const techName = document.getElementById('tech-name');
const techInfo = document.getElementById('tech-info');
const techImage = document.getElementsByClassName('tech-image')
//HomePage Circle DOM
const indexBody = document.getElementById('index-body');
const exploreCircle = document.getElementById('explore-circle');

toggleOpen.addEventListener('click', openNavBar);
toggleClose.addEventListener('click', closeNavBar);
//slideRight.addEventListener('click', forwardSlide);
//slideLeft.addEventListener('click', backwardSlide)

function openNavBar() {
    toggleClose.style.setProperty('display', 'block');
    toggleOpen.style.setProperty('display', 'none');
    navBar.style.setProperty('display', 'block');
}

function closeNavBar() {
    toggleClose.style.setProperty('display', 'none');
    toggleOpen.style.setProperty('display', 'block');
    navBar.style.setProperty('display', 'none');
}


// setting up Destination Nav-links

moon.addEventListener('click', function() {
    console.log('i am moon')
    planetImage.src = 'assets/destination/image-moon.png'
    planetName.textContent = 'MOON'
    planetDetails.textContent = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
    planetDistance.textContent = '384,400 KM'
    travelTime.textContent = '3 DAYS'
    moon.style.borderBottom = '3px solid white'
    mars.style.borderBottom = 'none'
    europa.style.borderBottom = 'none'
    titan.style.borderBottom = 'none'
})

mars.addEventListener('click', function() {
    console.log('i am Mars')
    planetImage.src = 'assets/destination/image-mars.png'
    planetName.textContent = 'MARS'
    planetDetails.textContent = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
    planetDistance.textContent = '225 MIL. KM'
    travelTime.textContent = '9 MONTHS'
    mars.style.borderBottom = '3px solid white'
    moon.style.borderBottom = 'none'
    europa.style.borderBottom = 'none'
    titan.style.borderBottom = 'none'
})

europa.addEventListener('click', function() {
    planetImage.src = 'assets/destination/image-europa.png'
    planetName.textContent = 'EUROPA'
    planetDetails.textContent = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
    planetDistance.textContent = '628 MIL. KM'
    travelTime.textContent = '3 YEARS'
    europa.style.borderBottom = '3px solid white'
    moon.style.borderBottom = 'none'
    mars.style.borderBottom = 'none'
    titan.style.borderBottom = 'none'
})

titan.addEventListener('click', function() {
    planetImage.src = 'assets/destination/image-titan.png'
    planetName.textContent = 'TITAN'
    planetDetails.textContent = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
    planetDistance.textContent = '1.6 BIL. KM'
    travelTime.textContent = '7 YEARS'
    titan.style.borderBottom = '3px solid white'
    moon.style.borderBottom = 'none'
    mars.style.borderBottom = 'none'
    europa.style.borderBottom = 'none'
})

// setting up Crew Courosel

function slider1() {
    sliderOne.style.background = 'white';
    sliderTwo.style.background = '#888';
    sliderThree.style.background = '#888';
    sliderFour.style.background = '#888';
    memberPosition.textContent = 'COMMANDER';
    memberName.textContent = 'DOUGLAS HURLEY';
    memberInfo.textContent = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    memberPhoto.src = 'assets/crew/image-douglas-hurley.png'
}

function slider2() {
    sliderTwo.style.background = 'white';
    sliderOne.style.background = '#888';
    sliderThree.style.background = '#888';
    sliderFour.style.background = '#888';
    memberPosition.textContent = 'MISSION SPECIALIST';
    memberName.textContent = 'MARK SHUTTLEWORTH'
    memberInfo.textContent = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
    memberPhoto.src = 'assets/crew/image-mark-shuttleworth.png'
}
function slider3() {
    sliderThree.style.background = 'white';
    sliderOne.style.background = '#888';
    sliderTwo.style.background = '#888';
    sliderFour.style.background = '#888';
    memberPosition.textContent = 'PILOT';
    memberName.textContent = 'VICTOR GLOVER';
    memberInfo.textContent = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '
    memberPhoto.src = 'assets/crew/image-victor-glover.png'
}
function slider4() {
    console.log('slider 2')
    sliderFour.style.background = 'white';
    sliderOne.style.background = '#888';
    sliderTwo.style.background = '#888';
    sliderThree.style.background = '#888';
    memberPosition.textContent = 'FLIGHT ENGINEER'
    memberName.textContent = 'ANOUSHEH ANSARI'
    memberInfo.textContent = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
    memberPhoto.src = 'assets/crew/image-anousheh-ansari.png';

}

//setting up Tech Carousel

function slideTech1() {
    techSlider1.style.background = 'white';
    sliderText1.style.color = 'black'
    techSlider2.style.background = 'none'
    sliderText2.style.color = 'white'
    techSlider3.style.background = 'none'
    sliderText3.style.color = 'white'
    techName.textContent = 'LAUNCH VEHICLE'
    techInfo.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"

    for (i = 0; i < techImage.length; i++) {
        techImage[0].src = 'assets/technology/image-launch-vehicle-portrait.jpg'
        techImage[1].src = 'assets/technology/image-launch-vehicle-landscape.jpg'
    }
}

function slideTech2() {
    techSlider2.style.background = 'white';
    sliderText2.style.color = 'black'
    techSlider1.style.background = 'none'
    sliderText1.style.color = 'white'
    techSlider3.style.background = 'none'
    sliderText3.style.color = 'white'
    techName.textContent = 'SPACEPORT'
    techInfo.textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."

    for (i = 0; i < techImage.length; i++) {
        techImage[0].src = 'assets/technology/image-spaceport-portrait.jpg'
        techImage[1].src = 'assets/technology/image-spaceport-landscape.jpg'
    }
}

function slideTech3() {
    techSlider3.style.background = 'white';
    sliderText3.style.color = 'black'
    techSlider1.style.background = 'none'
    sliderText1.style.color = 'white'
    techSlider2.style.background = 'none'
    sliderText2.style.color = 'white'
    techName.textContent = 'SPACE CAPSULE'
    techInfo.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."

    for (i = 0; i < techImage.length; i++) {
        techImage[0].src = 'assets/technology/image-space-capsule-portrait.jpg'
        techImage[1].src = 'assets/technology/image-space-capsule-landscape.jpg'
    }
}

//Hover Effect for HomePage Circle

function explore() {
    var y = window.matchMedia("(min-width: 1000px)")

    if (y.matches) {
        console.log('Im a cirlce');
        indexBody.style.setProperty('background', 'url(assets/home/background-home-desktop.jpg)')
        indexBody.style.backgroundRepeat = 'no-repeat'
        indexBody.style.backgroundSize = 'cover'
    }

}

function exploreOut() {
    var y = window.matchMedia("(min-width: 1000px)")

    if (y.matches) {
        indexBody.style.setProperty('background', '#0B0D17')
    }
}
