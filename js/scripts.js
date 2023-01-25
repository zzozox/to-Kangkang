$(window).load(function(){
 
	var aniButtonDuration = 350;
	
	var totl = $('.thumb_desc li').length;

	for (ia=0; ia<totl; ia++) { 		
			cel = $('.thumb_desc li').eq(ia).html();
			$('#thumb-list li').eq(ia).prepend(cel);
	};	

	function hoverIn() {
			jQuery(".zoomSp").stop(true).fadeTo(0, 0);
			jQuery(".zoomImg").live("mouseover",
		 		function(){
					jQuery(".zoomSp", this).stop(true).fadeTo(300, 0.75);
				});
			jQuery(".zoomImg").live("mouseout",
				function(){
					jQuery(".zoomSp", this).stop(true).fadeTo(300, 0);
				});
	};
	hoverIn();

	slider = $('.bxslider').bxSlider({
				useCSS: false,
				easing: 'easeOutCubic',
				slideWidth: 141,
				minSlides: 1,
				maxSlides: 4,
				moveSlides: 1,
				speed:800,
				slideMargin: 20,
				pager:false,
				onSlideAfter:function(){
					$('.bxslider li').hover(function()
					{
						$(this).find('span').stop().animate({ opacity:1}, aniButtonDuration,'easeOutCubic');     					   
					}, function(){ 
						$(this).find('span').stop().animate({opacity:0}, aniButtonDuration,'easeOutCubic');					   
					});		
				}
			});
	
	$('.bxslider li').hover(function()
    {
            $(this).find('span').stop().animate({ opacity:1}, aniButtonDuration,'easeOutCubic');     					   
    }, function(){ 
    	    $(this).find('span').stop().animate({opacity:0}, aniButtonDuration,'easeOutCubic');					   
    });

	function lightbox() {
		jQuery("a[rel^='nofollow']").prettyPhoto({
			animationSpeed:'fast',
			theme:'pp_default',
			show_title:false,
			allow_resize: true,
			horizontal_padding: 0,
			overlay_gallery: false,
			social_tools: false,
			deeplinking: false
		});
	};
	
	function portfolio_quicksand_2col() {

		var jQueryfilter;
		var jQuerycontainer;
		var jQuerycontainerClone;
		var jQueryfilterLink;
		var jQueryfilteredItems

		jQueryfilter = jQuery('#portfolio2Col .filter li.active a').attr('class');

		jQueryfilterLink = jQuery('#portfolio2Col .filter li a');

		jQuerycontainer = jQuery('#portfolio2Col ul.filterable-grid');
		
		jQuerycontainerClone = jQuerycontainer.clone();
		
		jQueryfilterLink.click(function(e) 
		{	

			jQuery('#portfolio2Col .filter li').removeClass('active');
			
			jQueryfilter = jQuery(this).attr('class').split(' ');
			
			jQuery(this).parent().addClass('active');
			
			if (jQueryfilter == 'all') {
				jQueryfilteredItems = jQuerycontainerClone.find('li'); 
			}
			else {
				jQueryfilteredItems = jQuerycontainerClone.find('li[data-type~=' + jQueryfilter + ']'); 
			}

			jQuerycontainer.quicksand(jQueryfilteredItems, 
			{
			});

			jQuerycontainer.quicksand(jQueryfilteredItems, 
				function () { lightbox(); }
			);			
		});
			}
		
		function portfolio_quicksand_3col() {

		var jQueryfilter;
		var jQuerycontainer;
		var jQuerycontainerClone;
		var jQueryfilterLink;
		var jQueryfilteredItems

		jQueryfilter = jQuery('#portfolio3Col .filter li.active a').attr('class');

		jQueryfilterLink = jQuery('#portfolio3Col .filter li a');

		jQuerycontainer = jQuery('#portfolio3Col ul.filterable-grid');
		
		jQuerycontainerClone = jQuerycontainer.clone();
		
		jQueryfilterLink.click(function(e) 
		{	

			jQuery('#portfolio3Col .filter li').removeClass('active');
			
			jQueryfilter = jQuery(this).attr('class').split(' ');
			
			jQuery(this).parent().addClass('active');
			
			if (jQueryfilter == 'all') {
				jQueryfilteredItems = jQuerycontainerClone.find('li'); 
			}
			else {
				jQueryfilteredItems = jQuerycontainerClone.find('li[data-type~=' + jQueryfilter + ']'); 
			}

			jQuerycontainer.quicksand(jQueryfilteredItems, 
			{
			});

			jQuerycontainer.quicksand(jQueryfilteredItems, 
				function () { lightbox(); }
			);			
		});
			}
			
	if(jQuery().quicksand) {
		portfolio_quicksand_2col();
		portfolio_quicksand_3col();
	}

	
	if(jQuery().prettyPhoto) {
		lightbox(); 
	}
	
    $('#thumb-list li').prepend('<span></span>');
	
	$('#thumb-list li').each(function(){
        if(!$(this).hasClass('current-thumb')){
            $(this).find('span').css({ opacity:0});
			titl = $(this).find('.thumb_desc_title').outerWidth();
			$(this).find('.thumb_desc_title').css({'left':-titl});
			descr = $(this).find('.thumb_desc_exc').outerWidth();
			$(this).find('.thumb_desc_exc').css({'left':-descr});
        };
		$(this).live('click', function(){
			if (vars.is_paused != true) {setTimeout(function(){api.playToggle( );},2000) };
			if (window.location.hash != '#!/home') { window.location.hash = '#!/home';
			$('.description li').removeClass("active");
			if (vars.is_paused == true) {setTimeout(function(){api.playToggle( );},2000) };
			}
		});
    });
	

	$('.trigger').click(function(){
		$('#menu').slideToggle();
	});
	
	$('#menu>li>a, .submenu>li>a').prepend("<strong></strong>");
	$('#menu>li>a>b, .submenu>li>a>b').each(function(){
		var title = $(this).text();
		$(this).parent().find('strong').text(title);
	})

	$('#menu li a').click( function(){
		if ($(window).width() < 861) {
		$('#menu').slideUp();
		};
	});
	$(window).resize(function()
    {
	if ($(window).width() > 860) {
		$('#menu').css({"display":"block"});
	} else {
		$('#menu').css({"display":"none"});
	};
	});
	$( ".submenu").prepend("<span></span>");
	
	$('.with_ul').hover(function()
    {
		$(this).stop(true).animate({'top':-10}, 150,'easeOutCubic');
		$(this).stop(true).animate({'top':0}, 150,'easeOutCubic').find(".submenu").css({"display":"block"}).stop(true).animate({"opacity":1},250);
				   
    }, function(){
		$(this).find(".submenu").animate({"opacity":0},250).css({"display":"none"});					   
    });
	$('.submenu a').live('click',function(){
		$('.submenu a').parent().removeClass("active");
		$(this).parent().addClass("active");
	});
	$('#menu>li>a').live('click',function(){
		$('.submenu li').removeClass("active");
		var atr = $(this).attr("href"); 
		$('#menu a').each(function(){
			var ttr = $(this).attr("href"); 
			if (typeof ttr !== 'undefined' && ttr !== false && ttr == atr) {
				$(this).parent().addClass("active");
			}
		});
	});
	

	// Menu Hover
	
	
	$('#menu>li>a, .submenu>li>a').hover(function()
    {	
        if(!$(this).parent().hasClass('active')){
            $(this).find('b').stop(true).animate({'top':-10}, 150,'easeOutCubic').animate({'top':100}, 400,'easeOutCubic');
			$(this).find('strong').stop(true).delay(150).animate({'top':-20}, 300,'easeOutCubic');

        }					   
    }, function(){
        if(!$(this).parent().hasClass('active')){
    	     $(this).find('b').stop(true).animate({'top':0}, 300,'easeOutCubic');
			 $(this).find('strong').stop(true).animate({'top':-100}, 200,'easeOutCubic');
        }						   
    });
	
	var hashN = window.location.hash;
	
	$('#menu a').each(function(){
		var x = $(this).attr('href');
	if ( x == hashN ) { $(this).parent().addClass('active');}
	});
	
	$("#wrapper").click(
    function() {
    }
	);

	
	$('#thumb-list li').hover(function()
    {
        if(!$(this).hasClass('current-thumb')){
            $(this).find('span').stop().animate({ opacity:1}, aniButtonDuration,'easeOutCubic');
			$(this).find('.thumb_desc_title').stop().animate({'left':0}, aniButtonDuration,'easeOutCubic');
			$(this).find('.thumb_desc_exc').stop().delay(20).animate({'left':0}, aniButtonDuration,'easeOutCubic');
        }					   
    }, function(){
        if(!$(this).hasClass('current-thumb')){
    	    $(this).find('span').stop().animate({opacity:0}, aniButtonDuration,'easeOutCubic');
			titl = $(this).find('.thumb_desc_title').outerWidth();
			$(this).find('.thumb_desc_title').stop().animate({'left':-titl}, 200,'easeOutCubic');
			descr = $(this).find('.thumb_desc_exc').outerWidth();
			$(this).find('.thumb_desc_exc').stop().animate({'left':-descr}, 200,'easeOutCubic');
        }						   
    });
	

	
    $('.description li').each(function(){
            $(this).css({right:'-550px', display:'none'})
    })

	
	
    //resize
   	var mainDIV = $('.main');

    $(window).resize(function()
    {
       
    });
    
	//Touch events	

	z = 0;
	startTime = 0;
	jQuery('#thumb-list li').live("touchstart",function(event){
		event.stopPropagation();
		y = event.originalEvent.touches[0].pageX;
		startTime = event.timeStamp; 
    });
	
	jQuery('#thumb-list li').live('touchmove', function(event){	
		event.preventDefault();
		event.stopPropagation();
		var ul=jQuery(this).parent().width();
		w=jQuery(window).width();
		max_pos=w-ul-103;
		var x = event.originalEvent.touches[0].pageX;
		move = x-y+z;
		if(move>0){move=0;}
		if(move<max_pos){move=max_pos;}
		jQuery(this).parent().css({'-webkit-transform':'translate3d('+move+'px, 0px, 0px)','-webkit-transition':'-webkit-transform 0s linear','-o-transform':'translateX('+move+'px)'});		
	});
	jQuery('#thumb-list li').live("touchend",function(event){	
		currentTime = event.timeStamp;
		time=currentTime-startTime;
		if (time<500){
			if(move<z){
				move=move-241;
				if(move<max_pos){move=max_pos;}
			};
			if(move>z){
				move=move+241;
				if(move>0){move=0;}
				if(move<max_pos){move=max_pos;}
			};		
		jQuery(this).parent().css({'-webkit-transform':'translate3d('+move+'px, 0px, 0px)','-webkit-transition':'-webkit-transform 0.5s linear','-o-transform':'translateX('+move+'px)'});}
		z = move;
	});
         
    /////////////////////////////////////////////////////////////////////////// 
    //                           content switch                              //
    ///////////////////////////////////////////////////////////////////////////
    
    var content=$('#content'),
	    nav=$('.menu');

    

    

    wH = $(window).outerHeight()+5000;
     content.tabs({
		preFu:function(_)
        {
			_.li.css({display:'none', marginTop:-wH});			
		}
		,actFu:function(_)
        {
            if(_.n != 0 && _.pren > 0){
                aniDelay = 600;
            }else{
                 aniDelay = 600;
            }
            
			if(_.curr){
				if (window.location.hash != '#!/home') { 
						$('.description li.active').stop().animate({bottom:-$('.description li.active').height()-70}, 330, 'easeOutExpo', function(){
						$(this).css({bottom:'250px', right:'-550px', display:'none'});
						}); 
				if (vars.is_paused != true) {api.playToggle( );}
				} else {
				if (vars.is_paused == true) {api.playToggle( );}
						_.curr
							.css({'background':'none'});
						$('.description li.active').css({display:'block'}).stop().delay(aniDelay).animate({right:'53px'}, 330, 'easeOutExpo').addClass('active');
				
				};
				_.curr.css({'display':'block'});
				var tt = _.curr.outerHeight()+5000;
				_.curr
					.css({marginTop:-tt});
					
				_.curr
					.stop(true)
					.delay(aniDelay).animate({marginTop:0}, 600, 'easeOutQuart');
				setTimeout(function(){slider.reloadSlider()}, 300);

							$('#menu>li>a, .submenu>li>a').each(function() {
								if($(this).parent().hasClass('active')){
									$(this).find('b').stop().animate({'top':100}, 400,'easeInOutBack');
									$(this).find('strong').stop().delay(300).animate({'top':-20}, 300,'easeOutCubic');
								} else {
									$(this).find('b').stop().animate({'top':0}, 200,'easeOutCubic');
									$(this).find('strong').stop().animate({'top':-100}, 200,'easeOutCubic');
								};
							});
				
            }
			if(_.prev){
				_.prev
					.stop()
					.animate({marginTop:-wH}, 550,'easeInCubic', function(){
					     $(this).css({display:'none'});
					})
            }
		}
	})
    

    nav.navs({
		useHash:true,
        defHash:'#!/home'				
    })	
        
   nav.navs(function(n, _){
		content.tabs(n);
        
	})	     
 
})