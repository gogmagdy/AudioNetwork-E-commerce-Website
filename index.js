// Menu bar
function openmenu(){
    document.getElementById("side-menu").style.display="block";
    document.getElementById("menu-btn").style.display="none";
    document.getElementById("close-btn").style.display="block";
}
function closemenu(){
    document.getElementById("side-menu").style.display="none";
    document.getElementById("menu-btn").style.display="block";
    document.getElementById("close-btn").style.display="none";
}
// End of Menu bar 

// variables and objects
var album1 = {
    name : 'The Crumbling' ,
    category :  'pop music',
    pictureURL : 'https://static1.squarespace.com/static/52c191aee4b0159b36a0d698/52c36668e4b0aec64ed57691/545143d2e4b0055013023946/1439916421573/The-Crumbling-Album-Art.png',
    price: 20.00 
}
$('.product-bottom1 .name').text(album1.name);
$('.product-bottom1 .category').text(album1.category);
$('#album1 .picture').attr("src",album1.pictureURL);
$('.product-bottom1 .price').text(album1.price);

var album2 = {
    name : 'The Oh Hellos' ,
    category :  'Classic music',
    pictureURL : 'https://static1.squarespace.com/static/55830653e4b015475e07b811/t/5a60ce7e085229489232a647/1516293867055/1600.png',
    price: 25.00 
}
$('.product-bottom2 .name').text(album2.name);
$('.product-bottom2 .category').text(album2.category);
$('#album2 .picture').attr("src",album2.pictureURL);
$('.product-bottom2 .price').text(album2.price);


var album3 = {
    name : 'Nothing But The Beat' ,
    category :  'Folk music',
    pictureURL : 'http://3.bp.blogspot.com/-qmx53snBg04/T30GvThcyNI/AAAAAAAAAlg/HjvZGLUnnIE/s1600/david-guetta-nothing-but-the-beat-best-album-cover.png',
    price: 30.00 
}
$('.product-bottom3 .name').text(album3.name);
$('.product-bottom3 .category').text(album3.category);
$('#album3 .picture').attr("src",album3.pictureURL);
$('.product-bottom3 .price').text(album3.price);

var book1 = {
    name : 'PA/PER CRA/FT' ,
    category :  'Fiction book',
    pictureURL : 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/creative_bookcover.png',
    price: 25.00 
}
$('.product-bottom4 .name').text(book1.name);
$('.product-bottom4 .category').text(book1.category);
$('#book1 .picture').attr("src",book1.pictureURL);
$('.product-bottom4 .price').text(book1.price);


var book2 = {
    name : 'The World Of Abstract Art' ,
    category :  'Art book',
    pictureURL : 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png',
    price: 15.00 
}
$('.product-bottom5 .name').text(book2.name);
$('.product-bottom5 .category').text(book2.category);
$('#book2 .picture').attr("src",book2.pictureURL);
$('.product-bottom5 .price').text(book2.price);


var book3 = {
    name : 'Where the Wind blows' ,
    category :  'Romantic book',
    pictureURL : 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/collage_bookcover.png',
    price: 30.00 
}
$('.product-bottom6 .name').text(book3.name);
$('.product-bottom6 .category').text(book3.category);
$('#book3 .picture').attr("src",book3.pictureURL);
$('.product-bottom6 .price').text(book3.price);
// end of variables and objects

var Albums = ["album1","album2","album3"];
var Books = ["book1","book2","book3"];

// add Function
function add_to_page (add){
    $('.New-products').append($('<div class="product-top">'+'<div id="add">').html( $('<img div class=picture>').attr("src",add.pictureURL).css({"width":"35%","padding-left":"120px"})))
    $('.New-products').append($('<div class="product-bottom">').html($('<div class="name">').text(add.name).css("padding-left","200px")))
    $('.New-products').append($('<div class="product-bottom">').html($('<div class="category">').text(add.category).css("padding-left","225px")))
    $('.New-products').append($('<div class="product-bottom">').html($('<div class="price">').text(add.price).css("padding-left","270px")))
    return add ;
}
// console.log(add_to_page(book1));
// end of add Function



// $(document).ready(function()
// {
$("#2").hover(function(){
    $("New-products").show();
    $("on-scale").hide();
});
// });

function showContent(type) {
    $(".poduct").hide().filter('.' + type).show();
  }

  $('.side-menu').on('click', '.fa fa-angle-right', function(e) {
    showContent(e.currentTarget.hash.slice(1));
    e.preventDefault();
  }); 
  showContent('Books');
  showContent('Albums');
 
  

  