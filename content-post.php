<h1><?php the_title(); ?></h1>

<main>
    
    <?php 
    // echo '<a href="'. get_the_post_thumbnail_url( $_post->ID, 'post-thumbnail' ) .'" class="lightbox" >';
    echo '<img class="featured-image" src="' . get_the_post_thumbnail_url( $_post->ID, 'post-thumbnail' ) . '" alt="" />';
    //echo '</a>';
    ?>

    <?php the_content(); ?>

    <div id="posts-navigation">
        <span class="next-project"><?php previous_post_link('« %link '); ?></span>
        <span class="previous-project"><?php next_post_link('%link »'); ?></span>
    </div>


</main>
<?php // get_sidebar(); ?>

