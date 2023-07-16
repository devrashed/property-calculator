<?php 
if ( ! defined('ABSPATH')) exit;  // if direct access 

/**
 *  setting page
 */

/**
 * 
 */
class Prosetting 
{
    
    function __construct()
    {
      add_action('admin_menu',  [ $this, 'prosettingpage' ]);
    }

function prosettingpage(){

  add_menu_page(
            __('ShortCode list','pro-assets'), //Page title
            __('Property Setting','pro-assets'), //Menu title
            'manage_options', //capability
            'pro-setting', //menu_slug
            array($this, 'pro_setting_page'), //callback function
            'dashicons-admin-settings' //icon url
        );
    }
    
    // Displays the page content for the custom Toplevel menu
    function pro_setting_page() {

        echo "<h2>" . __( 'Property shortCode list', 'cal-assets' ) . "</h2>";

        echo "<div> Alberta Property Tax Calculator 2022 : [show_ab_property] </div></br>";

        echo "<div> British Columbia Property Tax Calculator 2022 : [show_bric_property] </div></br>";

        echo "<div> Manitoba Property Tax Calculator 2022 : [show_moni_property] </div></br>";

        echo "<div> Ontario Property Tax Calculator 2022 : [show_onta_property] </div></br>";

        echo "<div> Québec Property Tax Calculator 2022 : [show_que_property] </div></br>";

        echo "<div> Saskatchewan Property Tax Calculator 2022 : [show_saskatchewan_property] </div></br>";

        echo "<div>Atlantic Canada Property 2022 : [show_Atlantic_property] </div></br>";
      
    }

}//End the class 