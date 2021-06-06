<?php

/*
    Template Name: Homepage
*/

get_header();

if( have_posts() ):

	// echo '<h1>' . get_the_title() . '</h1>';
    echo '<h1>Docteur Arnaout</h1>';
    echo '<p>' . get_bloginfo('description') . '</p>';

	if (has_post_thumbnail($_post->ID)) {
		echo '<img src="' . get_the_post_thumbnail_url( $_post->ID, 'post-thumbnail' ) . '" alt="" />';
	}

	while( have_posts() ): the_post();
		echo '<div class="content">';
		the_content();

		echo '</div>';
	endwhile;
	
endif;

?>


<?php
get_footer();
?>

