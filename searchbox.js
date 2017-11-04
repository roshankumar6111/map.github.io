 $(function() {
          var alreadyFilled = false;
           var states = ['834001','400001','180001','110005','400009','400010','400011'];
           var statesname=['Ranchi Haider Ali',' Post Office BAZARGATE',' A G S Office','Anand Parbat indl. area',' Post Office Details',' Post Office DOCKYARD ROAD','Post Office AGRIPADA, MUMBAI' ];
         function initDialog() {
            
           clearDialog();
           for (var i = 0; i < states.length; i++) { 
             if(i%2==0){
             $('#drop').append('<li onmouseover="this.style.backgroundColor=\' rgb(127, 171, 255)\'" onmouseout="this.style.backgroundColor=\'#EDF7FE\'" style="background:#EDF7FE;"><span class="zip">'+ states[i] + '</span><br><span class="addr">'+statesname[i]+'</span></li>');
             }
               else{
                    $('#drop').append('<li><span class="zip">'+ states[i] + '</span><br><span class="addr">'+statesname[i]+'</span></li>');
               }
          }
         }
         function clearDialog() {
           $('#drop').empty();
         }
        $('.search input').click(function() {
            if (!alreadyFilled) {
            $('#drop').addClass('open');
        }
        });
         $('body').on('click', '#drop > li', function() {
             $('.search input').val($(this).text()).focus();
             $('.search .close').addClass('visible');
             alreadyFilled = true;
    });
    $('.search .close').click(function() {
        alreadyFilled = false;
        $('#drop').addClass('open');
        $('.search input').val('').focus();
        $(this).removeClass('visible');
    });
    function match(str) {
        str = str.toLowerCase();
        clearDialog();
        for (var i = 0; i < states.length; i++) {
            if (states[i].toLowerCase().startsWith(str)) {
                 if(i%2==0){
            $('#drop').append('<li onmouseover="this.style.backgroundColor=\' rgb(127, 171, 255)\'" onmouseout="this.style.backgroundColor=\'#EDF7FE\'" style="background:#EDF7FE;"><span class="zip">'+ states[i] + '</span><br><span class="addr">'+statesname[i]+'</span></li>');
             }
               else{
                    $('#drop').append('<li><span class="zip">'+ states[i] + '</span><br><span class="addr">'+statesname[i]+'</span></li>');
               }
            }
        }
    }
    $('.search input').on('input', function() {
        $('#drop').addClass('open');
        alreadyFilled = false;
        match($(this).val());
    });
    $('#map').click(function(e) {
        if (!$(e.target).is("input, .close")) {
            $('#drop').removeClass('open');
        }
    });

    initDialog();
});