/*window.onload = function() {
  Particles.init({
   // normal options
	  selector: '.background',
	   maxParticles:500,
	   speed:.9,
	   color:#247716,
	   connectParticles:true
	   
   


   // options for breakpoints
  

 });
};*/


      window.onload = function() {
        Particles.init({
          selector: '.background',
          color: '#aadca1',
          maxParticles: 130,
          connectParticles: true,
          responsive: [
            {
              breakpoint: 768,
               options: {
                maxParticles: 80
              }
            }, {
              breakpoint: 375,
              options: {
                maxParticles: 50
              }
            }
          ]
        });
      };

 