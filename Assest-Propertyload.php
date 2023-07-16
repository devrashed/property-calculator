<?php 

if ( ! defined('ABSPATH')) exit;  // if direct access 

/**
 *  Assestload class
 */
class propertyload  
{
	
	function __construct()
	{

		add_action( 'wp_enqueue_scripts', [$this, 'property_register_assets']);

	}	


 function property_register_assets() {

//wp_enqueue_script( 'jQuery-min', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', 0.122, true );

wp_enqueue_script( 'property', plugins_url( 'assets/js/property.js', __FILE__ ), array( 'jquery' ), 0.1, false );
	
wp_enqueue_style( 'property-css', plugins_url( 'assets/css/property-style.css', __FILE__ ), false, time(), 'all' );	

wp_enqueue_style( 'awesome-font', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', false, time(), 'all');
		
	}


}		