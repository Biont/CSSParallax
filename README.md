# jQuery CSSParallax

This is a lightweight jQuery plugin that creates a parallax scrolling effect using CSS 3D Transforms.

I was inspired by [JSParallax] (https://github.com/stephband/jparallax), but didn't like the fact that it did not 
use CSS3 features that should run a lot faster on modern browsers, so I decided to create my own plugin.

I spent some time optimizing this for size and performance, so it should run pretty well. Please let me know if you have issues or suggestions




# Markup


Your HTML should look like this:

```
    <div id="parallax">
	    <ul>
		    <li id="parallax1"><div></div></li>
		    <li id="parallax2"><div></div></li>
		    <li id="parallax3"><div></div></li>
		    <li id="parallax4"><div></div></li>
		    <li id="parallax5"><div></div></li>
		    <li id="parallax6"><div></div></li>
		    <li id="parallax7"><div></div></li>
	    </ul>
    </div>
```
# Javascript

Call the plugin like this:

```javascript


	$('#parallax').parallax();
	

```

Options:

```javascript

	$('#parallax').parallax({
	interval:33,    //  <----30fps  How often to update the position
	speedX:300,	    // How far to travel horizontally
	speedY:100,     // How far to travel vertically
	focus:0.5,      // focal point
	resize:true     // Set to false to save some calculations if your container does not change size
	});
	

```



