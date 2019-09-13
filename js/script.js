var loadFile = function(event) {
	var upload_div = document.getElementById('upload-div');
	var image = document.createElement("IMG");
	var btn = document.getElementById('img-btn');
	image.src = URL.createObjectURL(event.target.files[0]);
  image.style.width="116px";
  image.style.height="116px";
	image.style.marginRight="10px";
	image.style.marginBottom="10px";
	upload_div.insertBefore(image, btn);
};
var uploadFile = function(event) {
 	var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
  image.style.width="116px";
  image.style.height="116px";
  var img_div = document.getElementById('upload-div');
  var btn = document.getElementById('img-btn');
  img_div.appendChild(btn);
};
function insert(){
	var div_row = document.createElement("div");
	div_row.className="form-row";
	parent =  document.getElementById('doctors-form');
  insert_row =  document.getElementById('insert-row');
	$(div_row).insertAfter(insert_row)
	var div_col = document.createElement("div");
	div_col.className="form-group col-md-6";
	div_row.appendChild(div_col);
	var select = document.createElement("SELECT");
	select.className ="custom-select status-select";
	select.id ="inputGroupSelect01";
	div_col.appendChild(select);
	option = document.createElement("OPTION");
	option.value="1";
	option.text="Թերապիա";
	for( var i=1; i<10; i++){
		select.appendChild(option);
		option.value="i";
	}
	var span = document.createElement("SPAN");
	span.className = "status-select-arrow";
	div_col.appendChild(span);
	var font = document.createElement("i");
	font.className = "fa fa-angle-down";
	span.style.top = "10px";
	span.appendChild(font);
};

function insert_day(){
	var div_row = document.createElement("div");
	div_row.className="form-row ";
	parent =  document.getElementById('customer-form');
	parent.appendChild(div_row);
	var div_col = document.createElement("div");
	div_col.className="form-group col-md-6";
	div_row.appendChild(div_col);
	label = document.createElement("LABEL");
	label.innerHTML="Օր";
	div_col.appendChild(label);
	input = document.createElement("INPUT");
	input.type = "date";
	input.className = "form-control";
	div_col.appendChild(input);
	// <input type="date" class="form-control"  data-placeholder="" required aria-required="true" >

};

//tooth button active/non-active
$(".customer-tooth-btn").click(function(){
	if($(this).css('opacity')==0.6)
    $(this).css('opacity','1.0');
    else
    $(this).css('opacity','0.6');
});

var button1 = document.createElement("button");
button1.innerHTML = "Տեսնել";
button1.className = "popuptext-btn";
var button2 = document.createElement("button");
button2.innerHTML = "Խմբագրել";
button2.className = "popuptext-btn";
var button3 = document.createElement("button");
button3.innerHTML = "Ջնջել";
button3.className = "popuptext-btn";

$(".tooth-btn").on("click", function(){
	if ($(this).children('.popuptext').is(':visible')) { //check if hidden or not
		 $(this).children('.popuptext').hide(); //if yes hide
		 $(this).children('.popuptext-btn').hide();
		 $('.popuptext').empty();
	 } else {
		 	$('.popuptext').hide();
	    $(this).children('.popuptext').show(); // else show
			$(this).children('.popuptext').empty();
			$(this).children('.popuptext').append(button1);
			$(this).children('.popuptext').append('<br>');
			$(this).children('.popuptext').append(button2);
			$(this).children('.popuptext').append('<br>');
			$(this).children('.popuptext').append(button3);
	 }

});


// $( document ).ready(function() {
// 	console.log($(document).innerHeight())
// 	// let section_height = $(window).outerHeight() - $("header").outerHeight() - $("footer").outerHeight();
// 	let section_height = $(document).innerHeight() - $("header").innerHeight() - $("footer").innerHeight();
// 	console.log(section_height);
//     $("section").css("minHeight", section_height);
// });
