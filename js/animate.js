// SELECTORS
const languages = document.querySelector('.languages');

// OBERVER
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      $('.progress-bar span').each(function () {
        $(this).animate(
          {
            width: $(this).attr('data-progress') + '%',
          },
          1000
        );
      });
    }
    $('.progress-bar span').each(function () {
      $(this).css('width', '0');
    });
  });
});

observer.observe(languages);
