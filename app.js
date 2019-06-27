$('.myImg').ripples({
  resolution: 512,
  dropRadius: 20, //px
  perturbance: 0.54,
  imageUrl:null
});

// show the effect
$('.myImg').ripples('show');

// hide the effect
$('.myImg').ripples('hide');

// destroy the plugin
$('.myImg').ripples('destroy');

// play the simulation's state
$('.myImg').ripples('play');

// pause the simulation's state
$('.myImg').ripples('pause');

// add a drop at the element's relative coordinates (x, y).
// radius controls the drop's size and strength the amplitude of the resulting ripple.
// $('.myImg').ripples('drop', x, y, radius, strength);
