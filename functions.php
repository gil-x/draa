<?php

/*
	=====================
	   INCLUDE SCRIPTS
	=====================
*/
function draa_script_enqueue() {
	wp_enqueue_style('draa-css', get_template_directory_uri().'/css/main.css', array(), '0.0.1', 'all' );
	wp_enqueue_script('draa-js', get_template_directory_uri().'/js/main.js', array(), '0.0.1', true );
	// wp_enqueue_style( 'google_web_fonts', 'https://fonts.googleapis.com/css?family=Anton|Fjalla+One|Catamaran' );
}
add_action('wp_enqueue_scripts', 'draa_script_enqueue');

/*
	=======================
	   WP THEME FEATURES
	=======================
*/
function draa_theme_setup() {
	add_theme_support('menus');
	add_theme_support('custom-logo');
	add_theme_support('post-thumbnails', array('post', 'page'));
	register_nav_menu('primary', 'Menu principal');
}
add_action('init', 'draa_theme_setup');

/*
	================
	   PAGINATION
	================
*/

// function draa_pagination() {
// 	echo '<ul class="posts-pagination">';
// 	$pages = paginate_links(['type' => 'array']);
// 	foreach($pages as $page) {
// 		echo '<li>';
// 		echo $page;
// 		echo '</li>';
// 	}
// 	echo '</ul>';
// }

?>
