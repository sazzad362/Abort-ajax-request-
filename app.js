//Abort previous ajax request on new request
var currentRequest = null;    
currentRequest = jQuery.ajax({
    type: 'POST',
    data: 'value=' + text,
    url: 'AJAX_URL',
    beforeSend : function()    {           
        if(currentRequest != null) {
            currentRequest.abort();
        }
    },
    success: function(data) {
        // Success
    },
    error:function(e){
      // Error
    }
});