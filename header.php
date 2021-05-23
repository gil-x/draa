<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title><?php the_title_attribute() ?></title>
		<?php wp_head(); ?>
	</head>

<?php
if (is_front_page()) {
	echo '<body class="home">';
}
else {
	echo '<body>';
}
?>

<header>
	<div class="logo">
		<?php echo '<a href="' . get_home_url() . '" title="Revenir à l\'accueil"> 
        <span>Docteur Ahlam</span>
        <span>Arnaout</span>
        <span>chirurgie de la main et du poignet</span>
        </a>'; ?>
	</div>
</header>

<?php

echo '<nav id="menu" class="menu-off">';
wp_nav_menu(array('theme_location'=>'primary'));
echo '</nav>';

?>
