window.onload = function() {
 
  // Run the animation on click
  $('.button').on('click', function(){
    animate();
  });

  function animate() {
    $('.logo')
      .velocity({ opacity: 0 }, 0)
      .velocity({ opacity: 1 }, {duration: 1000, delay: 10});
    
    $('.path')
      .velocity({ 'stroke-dashoffset': 400 }, 0)
      .velocity({ 'stroke-dashoffset': 0 }, { duration: 650, delay: 10 });
  }
  
  animate();
};