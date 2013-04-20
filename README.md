# jQuery CSSParallax

This is a lightweight jQuery plugin that creates a parallax scrolling effect using CSS 3D Transforms.

I was inspired by [JSParallax] (https://github.com/stephband/jparallax), but didn't like the fact that it did not 
use CSS3 features that should run a lot faster on modern browsers, so I decided to create my own plugin.

I spent some time optimizing this for size and performance, so it should run pretty well. Please let me know if you have issues or suggestions




# Markup


Your HTML should look like this:

(Sorry, this is my first git  and I sort of jumped right into the water, so give me some time to figure out how to display markup here))
<div id="parallax">
	<ul>
		<li id="parallax1"></li>
		<li id="parallax2"></li>
		<li id="parallax3"></li>
		<li id="parallax4"></li>
		<li id="parallax5"></li>
		<li id="parallax6"></li>
		<li id="parallax7"></li>
	</ul>
</div>

# Javascript

Call the plugin like this:

```javascript
<script type="text/javascript">

	$('#parallax').parallax({
	interval:33, //<----30fps
	speedX:400,
	speedY:100,
	focus:0.5,
	resize:true
	});
	
</script>
```