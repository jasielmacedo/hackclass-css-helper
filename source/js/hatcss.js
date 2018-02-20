/*!
 * Hatcss -https://github.com/jasielmacedo/hatcss/
 * Version - 1.0.0
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2018 Jasiel Macedo, Stefano Mendes, Gisele Mendes, André Zapalá
 */
jQuery(function(){
	jQuery(".animate_when_almost_visible:not(.start_animation)").waypoint(function(){
		jQuery(this.element).addClass("start_animation").addClass("animated");		
	},{offset: '100%'});
});