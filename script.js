jQuery(document).ready(function($) {
  console.log('hi there!')
  
  $('button.skills').click(function(e) {
    $('section.skills').slideToggle()
    $(this).text() === 'Hide Skills' ? $(this).text('Show Skills') : $(this).text('Hide Skills')
  })
  
  $('.images nav ul li').click(function(e) {
    const index = $(this).index()
    
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    
    const images = $(this).parents('nav').siblings('.gallery').children()
    images.removeClass('active')
    images.eq(index).addClass('active')
  })
  
  $('button.read-more').click(function(e) {
    $(this).siblings('article').slideToggle()
    $(this).text() === 'Read More' ? $(this).text('Read Less') : $(this).text('Read More')
  })
})