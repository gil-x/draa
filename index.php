<?php get_header(); ?>


<?php

echo '<main class="page">';

if (get_locale() == 'en_US') {
    echo '<h1>News</h1>';
} else {
	echo '<h1>Actualités</h1>';
}

if( have_posts() ):
	echo '<div class="post-container">';

	while( have_posts() ): the_post();
	echo '<div class="post">' ;
	echo '<a href="' . get_permalink($id) . '" title="' . get_the_title() . '"><img src="' . get_the_post_thumbnail_url( $_post->ID, 'medium' ) . '" alt="" /></a>';
	echo '<span class="post-date">' . get_the_date( get_option( 'date_format' ), $post->ID ) . '</span>';
	echo '<h2><a href="' . get_permalink($id) . '" title="' . get_the_title() . '">' . get_the_title() . '</a></h2>';
	echo '<p>' . get_the_excerpt() . '</p>';
	echo '<p class="read-more">';
	echo '<a href="' . get_permalink($id) . '" title="' . get_the_title() . '">En lire +</a>';
	echo '</p>';
	echo '</div>';
	endwhile;

	echo '</div>';
		
endif;

// get_sidebar();
echo '</main>';

// draa_pagination();
the_posts_pagination();


get_footer();

?>
