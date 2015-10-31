function pay (){
    var amount = $("#amount").val();
    var priceMovie = $("#price").val();
    var totalprice = (amount)*(priceMovie);
    $("#price-ticket").html(totalprice + "$");
}