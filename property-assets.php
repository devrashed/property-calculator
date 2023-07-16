<?php
/**
 * Plugin Name: Property Calculator
 * Description: Property Calculator
 * Plugin URI: https://wefin.ca/
 * Author: Rashed khan by cansoft
 * Version: 1.0
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html 
 */

if ( ! defined('ABSPATH')) exit;  // if direct access 

require_once 'Assest-Propertyload.php'; 
require_once 'property-setting.php';
require_once 'property-stack/Alberta-Property.php';
require_once 'property-stack/british-columbia-property.php';
require_once 'property-stack/monitoba-property.php';
require_once 'property-stack/ontario-property.php';
require_once 'property-stack/Québec-Property.php';
require_once 'property-stack/saskatchewan-property-tax.php';
require_once 'property-stack/Atlantic_canada_property_tax.php';


final class Propertycalculator
{

    const version = '1.0';

    function __construct(){

    $this->property_define_constants();

    register_activation_hook( PROPERTY_CALCULATOR_FILE, [ $this, 'property_assets_activate' ] ); // plugin activation

    add_action( 'plugins_loaded', [ $this, 'property_init_plugin' ] );  // load plugin
}

 /**
     * Define the required plugin constants
     *
     * @return void
     */ 
  
     public function property_define_constants() {
        define( 'PROPERTY_CALCULATOR_VERSION', self::version );
        define( 'PROPERTY_CALCULATOR_FILE', __FILE__ );
        define( 'PROPERTY_CALCULATOR_ASSETS_PATH', __DIR__ );
        define( 'PROPERTY_CALCULATOR_ASSETS_URL', plugin_dir_url( __FILE__  ) );
    }  


    public function property_init_plugin() {

        new propertyload();   
        new Prosetting();        //property setting
        new AlbertaProperty();  //Alberto 
        new britishProperty();  //British Columbia
        new monitobaProperty(); //monitobaProperty
        new OntarioProperty();   // ontarioProperty
        new QuebProperty();     // Quebec Property
        new SaskatchewanProperty(); // Saskatchewan Property
        new AtlanticProperty();  // Atlantic Property

    }

    /**
     * Plugin Activatoin Hook
     */  
     
    public function property_assets_activate() {

    $installed = get_option( 'property_installed' );

     if ( ! $installed ) {
        update_option( 'property_installed', time() );
    }

    update_option( 'property_assets_version', PROPERTY_CALCULATOR_VERSION );
    } 

 } 
     /**
     * Create a class instance
     */  
 new Propertycalculator(); 

 /*==== END THE class ===== */ 