$(document).ready(() => {
  
  $('#add-btn').click(() => {
    
    const item = `
      <label class="todo-item flex items-center gap-2" for="item">
        <div class="check-wrapper relative grid place-items-center w-[24px] h-[23px] rounded-full border">
          <input type="checkbox" class="absolute opacity-0" name="item" id="item">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </div>
        <p class="text-sm todo-text">${$('#value').val()}</p>
      </label>
    `;
    
    $('#value').val('');
    
    $('.todo-wrapper').append(item);
      
  });
  
  // Event delegation
  $('.todo-wrapper').on('click', '.todo-item', (e) => {
    if (!$(e.target).is('input[type="checkbox"]')) {
      const $text = $(e.currentTarget).find('.todo-text').clone(); // Clone the text element
      $(e.currentTarget).find('.check-wrapper').toggleClass('active-list-item');
      $(e.currentTarget).find('.todo-text').toggleClass('active-text');
      
      $('.completed-items').append($text); // Append the cloned text element
      $(e.currentTarget).find('input[type="checkbox"]').prop('disabled', true);
    }
  });

  $('#menu-btn').click(() => {
    $('.completed').addClass('right-0');
  });
  
  $('#close-btn').click(() => {
    $('.completed').removeClass('right-0');
  })
  
});
  
