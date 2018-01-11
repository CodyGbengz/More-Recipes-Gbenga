$(document).ready(() => {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $(".button-collapse").sideNav();
    $('.tooltipped').tooltip({delay: 500});
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        hover: true, // Activate on hover
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'right' // Displays dropdown with edge aligned to the left of button
      }
    );
    
    
 });

$.validator.setDefaults({
  errorClass: 'invalid',
  validClass: 'valid',
  errorPlacement (error, element) {
        $(element)
            .closest("form")
            .find("label[for='" + element.attr("id") + "']")
            .attr('data-error', error.text());
    },
  submitHandler (form) {
        console.log('form ok');
    }
});

$('.former').validate({
  rules: {

  }
});

window.onscroll = function () { scrollFunction() ;};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('backToTop').style.display = 'block';
  } else {
    document.getElementById('backToTop').style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera 
}
