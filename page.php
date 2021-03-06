<?php get_header(); ?>


<?php

echo '<main>';

if( have_posts() ):

	echo '<h1>' . get_the_title() . '</h1>';

	while( have_posts() ): the_post();
		echo '<div class="content">';
		if (has_post_thumbnail($_post->ID)) {
			echo '<img class="featured-image" src="' . get_the_post_thumbnail_url( $_post->ID, 'post-thumbnail' ) . '" alt="" />';
		}
		the_content();
		echo '</div>';
	endwhile;
	
endif;

echo '</main>';

get_footer();

?>
