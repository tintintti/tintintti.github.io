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
        $('.post__comments-form .message').removeClass('error').addClass('success');
        form.reset();
        showAlert('<strong>Thanks for your comment!</strong> It may take a moment for it to appear.');
      },
      error: function (err) {
        $('#comment-form-submit').html('Submit Comment');
        $('.post__comments-form .message').removeClass('success').addClass('error');
        showAlert('<strong>Adding comment failed.</strong> Please make sure all fields have been filled and try again.');
      }
    });

    return false;
  });

  function showAlert(message) {
    $('.post__comments-form .message').removeClass('hidden');
    $('.post__comments-form .message-text').html(message);
  }
});
