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
      falloff        :  0.4  ,
      focus          :  0.9  ,
      dof            :  null  ,
      resize         :  false  ,
    }, options);

    return this.each(function(){
	var $that = document.getElementById(this.id),
		$this = $(this),
		layers = $this.find('ul li'),
		numlayers = layers.length,
		layerids = [],
		timer,
		xpos,
		ypos,
		offset,
		width,
		height;

	width = $that.offsetWidth;
	height = $that.offsetHeight

	
	// Fetch all ids from layers and apply (optional) DoF
	for (var index=0;index<numlayers; index++) {  
	
		layerids[index] = layers[index].id;
	
		if (settings.dof!=null){
			var blur = 'blur(' + Math.abs(-settings.dof+index*1)*1.2 + 'px)';
			layers[index].setAttribute("style", '-webkit-filter:'+ blur);
		}
	
	}
		// Mouseenter and Mouseleave functions wrapped in jQuery's hover
		$this.hover(
		  function () {
		  
			timer = setInterval(function(){
				offset = [$that.style['left'],$that.style['top']];
				//If resize is active, update dimensions (There might be a better way to do this)		
				if(settings.resize){
					width = $that.offsetWidth;
					height = $that.offsetHeight
				}
				
				//Get mouse position once (saves an event handler, but I'm not sure if this is the best way to do this)
				//Calculate new position and tranlate the layers
			   $(document).one("mousemove", function (e) {	   
					xpos = (((e.pageX - offset[0])/width)-0.5)*settings.speedX;
					ypos = (((e.pageY - offset[1])/height)-0.5)*settings.speedY; 
					translate(xpos,ypos);
				});

				},settings.interval);
		  },
		  function () {
		  //When mouse leaves, stop updating
			clearInterval(timer);
		  }
		);
				
	function translate (newx,newy){
			for (var index=0;index<numlayers; index++) {  
				   var attrprefix = 'translate3d(',
					   x = -newx*(-settings.focus+(index+1)*settings.falloff),
					   y = -newy*((index+1)*settings.falloff);

				   layers[index].style.webkitTransform = attrprefix + x + 'px,' + y + 'px,0)';
				   layers[index].style.MozTransform = attrprefix + x + 'px,' + y + 'px,0)';
				   layers[index].style.transform = attrprefix + x + 'px,' + y + 'px,0)';
		};	
	}
	
	
    });
  };

})( jQuery );