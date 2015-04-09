$(document).ready(function(){
   function initialize(){
       var mapProp= {
           center:new google.maps.LatLng(59.858060, 17.639740),
           zoom:13,
           mapTypeId: google.maps.MapTypeId.ROADMAP
       };
       var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
   }
    initialize();
    $.get("test.php",function(data){
        alert(data);
    });



});
