$(document).ready(function(){$(".video_slideshow").cycle({pager:".slider2",pagerTemplate:"<span></span>",paused:!0}),$(window).width()>705&&$(".code_examples > div").equalHeights(),$(window).resize(function(){$(window).width()>705?($(".code_examples > div").css("height","auto"),$(".code_examples > div").equalHeights()):$(".code_examples > div").css("height","auto")}),$(".vid").fitVids(),prettyPrint()});