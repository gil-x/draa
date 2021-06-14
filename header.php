<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title><?php the_title_attribute() ?></title>
		<?php wp_head(); ?>
	</head>

<?php

if (is_front_page()) {
	echo '<body class="home">';
} else {
	echo '<body class="page">';
}
?>

<header>

	<div class="logo">
		<?php echo '<a href="' . get_home_url() . '" title="Revenir à l\'accueil"> 

        </a>'; ?>
	</div>

	<?php
	echo '<nav id="menu">';
	wp_nav_menu(array('theme_location'=>'primary'));
	echo '</nav>';
	?>

	<input id="burger" type="button">

	<div class="header-bg"></div>

</header>

