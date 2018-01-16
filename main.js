jQuery(document).ready(function () {

    (function () {
        jQuery('.caption1').each(function () {


            var captionEl = jQuery(this);
            captionEl.parents("." + 'console').addClass('blink');
            setTimeout(function () {
                testTypingEffect(captionEl.data('text'), captionEl, true, 'console');
            }, 3000)


        });
        function testTypingEffect(val, captionEl, bool, parent) {
            var captionLength = 0,
                caption = val;


            type();

            function type() {

                if (typeof  captionEl === "undefined") {
                    return
                }
                captionEl.parents("." + parent).addClass('noBlink');
                captionEl.parents("." + parent).removeClass('blink');
                captionEl.html(caption.substr(0, captionLength++));
                if (captionLength < caption.length + 1) {

                    if (caption.substr(captionLength - 1, 1) === " ") {
                        setTimeout(function () {
                            type();
                        }, 200);
                    } else {
                        setTimeout(function () {
                            type();
                        }, 80);
                    }

                } else {
                    captionLength = 0;
                    caption = '';
                    captionEl.parents("." + parent).removeClass('noBlink');
                    captionEl.parents("." + parent).addClass('blink');


                    if (bool) {
                        setTimeout(function () {
                            captionEl.parents("." + parent).removeClass('blink');

                        }, 2000);
                        setTimeout(function () {
                            jQuery('.caption2').each(function () {
                                var captionEl = jQuery(this);
                                captionEl.parents("." + 'console').addClass('blink');
                                setTimeout(function () {
                                    testTypingEffect(captionEl.data('text'), captionEl, false, 'console');
                                }, 2000)


                            })
                        }, 2000);


                    } else {
                        setTimeout(function () {
                            captionEl.parents("." + parent).removeClass('blink');

                        }, 4000);
                        return false;
                    }

                }
            }
        }
    })();

    jQuery('.seo_trigger').click(function () {
        if (jQuery('.seo_hidden').css('display') === "none") {
            jQuery('.seo_hidden').slideDown();
            jQuery('.gradient').fadeOut();
            jQuery('.seo_block').addClass('active');
        } else {
            jQuery('.seo_hidden').slideUp();
            jQuery('.gradient').fadeIn();
            jQuery('.seo_block').removeClass('active');
        }
    });

    jQuery('.burger_btn').click(function () {
        var
            header = jQuery('header'),
            main = jQuery('#main_content'),
            overlay = jQuery('.overlay');
        if (!header.hasClass('open')) {
            header.addClass('open');
            main.addClass('noScroll');
            overlay.addClass('active');

        } else {
            header.removeClass('open');
            main.removeClass('noScroll');
            overlay.removeClass('active');
        }
    });

    jQuery('#contact_btn').click(function () {

    });

    jQuery(window).load(function () {
        resizeWorks();
    });


    jQuery('#modal_wrap').find('.input_wrap').click(function (e) {

        jQuery('#modal_wrap').find('.input_wrap').each(function (ix, el) {
            var input = jQuery(this).find('.input_self').val().trim();
            if (jQuery(this).hasClass('active') &&  ! input.length > 0 ){
                jQuery(this).removeClass('active')
            }

        });

        jQuery(this).addClass('active');
        jQuery(this).find('.input_self').focus();

    })
    
    jQuery('#contact_btn').click(function (e) {
        console.warn("hello");
       var modal =  jQuery('#main_content');

            modal.addClass('active');

    });
    jQuery('#modal_wrap .close').click(function (e) {
        var modal =  jQuery('#main_content');
        modal.removeClass('active');
    })
    jQuery('.overlay').click(function (e) {
        jQuery('#main_content').removeClass('active');
        jQuery('header').removeClass('open');
        jQuery(this).removeClass('active');
    })
});


jQuery(window).load(function () {
    resizeTitle('.desc_wrap', '.blog_item_desc', '.blog_items_wrap');
    resizeTitle('.desc_wrap', '.blog_item_desc', '.blogTop');
    resizeTitle('.desc_wrap', '.blog_item_desc', '.blogMid');
    resizeTitle('.desc_wrap', '.blog_item_desc', '.blogBot');
    resizeTitle('.case_wrap', '.case_item_self', '.case_item_box');
    resizeTitle('.case_item_self', '.case_item', '.case_block');
    setTimeout(function () {
        resizeWorks();
    }, 100)


});

jQuery(window).resize(function () {
    resizeTitle('.desc_wrap', '.blog_item_desc', '.blog_items_wrap');
    resizeTitle('.desc_wrap', '.blog_item_desc', '.blogTop');
    resizeTitle('.desc_wrap', '.blog_item_desc', '.blogMid');
    resizeTitle('.desc_wrap', '.blog_item_desc', '.blogBot');
    resizeTitle('.case_wrap', '.case_item_self', '.case_item_box');
    resizeTitle('.case_item_self', '.case_item', '.case_block');
});




function resizeWorks() {
    var addElem = jQuery('.addition_work_items').outerWidth(),
        mainElem = jQuery('.maim_work_item').outerWidth(),
        sum = Math.ceil(addElem + mainElem) + 150;
    jQuery('.our_work_cut').css({minWidth: sum + "px"})
}

function resizeTitle(className, parentClass, context) {
    var height = 0;

    var classFinder = context === 'undefined' ? className : context + ' ' + className;

    var arr = jQuery(classFinder);

    arr.each(function (ix, el) {

        if (jQuery(el).height() > height) {
                height = jQuery(el).outerHeight();
        }
    });
    arr.each(function (ix, el) {
        var parent = context === 'undefined' ? parentClass : context + ' ' + parentClass;
        jQuery(parent).height(height);
    })
}











































