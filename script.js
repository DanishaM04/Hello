let photos = [
' https://static01.nyt.com/images/2020/06/04/fashion/01unrest-virgil/merlin_153837891_79b71f9e-7dee-4cc8-b1df-37f1bb1bb75d-mobileMasterAt3x.jpg ' ,
' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgKc4lmIFxnfG2ux6fMZOtdu9koWO5xB_zuA&usqp=CAU ',
' https://static.onecms.io/wp-content/uploads/sites/20/2020/07/15/gabrielle-union-1-2000.jpg '
];
let inputValue = $(".inputName").val();
for (var photo of photos) { 
    
$(".celebs").append("<img src=" + photo + ">");
    
}
    
$("button").click(function() {
    
var link =$(".inputName").val();
    
photos.push(link);
    
$(".celebs").empty();
  
photos.forEach(function(a,b){
    
$(".celebs").append("<img src=" + photos[b] + ">");
    
    	$(".inputName").val("");
    
});
});    

    
