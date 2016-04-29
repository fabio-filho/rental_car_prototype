/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
    
    
        /* tab  .uib_w_30 */
    $(document).on("click", ".uib_w_30", function(evt)
    {
        
         /*global activate_subpage */
         activate_subpage("#settingsPage"); 
                
    });
    
        /* tab  .uib_w_29 */
    
    
     
     
        /* tab  .uib_w_29 */
    $(document).on("click", ".uib_w_29", function(evt)
    {
        
         /*global activate_subpage */
         activate_subpage("#page_36_23");
                  
        
    });
     
     
    
     
     $( "#mListViewItem" ).click(function() {
         
        /*global activate_subpage */
         activate_page("#car_details_page");
         
     });
        /* List view Item  .mListViewItem */
     
     
     $("#mDetailsPageBackButton").click(function(){
         
         /*global activate_subpage */
         activate_subpage("#page_36_23");
         
     })
     
     
     
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
