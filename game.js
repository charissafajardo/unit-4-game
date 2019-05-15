var random_value = Math.floor(Math.random() * 99 + 30);

$("#result").html("Random Value: " + random_value);

var crystals = [
  "https://media.istockphoto.com/photos/blue-crystal-3d-rendering-isolated-illustration-picture-id872840088?k=6&m=872840088&s=612x612&w=0&h=Bo8WumwXzH5WmCmjrXxhFkvfh3Xy2mFDAX4VG092SEU=",
  "https://d2f0ora2gkri0g.cloudfront.net/b4/31/b4310115-5a45-46a3-8b46-52785bd0a777.png",
  "https://cdn.shopify.com/s/files/1/1768/8207/products/Luminizer-Rose-Quartz-illustration-1024px-Shop_1024x1024.png?v=1534182182",
  "https://cdn.shopify.com/s/files/1/0885/3790/products/6ecd13_7f05c1dbe899493d92271d9208b4ddb1_e1cd48a0-737d-4ac0-bbe7-427a1a9f6bb1_480x.jpeg?v=1464021851ps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqiEiyJK6PidZrxuJQ75Yp6FnlWH_-xiah2NaZ3ZxtTO0FTNn"
];

for (let i = 0; i < crystals.length; i++) {
  var newImage = $("<img>");
  newImage.attr("src", crystals[i]);
  newImage.attr("random-value", Math.floor(Math.random() * 12));
  $("#crystal-container").append(newImage);
}

// or... these values could exist within crystal container?
// var crystal1 = Math.floor(Math.random() * 12);
// var crystal2 = Math.floor(Math.random() * 12);
// var crystal3 = Math.floor(Math.random() * 12);
// var crystal4 = Math.floor(Math.random() * 12);

$("#crystal-container").click(function() {});

// $(".crystalb1").click(function () {
// });
// $(".crystalb2").click(function () {
// });
// $(".crystalb3").click(function () {
// });
// $(".crystalb4").click(function () {
// });

//  let total = random_value;
// $("#total").html("Total: " + random_value);

// if total === random_value function (){

//   alert(you lose!) }  ;

// alert(you win!)

// else if total !== random_value function (){

// alert('you lose!') };
