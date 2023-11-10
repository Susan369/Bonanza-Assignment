$(document).ready(function () {
    // Click event to show/hide description
    $('.soup-item').click(function () {
        $(this).find('.description').toggle();
    });

    // FadeIn and FadeOut
    $('.soup-item').hover(function () {
        $(this).find('img').fadeIn();
    }, function () {
        $(this).find('img').fadeOut();
    });

    // AddClass on button click
    $('.order-button').click(function () {
        $(this).addClass('ordered');
    });

    // Append new item
    $('#tomato-soup').click(function () {
        const newItem = $('<div class="soup-item" id="new-soup"><h2>New Soup</h2><img src="images/new_soup.jpg" alt="New Soup"><p class="description">Delicious new soup.</p><button class="order-button">Order Now</button></div>');
        $('.soup-menu').append(newItem);
    });

    // Set HTML content
    $('#chicken-soup').hover(function () {
        $(this).find('.description').html('Special offer on chicken soup!');
    }, function () {
        $(this).find('.description').html('Hearty chicken soup with vegetables and noodles.');
    });
      // Footer features
      $('#order-online').click(function () {
        alert('Order online feature coming soon!');
    });

    $('#put-in-basket').click(function () {
        alert('Item added to the basket!');
    });

    $('#contact-us').click(function () {
        alert('Contact us feature coming soon!');
    });

    $('#questions').click(function () {
        alert('Any questions? Please reach out to us!');
    });

    // Hide and show footer
    let isFooterHidden = false;
    setInterval(function () {
        if (isFooterHidden) {
            $('footer').show();
        } else {
            $('footer').hide();
        }
        isFooterHidden = !isFooterHidden;
    }, 3000);
});
