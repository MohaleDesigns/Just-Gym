const sr = ScrollReveal ({
  distance: '45px',
  duration: '2700',
  reset: true
})

sr.reveal(
  '.content', 
  {delay:200, origin:'left'})

sr.reveal(
  '.about-section, .programs-section, .physiotherapy-section, .why-choose-us, .trainers-section, .testimonials-section, .contact-section, footer',
   {delay:200, origin:'bottom'})