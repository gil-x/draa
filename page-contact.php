<?php

/*
    Template Name: Contact
*/


get_header();



echo '<main class="contact-page">';

echo '<h1>' . get_the_title() . '</h1>';

if( have_posts() ):

	while( have_posts() ): the_post();
	the_content();
	endwhile;
		
endif;

echo '</main>';


get_footer();

?>



<!-- <label> Votre nom
    [text* your-name placeholder "Votre nom"] </label>

<label> Votre date de naissance
    [date date-403] </label>

<label> Votre e-mail
    [email* your-email placeholder "Votre email"] </label>


<label> Objet
    [text* your-subject placeholder "Sujet"] </label>

<label> Votre message (facultatif)
    [textarea your-message placeholder "Message"] </label>

[submit "Envoyer"] -->