/* CSSparallax | (c)2013 - Moritz Meisselbach | MIT License */
;(function( $ ){
	// It might be useful to do this in the future. Disabled for now
	
   // // parallax public methods
  // var methods = {
    // setpos: function(name, callback) {

    // },
    // setfocus: function(name, callback) {

    // }
  // };

  // $.parallax = function( method ) {

    // if ( methods[method] ) {
      // return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    // } else if ( typeof method === 'function' ||  typeof method === 'string'  || ! method ) {
      // return methods.toggle.apply( this, arguments );
    // } else {
      // $.error( 'Method ' +  method + ' does not exist on jQuery.parallax' );
    // }

  // };

  $.fn.parallax = function( options ) {

    var settings = $.extend( {
      interval       : 33,    // Accepts standard jQuery effects speeds (i.e. fast, normal or milliseconds)
      speedX         : 400,   
      speedY         : 100,    
      falloff        :  0.4 ,
      focus          :  0.9 ,
      // dof            :  null  ,       //Disabled....who needs webkit-only features?
      resize         :  false,
    }, options);

    return this.each(function(){
	var $this = $(this),
		that = $this[0],
		layers = $this.find('ul li'),
		numlayers = layers.length,
		layerids = [],
		timer,
		pos = [,],
		offset,
		div  = [that.offsetWidth,that.offsetHeight]
		mouse  = [,];


	
	// Fetch all ids from layers and apply (optional) DoF
	for (var index=0;index<numlayers; index++) {  
	
		layerids[index] = layers[index].id;
	
		//Uncomment the following (and the setting above) if you want depth of field
	
		// if (settings.dof!=null){
			// var blur = 'blur(' + Math.abs(-settings.dof+index*1)*1.2 + 'px)';
			// layers[index].setAttribute("style", '-webkit-filter:'+ blur);
		// }
	
	}
	// Mouseenter and Mouseleave functions wrapped in jQuery's hover
	$this.hover(
	  function () {
			timer = setInterval(function(){
			offset = [that.style['left'],that.style['top']];
			//If resize is active, update dimensions (There might be a better way to do this)		
			if(settings.resize){
				div = [that.offsetWidth,that.offsetHeight];
			}

			//Calculate new position and translate the layers
			pos = [(((mouse[0] - offset[0])/div[0])-0.5)*settings.speedX,(((mouse[1] - offset[1])/div[1])-0.5)*settings.speedY];
			translate(pos);


			},settings.interval);
	  },
	  function () {
	  //When mouse leaves, stop updating
		clearInterval(timer);
	  }
	);
				
	function translate (pos){
			for (var index=0;index<numlayers; index++) {  
				   var x = -pos[0]*(-settings.focus+(index+1)*settings.falloff),
					   y = -pos[1]*((index+1)*settings.falloff),
					   attr = 'translate3d(' + x + 'px,' + y + 'px,0)';

				   layers[index].style.webkitTransform=
				   layers[index].style.MozTransform=
				   layers[index].style.transform = attr;
			};	
	}
	$(document).mousemove(function(e){
      mouse = [e.pageX,e.pageY];
    }); 
	
    });
  };

})( jQuery );