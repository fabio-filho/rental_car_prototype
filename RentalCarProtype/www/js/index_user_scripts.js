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
     
     
     $("#mUserPageListViewItemMoreInfo").click(function(){
         
         activate_page("#schedule_more_info");
     });
     
     
     
     
     
    
        /* button  Fazer reserva */
    $(document).on("click", ".uib_w_58", function(evt)
    {
         /*global activate_page */
         activate_page("#car_schedule_page"); 
    });
    
        /* graphic button  Voltar */
    $(document).on("click", ".uib_w_70", function(evt)
    {
         /*global activate_page */
         activate_page("#car_details_page"); 
    });
    
        /* graphic button  Voltar */
    
    
        /* graphic button  Voltar */
    $(document).on("click", ".uib_w_72", function(evt)
    {
         /*global activate_page */
         activate_page("#car_schedule_page"); 
    });
    
        /* button  Efetuar pagamento */
    
    
        /* button  Ir para pagamentos */
    $(document).on("click", ".uib_w_82", function(evt)
    {
         /*global activate_page */
         activate_page("#car_payment_page"); 
    });
    
        /* button  Efetuar pagamento */
    $(document).on("click", ".uib_w_80", function(evt)
    {
        /* Modals are created using custom js 
         For examples and documentation visit http://www.idangero.us/framework7/docs/modal.html */
        myApp.modal({
          title: 'Pagamento',
          text: 'Seu pagamento foi refetuado com sucesso!',
          buttons: [
            {
              text: 'Fechar',
              close: true
            }
          ]
        }) 
        
        activate_subpage("#page_36_23"); 
    });
    
        /* tab  .uib_w_30 */
    
    
        /* tab  .uib_w_30 */
    
    
        /* tab  .uib_w_31 */
    
    
        /* tab  .uib_w_30 */
    $(document).on("click", ".uib_w_30", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#user_page"); 
    });
    
        /* tab  .uib_w_31 */
    
    
        /* tab  .uib_w_31 */
    $(document).on("click", ".uib_w_31", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#settingsPage"); 
    });
    
        /* graphic button  < Voltar */
    
    
        /* graphic button  < Voltar */
    $(document).on("click", ".uib_w_71", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
