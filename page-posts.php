<?php

/*
    Template Name: Actualités
*/


get_header();

$args = array(
    'post_type' => 'post',
    'post_status' => 'publish',
    // 'posts_per_page' => 6,
);

$query = new WP_Query($args);

echo '<h1 class="blog-title">' . get_the_title() . '</h1>';

echo '<main class="page blog">';

echo '<div class="post-container">';
if ( $query->have_posts() ) {
    while ( $query->have_posts() ) {
        $query->the_post();
        echo '<div class="post">' ;
        echo '<a href="' . get_permalink($id) . '" title="' . get_the_title() . '"><img src="' . get_the_post_thumbnail_url( $_post->ID, 'medium' ) . '" alt="" /></a>';
        echo '<span class="post-date">' . get_the_date( get_option( 'date_format' ), $post->ID ) . '</span>';
        echo '<h2><a href="' . get_permalink($id) . '" title="' . get_the_title() . '">' . get_the_title() . '</a></h2>';
        echo '<p>' . get_the_excerpt() . '</p>';
        echo '<p class="read-more">';
        echo '<a href="' . get_permalink($id) . '" title="' . get_the_title() . '">En lire +</a>';
        echo '</p>';
        echo '</div>';
    }
    
    wp_reset_postdata();
} else {
    echo "<p>Aucune actualité pour l'instant...</p>";
}
// echo '</div>' ;
// get_sidebar();
// echo '</main>';

// echo "<p>Aucune actualité pour l'instant...</p>";
// pressPagination($pages ='', $range = 2) ;


echo '</main>';
// wp_link_pages();
// pagination($pages ='', $range = 2) ;
the_posts_pagination();
// posts_nav_link();
echo paginate_links();

// draa_pagination();






// $total_pages = $query->max_num_pages;
// if ($total_pages > 1){

//     $current_page = max(1, get_query_var('paged'));

//     echo paginate_links(array(
//         'base' => get_pagenum_link(1) . '%_%',
//         'format' => '/page/%#%',
//         'current' => $current_page,
//         'total' => $total_pages,
//         'prev_text'    => __('« prev'),
//         'next_text'    => __('next »'),
//         'add_args'  => array()
//     ));
// }
       













get_footer();

 ?>

