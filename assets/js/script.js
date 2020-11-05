/*Sticky Scroll*/
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").className = "fixed d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow";
  } else {
    document.getElementById("header").className = "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow";
  }
}

/*Login Toggle*/
$('#login_area').click(function(){
	$(this).toggleClass('clicked');

	if ($(this).hasClass('clicked')) {
		$('#registration-form').slideDown();
		$('#login-form').slideUp();
		$(this).text('Return to Login');
	} else {
		$('#registration-form').slideUp();
		$('#login-form').slideDown();
		$(this).text('No Account? Click Here!!');
	}
});

/*Profile Info*/
$('#supplierCheck').click(function(){
	$(this).toggleClass('supplierActive');

	if ($(this).hasClass('supplierActive')) {
		$('.supplier_fields').slideDown();
	} else {
		$('.supplier_fields').slideUp();
	}
});

