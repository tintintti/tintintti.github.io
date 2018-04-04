$(document).ready(function () {
  $('#comment-form').on("submit", function (event) {
    event.preventDefault();
    var form = this;
    $('#comment-form-submit').html('Loading...');

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        $('#comment-form-submit').html('Submitted');
        $('.comments-form .message').removeClass('error').addClass('success');
        form.reset();
        showAlert('<strong>Thanks for your comment!</strong> It may take a moment for it to appear.');
      },
      error: function (err) {
        $('#comment-form-submit').html('Submit Comment');
        $('.comments-form .message').removeClass('success').addClass('error');
        showAlert('<strong>Adding comment failed.</strong> Please make sure all fields have been filled and try again.');
      }
    });

    return false;
  });

  function showAlert(message) {
    $('.comments-form .message').removeClass('hidden');
    $('.comments-form .message-text').html(message);
  }
});
