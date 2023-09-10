$(document).ready(function() {
  $("#formOne").submit(function(event){
      $("#formOne").hide()
      // $("#story").show();



      const FullNameInput = $("#name1").val();
      const DOBInput = $("#date").val();
      const stateInput = $("#state").val();
      const phoneNoInput = $("#phone").val();
      const streetAddressInput = $("#street").val();
      const cityInput = $("#city").val();
      const guardianPhoneInput = $("#number").val();
      const NationalityInput = $("#nationality").val();
      const religionInput = $("#religion").val();
     

    $(".name1").text(FullNameInput);
    $(".date").text(DOBInput);
    $(".state").text(stateInput);
    $(".phone").text(phoneNoInput);
    $(".street").text(streetAddressInput);
    $(".city").text(cityInput);
    $(".number").text(guardianPhoneInput);
    $(".nationality").text(NationalityInput);
    $(".religion").text(religionInput);
    
   

    $("#story").show();
    event.preventDefault();
  });
  });
