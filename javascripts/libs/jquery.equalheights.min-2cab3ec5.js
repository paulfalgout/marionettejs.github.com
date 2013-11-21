/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
!function(e){e.fn.equalHeights=function(){var t=0,n=e(this);return n.each(function(){var n=e(this).innerHeight();n>t&&(t=n)}),n.css("height",t)},e("[data-equal]").each(function(){var t=e(this),n=t.data("equal");t.find(n).equalHeights()})}(jQuery);