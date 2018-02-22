/*!
 * Hatcss -https://github.com/jasielmacedo/hatcss/
 * Version - 1.1.0
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2018 Jasiel Macedo, Stefano Mendes, Gisele Mendes, André Zapalá
 */
 var animationEnd = (function(el) {
	var animations = {"animation": "animationend","OAnimation": "oAnimationEnd","MozAnimation": "mozAnimationEnd","WebkitAnimation": "webkitAnimationEnd"}
	for(var t in animations) {
		if(el.style[t] !== undefined) {
			return animations[t]
		}
	}
})(document.createElement("nullelement"));
 
jQuery(function(){
	
	var wayPointExecute = function(){
		var el = this.element;
		jQuery(el).addClass("w_visible").removeClass('w_not_visible');
		if(!jQuery(el).hasClass('animation_after') || jQuery(el).hasClass('start_animation_after')){
			jQuery(el).addClass("start_animation").addClass("animated");	
		}		
	};
	
	jQuery(".animate_when_almost_visible:not(.start_animation)").waypoint(wayPointExecute,{offset: '100%'});
	
	
	jQuery(".animate_when_almost_visible").waypoint(function(){
		var el = jQuery(this.element);
		if(!el.hasClass("w_not_visible")){
			el.addClass("w_not_visible");
			if(el.hasClass("repeat_animation") && el.hasClass("animated"))
			{
				el.removeClass("start_animation").removeClass("animated");
				if(!el.hasClass("w_r"))
					el.addClass("w_r").waypoint(wayPointExecute,{offset: '0%'});
			}
		}
	},{offset: '-50%'});
	
	
	
	jQuery(".animate_when_almost_visible").each(function(){
		var el = jQuery(this);
		
		var ev = function(){
			var next = jQuery(el).next('.animate_when_almost_visible');
			if(next.hasClass('animation_after'))
			{
				jQuery(el).addClass("start_animation_after")
				if(next.hasClass('w_visible'))
					next.addClass("start_animation").addClass("animated");
			}
		};
		
		el.one(animationEnd,ev);
	})
});

