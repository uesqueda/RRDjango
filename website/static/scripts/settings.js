$(document).ready(() => {
  $('.editProfile').on('click', () => {
    $('.settingsForm').show();
    $('.Obackground').show();
  })

  $('.Obackground').on('click', () => {
    $('.settingsForm').hide();
    $('.Obackground').hide();
  })
})
