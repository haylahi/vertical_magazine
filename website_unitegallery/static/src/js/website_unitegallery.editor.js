function importScript(name) {
    var s = document.createElement("script");
    s.src = "unitegallery/themes/" + name;
    document.querySelector("head").appendChild(s);
}

odoo.define('website_ug.editor', function (require) {
	'use strict';
	var ajax = require('web.ajax');
	var core = require('web.core');
	var options = require('web_editor.snippets.options');
	require('web.dom_ready');
	options.registry.ug_theme_carousel = option.select_gallery_theme({
		 onFocus: function() {
	            alert("On focus!");
	        }
	});
});


