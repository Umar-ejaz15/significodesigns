var Teamadata = [
  { id: "01", name: "Dr. RickMcCkartney", Positions: "ceo" },
  { id: "02", name: "Crish Koha", Positions: "ceo" },
  { id: "03", name: "Caroline Neito", Positions: "Chief Product Officer" },
  { id: "04", name: "Victor Albetos", Positions: "CTO" },
  { id: "05", name: "Dr. Jana Schimidt", Positions: "Chief Innovation Officer" }
]
function Teamdata() {
  var cutler = "";
  Teamadata.forEach((obj) => {
    cutler += `
          <div class="team flex relative justify-between p-8 border-b-2 border-black">
              <div class="left text-3xl font-medium flex gap-7">
                <h1 class="opacity-[.7]" >${obj.id}</h1>
                <h1 class="font-mono" >${obj.name}</h1>
              </div>
              <div class="right">
                <h1 class="text-2xl " >${obj.Positions}</h1>
              </div>
              <div class="cardimg size-14 rounded-full opacity-0 bg-red-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">   </div>
           </div>
     `
  })
  document.querySelector(".teamsMembers").innerHTML = cutler


}
var Cardcontainer = [
  {
    heading: "Driven by Purpose", paragraph: `We believe technology can
      dramatically improve the experience of
      managing health, and when crafted
      with empathy, intention, and expertise,
      impact lives at scale.`, image: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.2" d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z"
        fill="currentColor"></path>
      <path d="M18 10H46L60 26L32 56L4 26L18 10Z" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z" stroke="currentColor"
        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M4 26H60" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round"></path>
    </svg>` },
  {
    heading: "Custom Products", paragraph: `We build mobile and web-based apps,
      platforms, and infrastructure fitted to
      your needs. We have an open solutions
      framework, so we work to fit your
      business, not the other way around.`, image: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.2" d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z"
    fill="currentColor"></path>
  <path d="M18 10H46L60 26L32 56L4 26L18 10Z" stroke="currentColor" stroke-width="1.5"
    stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M4 26H60" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
    stroke-linejoin="round"></path>
  </svg>` },
  {
    heading: "Partnerships", paragraph: `We work with payers, providers, and
      pharma to help internal teams through
      ground-up builds, product
      optimizations, and streamlining
      data/analytics.`, image: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.2" d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z"
    fill="currentColor"></path>
  <path d="M18 10H46L60 26L32 56L4 26L18 10Z" stroke="currentColor" stroke-width="1.5"
    stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M4 26H60" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
    stroke-linejoin="round"></path>
  </svg>` },
  {
    heading: "Security & Compliance", paragraph: `Not just technology experts. Health
      experts. We are able to navigate both
      stringent regulatory environments and
      the complexities of technology and
      data.`, image: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.2" d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z"
    fill="currentColor"></path>
  <path d="M18 10H46L60 26L32 56L4 26L18 10Z" stroke="currentColor" stroke-width="1.5"
    stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M4 26H60" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
    stroke-linejoin="round"></path>
  </svg>` },

]
function CardData() {
  var cutler = ""
  Cardcontainer.forEach((obj) => {
    cutler +=
      `<div class="card mt-9 flex gap-8 rounded-2xl bg-white  w-2/3 p-7 border-2 border-black  justify-center items-center relative">
                 <div class="left w-[25rem]">
                    <h1 class=" font-bold text-3xl mb-3 "> ${obj.heading} </h1>
                     <p class="text-xl"> ${obj.paragraph} </p>
                 </div>
   <div class="right w-24 h-24">
     ${obj.image}
  </div>
    
   </div>`
  })
  document.querySelector(".cardConatiner").innerHTML = cutler


}
function CardsAnimation() {
  var cards = document.querySelectorAll(".card");
  for (let card of cards) {
    card.addEventListener("mouseenter", () => {
      card.style.backgroundColor = " #252525";
      card.style.color = "white"
      card.style.transform = "scale(1.1)"
    });
    card.addEventListener("mouseleave", () => {
      card.style.backgroundColor = " white ";
      card.style.color = "#252525"
      card.style.transform = "scale(1.1)"
      card.style.transform = "scale(1)"
    });
  }
}


function HomePageAnimation() {

  var tl = gsap.timeline(
    {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 3,
        pin: true,
        // markers: true
      }
    }
  )
    .to(".heroVideo", {
      clipPath: "circle(0% at 50% 50%)",
      ease: "power2",
      duration: 2,

    }, 'a')
    .to(".marqueeContainer", {
      scale: 1,
      ease: "power2",
      duration: 2,
    }, 'a')

    .to(".lgt", {
      x: 150,
      duration: 2,
      ease: "power2"
    }, 'b')
    .to(".rgt", {
      x: -150,
      duration: 2,
      ease: "power2",
    }, 'b')
}
function RealPageAnimetion() {
  gsap.to(".slides", {
    x: "-200%",
    scrollTrigger: {
      trigger: '.Real',
      start: 'top top',
      end: 'bottom top',
      scrub: 2,
      pin: true,
      // markers: true
    }
  })

}

function ScrollBgChange() {

  const sections = document.querySelectorAll('.section');

  sections.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 50%",
      end: "bottom 50%",
      onToggle: self => {
        const isInViewport = self.isActive;

        if (isInViewport) {
          // Remove all theme classes
          document.body.classList.remove('BlackTheme', 'cyanTheme', 'salmonTheme', 'whiteTheme');

          // Add the corresponding theme class
          switch (index) {
            case 0:
              document.body.classList.add('BlackTheme');
              break;
            case 1:
              document.body.classList.add('cyanTheme');
              break;
            case 2:
              document.body.classList.add('salmonTheme');
              break;
            case 3:
              document.body.classList.add('whiteTheme');
              break;
          }
        }
      },
    });

  });


}
Teamdata();
CardData();
CardsAnimation();
HomePageAnimation();
RealPageAnimetion();
ScrollBgChange();


