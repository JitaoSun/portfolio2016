/*


╋╋┏┳━━┳━━━━┳━━━┳━━━┓┏━━━┳┓╋┏┳━┓╋┏┓┏━━━┳━━━┓┏┓┏━━━┓
╋╋┃┣┫┣┫┏┓┏┓┃┏━┓┃┏━┓┃┃┏━┓┃┃╋┃┃┃┗┓┃┃┃┏━┓┃┏━┓┣┛┃┃┏━━┛
╋╋┃┃┃┃┗┛┃┃┗┫┃╋┃┃┃╋┃┃┃┗━━┫┃╋┃┃┏┓┗┛┃┗┛┏┛┃┃┃┃┣┓┃┃┗━━┓
┏┓┃┃┃┃╋╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┓┃┃╋┃┃┃┗┓┃┃┏━┛┏┫┃┃┃┃┃┃┃┏━┓┃
┃┗┛┣┫┣┓╋┃┃╋┃┏━┓┃┗━┛┃┃┗━┛┃┗━┛┃┃╋┃┃┃┃┃┗━┫┗━┛┣┛┗┫┗━┛┃
┗━━┻━━┛╋┗┛╋┗┛╋┗┻━━━┛┗━━━┻━━━┻┛╋┗━┛┗━━━┻━━━┻━━┻━━━┛


www.jitaosundesign.com 

Last edited Apr 6 

*/



$(document).ready(function(){   


	/////////////////////////////////
	//                             //
	//           opening           //
	//                             //
	/////////////////////////////////

		/* preload */
		$('.enter-left-line').stop(true, true).delay(200).animate({right:"24.5%", width:"6.5%"}, 300);
		var sideBarWidth = $('#side-bar').width()
			if( sideBarWidth == 285 ){
				$(".title").stop(true, true).css({left:"10px", opacity:100});
			}
			if( sideBarWidth == 0 ){
				$(".title").stop(true, true).css({opacity:0,left:"4px"});
			}
		$(".line").stop(true, true).removeClass("line-now").animate({width:"5px", opacity:0.7}, 100 );
		$("#one .line").stop(true, true).addClass("line-now").animate({width:"92px", opacity:1}, 200 );
		$('.enter-link').stop(true, true).animate({marginRight:"-5px", opacity:0}, 100).delay(200).animate({marginRight:0, opacity:1}, 600);
		$('.enter-right-line').stop(true, true).css({right:"-14.5%"}, 100).animate({right:"0"}, 400);
		$('#casestudy-link, #breakdown-link, #viewgallery-link').addClass("not-display");
		$('#demoreel-casestudy, #dna-casestudy, #hypercube-casestudy, #snap-casestudy, #code-casestudy, #rns-casestudy, #gallery, #close-white, #close-black').addClass("not-display");
		$('#demoreel-casestudy, #close-white, #close-black').removeClass("not-display");		
		$('.inner-block h1').delay(0).animate({marginTop:0}, 600).delay(0).animate({opacity:1}, 400);
		$(".dividing-line").delay(600).animate({width:"50px"}, 400);
		$('.inner-block h2').delay(800).animate({opacity:1}, 400);
		$('.project-icon').delay(0).animate({opacity:1, marginTop:0}, 200);
		
	/////////////////////////////////
	//                             //
	//           main nav          //
	//                             //
	/////////////////////////////////

		var sideBg = $("#side-bg");
		var magic = sideBg.css('margin-left');
		console.log(magic);

		//$(".main-nav-link")


		$("#one")
			.hover(function(){
				$("#one .title").stop(true, true).animate({left:"10px", opacity:1}, 200 );
				$("#one .line").stop(true, true).animate({width:"92px", opacity:1}, 200 );
			},function(){
				var sideBarWidth = $('#side-bar').width()
				if( sideBarWidth == 153 ){
					$(".title").stop(true, true).css({left:"10px", opacity:100});
				}
				else if( sideBarWidth == 0 ){
					$("#one .title").stop(true, true).animate({opacity:0,left:"4px"}, 200 );
				}
				$("#one .line").stop(true, true).animate({width:"5px", opacity:0.7}, 100 );
			});// end one
	
		$("#two")
			.hover(function(){
				$("#two .title").stop(true, true).animate({left:"10px", opacity:1}, 200 );
				$("#two .line").stop(true, true).animate({width:"62px", opacity:1}, 200 );
			},function(){
				var sideBarWidth = $('#side-bar').width()
				if( sideBarWidth == 153 ){
					$(".title").stop(true, true).css({left:"10px", opacity:100});
				}
				else if( sideBarWidth == 0 ){
					$("#two .title").stop(true, true).animate({opacity:0,left:"4px"}, 200 );
				}
				$("#two .line").stop(true, true).animate({width:"5px", opacity:0.7}, 100 );
			});// end two
	
		$("#three")
			.hover(function(){
				$("#three .title").stop(true, true).animate({left:"10px", opacity:1}, 200 );
				$("#three .line").stop(true, true).animate({width:"92px", opacity:1}, 200 );
			},function(){
				var sideBarWidth = $('#side-bar').width()
				if( sideBarWidth == 153 ){
					$(".title").stop(true, true).css({left:"10px", opacity:100});
				}
				else if( sideBarWidth == 0 ){
					$("#three .title").stop(true, true).animate({opacity:0,left:"4px"}, 200 );
				}
				$("#three .line").stop(true, true).animate({width:"5px", opacity:0.7}, 100 );
			});// end three
	
		$("#four")
			.hover(function(){
				$("#four .title").stop(true, true).animate({left:"10px", opacity:1}, 200 );
				$("#four .line").stop(true, true).animate({width:"54px", opacity:1}, 200 );
			},function(){
				var sideBarWidth = $('#side-bar').width()
				if( sideBarWidth == 153 ){
					$(".title").stop(true, true).css({left:"10px", opacity:100});
				}
				else if( sideBarWidth == 0 ){
					$("#four .title").stop(true, true).animate({opacity:0,left:"4px"}, 200 );
				}
				$("#four .line").stop(true, true).animate({width:"5px", opacity:0.7}, 100 );
			});// end four
	
		$("#five")
			.hover(function(){
				$("#five .title").stop(true, true).animate({left:"10px", opacity:1}, 200 );
				$("#five .line").stop(true, true).animate({width:"56px", opacity:1}, 200 );
			},function(){
				var sideBarWidth = $('#side-bar').width();
				if( sideBarWidth == 153 ){
					$(".title").stop(true, true).css({left:"10px", opacity:100});
				}
				else if( sideBarWidth == 0 ){
					$("#five .title").stop(true, true).animate({opacity:0,left:"4px"}, 200 );
				}
				$("#five .line").stop(true, true).animate({width:"5px", opacity:0.7}, 100 );
			});// end five
	
		$("#six")
			.hover(function(){
				$("#six .title").stop(true, true).animate({left:"10px", opacity:1}, 200 );
				$("#six .line").stop(true, true).animate({width:"102px", opacity:1}, 200 );
			},function(){
				var sideBarWidth = $('#side-bar').width()
				if( sideBarWidth == 153 ){
					$(".title").stop(true, true).css({left:"10px", opacity:100});
				}
				else if( sideBarWidth == 0 ){
					$("#six .title").stop(true, true).animate({opacity:0,left:"4px"}, 200 );
				}
				$("#six .line").stop(true, true).animate({width:"5px", opacity:0.7}, 100 );
			});// end six
	
		$("#seven")
			.hover(function(){
				$("#seven .title").stop(true, true).animate({left:"10px", opacity:1}, 200 );
				$("#seven .line").stop(true, true).animate({width:"69px", opacity:1}, 200 );
			},function(){
				var sideBarWidth = $('#side-bar').width()
				if( sideBarWidth == 153 ){
					$(".title").stop(true, true).css({left:"10px", opacity:100});
				}
				else if( sideBarWidth == 0 ){
					$("#seven .title").stop(true, true).animate({opacity:0,left:"4px"}, 200 );
				}
				$("#seven .line").stop(true, true).animate({width:"5px", opacity:0.7}, 100 );
			});// end seven
			
	/////////////////////////////////
	//                             //
	//            about            //
	//                             //
	/////////////////////////////////
			
		var headerNavLine = 0

		/* open ABOUT page */
		$("#about").click(function(){
				// sets the source to nothing, stopping the video
				$casestudyFrame0.attr('src','');
				$casestudyFrame1.attr('src',''); 
				$casestudyFrame2.attr('src',''); 
				$casestudyFrame3.attr('src',''); 
				$casestudyFrame4.attr('src',''); 
				// sets it back to the correct link so that it reloads immediately on the next window open
				$casestudyFrame0.attr('src', casestudyVidsrc0);
				$casestudyFrame1.attr('src', casestudyVidsrc1);
				$casestudyFrame2.attr('src', casestudyVidsrc2);
				$casestudyFrame3.attr('src', casestudyVidsrc3);
				$casestudyFrame4.attr('src', casestudyVidsrc4);

			$("#contact-page").stop(true, true).delay(200).animate({opacity:0}, 1000, function(){
					$("#contact-page").css({display:"none"});
					$('#contact-textbody, #contact-mail-send, #contact-mail-meassage, #contact-icons-list, #contact-mail-email, #contact-mail-name, #contact-mail-textbody, #contact-sub-title-zh, #contact-title, #contact-v-line').css({opacity:0});
				});
			$("#about .top-nav-line").stop(true, true).animate({height:"150px", opacity:1}, 200 ).delay(0).animate({height:"75px"}, 200 );
			$("#about-page").stop(true, true).css({display:"block"}).delay(200).animate({opacity:1}, 1000 );
			$("#about-v-line").delay(200).animate({opacity:1}, 1000 );
			$("#about-textbody").delay(400).animate({opacity:1}, 1000 );
			$("#about-name-title").delay(600).animate({opacity:1}, 1000 );
			$("#about-image, #about-sub-title-zh, #about-title").delay(800).animate({opacity:1}, 1000 );
			$(".about-close").stop(true, true).css({width:"15px", height:"15px"}).delay(200).animate({opacity:1}, 1000 );
			$("#side-bar").addClass("not-display");
			$(".casestudy").stop(true, true).animate({left:"100%"}, 100 );
			$('.close-casestudy').stop(true, true).animate({opacity:0}, 100 );
			$("#contact .top-nav-line").stop(true, true).animate({height:"9px"}, 400);
			$.fn.fullpage.setAllowScrolling(false);
			headerNavLine = 1
			console.log(headerNavLine);

		});		

		/* close ABOUT page*/		
		$(".about-close, .logo").click(function(){
			$(".top-nav-line").stop(true, true).animate({height:"9px"}, 600 );
			$("#about-page").stop(true, true).animate({opacity:0}, 600, function(){
					$("#about-page").css({display:"none"});
					$('#about-textbody, #about-name-title, #about-image, #about-sub-title-zh, #about-title, #about-v-line').css({opacity:0});
				});
			$(".about-close").stop(true, true).animate({opacity:0}, 600 , function(){
				$(this).css({width:0, height:0});
			});
			$("#side-bar").removeClass("not-display");
			$.fn.fullpage.setAllowScrolling(true);
			headerNavLine = 0
			console.log(headerNavLine);
		});

	/////////////////////////////////
	//                             //
	//          contact            //
	//                             //
	/////////////////////////////////

		/* open CONTACT page */
		$("#contact").click(function(){
				// sets the source to nothing, stopping the video
				$casestudyFrame0.attr('src','');
				$casestudyFrame1.attr('src',''); 
				$casestudyFrame2.attr('src',''); 
				$casestudyFrame3.attr('src',''); 
				$casestudyFrame4.attr('src',''); 
				// sets it back to the correct link so that it reloads immediately on the next window open
				$casestudyFrame0.attr('src', casestudyVidsrc0);
				$casestudyFrame1.attr('src', casestudyVidsrc1);
				$casestudyFrame2.attr('src', casestudyVidsrc2);
				$casestudyFrame3.attr('src', casestudyVidsrc3);
				$casestudyFrame4.attr('src', casestudyVidsrc4);
			
			$("#about-page").stop(true, true).delay(200).animate({opacity:0}, 1000, function(){
					$("#about-page").css({display:"none"});
					$('#about-textbody, #about-name-title, #about-image, #about-sub-title-zh, #about-title, #about-v-line').css({opacity:0});
				});
			$("#contact .top-nav-line").stop(true, true).animate({height:"150px", opacity:1}, 200 ).delay(0).animate({height:"75px"}, 200 );
			$("#contact-page").stop(true, true).css({display:"block"}).delay(200).animate({opacity:1}, 1000 );
			$("#contact-v-line").delay(200).animate({opacity:1}, 1000 );
			$("#contact-mail-send").delay(200).animate({opacity:1}, 1000 );
			$("#contact-mail-meassage, #contact-icons-list").delay(400).animate({opacity:1}, 1000 );
			$("#contact-mail-email, #contact-textbody").delay(600).animate({opacity:1}, 1000 );
			$("#contact-mail-name, #contact-sub-title-zh").delay(800).animate({opacity:1}, 1000 );
			$("#contact-mail-textbody, #contact-title").delay(1000).animate({opacity:1}, 1000 );
			$(".about-close").stop(true, true).css({width:"15px", height:"15px"}).delay(200).animate({opacity:1}, 1000 );
			$("#side-bar").addClass("not-display");
			$(".casestudy").stop(true, true).animate({left:"100%"}, 100 );
			$('.close-casestudy').stop(true, true).animate({opacity:0}, 100 );
			$("#about .top-nav-line").stop(true, true).animate({height:"9px"}, 400);								
			$.fn.fullpage.setAllowScrolling(false);
			headerNavLine = 2
			console.log(headerNavLine);

		});		

		/* close CONTACT page*/		
		$(".about-close, .logo").click(function(){
			$(".top-nav-line").stop(true, true).animate({height:"9px"}, 600 );
			$("#contact-page").stop(true, true).animate({opacity:0}, 600, function(){
					$("#contact-page").css({display:"none"});
					$('#contact-textbody, #contact-mail-send, #contact-mail-meassage, #contact-icons-list, #contact-mail-email, #contact-mail-name, #contact-mail-textbody, #contact-sub-title-zh, #contact-title, #contact-v-line').css({opacity:0});
				});
			$(".about-close").stop(true, true).animate({opacity:0}, 600 , function(){
				$(this).css({width:0, height:0});
			});
			$("#side-bar").removeClass("not-display");
			$.fn.fullpage.setAllowScrolling(true);
			headerNavLine = 0
			console.log(headerNavLine);
		});

	/////////////////////////////////
	//                             //
	//         header nav          //
	//                             //
	/////////////////////////////////

		/* top nav */
		$("#about, #contact")
			.mouseenter(function(){
				console.log(headerNavLine);
				if ( headerNavLine == 1 ){
					$('#about').find(".top-nav-line").stop(true, true).css({height:"75px", opacity:1});
					$('#contact').find(".top-nav-line").stop(true, true).animate({height:"50px", opacity:1}, 200 );
				}
				else if ( headerNavLine == 2){
					$('#contact').find(".top-nav-line").stop(true, true).css({height:"75px", opacity:1});
					$('#about').find(".top-nav-line").stop(true, true).animate({height:"50px", opacity:1}, 200 );
				}						
				else if ( headerNavLine == 0){
					$(this).find(".top-nav-line").stop(true, true).animate({height:"50px", opacity:1}, 200 );
				}

			})
			.mouseleave(function(){
				console.log(headerNavLine);
				if ( headerNavLine == 1 ){
					$('#about').find(".top-nav-line").stop(true, true).css({height:"75px", opacity:1});
					$('#contact').find(".top-nav-line").stop(true, true).animate({height:"9px", opacity:0.7}, 100 );		
				}
				else if ( headerNavLine == 2){
					$('#contact').find(".top-nav-line").stop(true, true).css({height:"75px", opacity:1});
					$('#about').find(".top-nav-line").stop(true, true).animate({height:"9px", opacity:0.7}, 100 );		
				}						
				else if ( headerNavLine == 0){
					$(this).find(".top-nav-line").stop(true, true).animate({height:"9px", opacity:0.7}, 100 );		
				}
			});

	/////////////////////////////////
	//                             //
	//         buger icon          //
	//                             //
	/////////////////////////////////
			
		/* mouse stay in the side nav when the bg turned on */
		$("#side-bg")
			.mouseenter(function(){
				$("#nav-graphic, #back-graphic").addClass("nobackground");
				$("#side-bar nav").css({display:"block"});
				$(".title").stop(true, true).css({left:"10px", opacity:100}, 200 );
				$(this).stop(true, true).css({marginLeft:"-32px"}, 200 );
				$("#side-bar").css({width:"185px"});
				var sideBarWidth = $('#side-bar').width()
				console.log(sideBarWidth);
			});


		/* turn on the side nav */
		$("#nav-graphic")
			.mouseenter(function(){
				$("#nav-graphic, #back-graphic").addClass("nobackground");
				$("#side-bar nav").css({display:"block"});
				$(".title").stop(true, true).animate({left:"10px", opacity:100}, 200 );
				$("#side-bg").stop(true, true).animate({marginLeft:"-32px"}, 200 );
				$("#side-bar").css({width:"153px"});
				var sideBarWidth = $('#side-bar').width()
				console.log(sideBarWidth);
			});	


		/* turn off the side nav */	
		$(".section")
				.mouseover(function(){					
				if ($(window).width() < 1024) {
						$("#side-bar nav").css({display:"none"});
				}
				if ($(window).width() > 1025) {
						$("#side-bar nav").css({display:"block"});
				}
				$("#nav-graphic, #back-graphic").removeClass("nobackground");
				$(".title").stop(true, true).animate({opacity:0,left:"4px"}, 200 );
				$("#side-bg").stop(true, true).animate({marginLeft:"-217px"}, 200 );
				$("#side-bar").css({width:0});
				var sideBarWidth = $('#side-bar').width()
				console.log(sideBarWidth);
			});		
			
		/* side nav download links */	
		$("#download-resume,#download-pdf")
			.hover(function(){
				$(this).find(".download-icon").stop(true, true).delay(100).animate({marginTop:"-13px", opacity:0.8},300);
				$(this).find(".side-download-title").animate({marginLeft:"16px"},300);
			},function(){
				$(this).find(".download-icon").stop(true, true).animate({marginTop:"-20px", opacity:0},300);
				$(this).find(".side-download-title").delay(100).animate({marginLeft:0},300);
			});				
		
	/////////////////////////////////
	//                             //
	//         casestudy           //
	//                             //
	/////////////////////////////////

		var $casestudyFrame0 = $('iframe#casestudy-video0');
		// saves the current iframe source
		var casestudyVidsrc0 = $casestudyFrame0.attr('src');

		var $casestudyFrame1 = $('iframe#casestudy-video1');
		// saves the current iframe source
		var casestudyVidsrc1 = $casestudyFrame1.attr('src');

		var $casestudyFrame2 = $('iframe#casestudy-video2');
		// saves the current iframe source
		var casestudyVidsrc2 = $casestudyFrame2.attr('src');

		var $casestudyFrame3 = $('iframe#casestudy-video3');
		// saves the current iframe source
		var casestudyVidsrc3 = $casestudyFrame3.attr('src');

		var $casestudyFrame4 = $('iframe#casestudy-video4');
		// saves the current iframe source
		var casestudyVidsrc4 = $casestudyFrame4.attr('src');


		var casestudyActive = 0
		console.log(casestudyActive);
		/* open CASESTUDY page */
		$(".enter-link").click(function(){
			if ($(window).width() < 1024) {
				$(".casestudy").stop(true, true).animate({left:0, opacity:100}, 600 );
			}
			else if ($(window).width() > 1025) {
				$(".casestudy").stop(true, true).animate({left:"185px", opacity:100}, 600 );
			}	
			$('.close-casestudy').stop(true, true).delay(600).animate({opacity:1}, 1000 );
			$.fn.fullpage.setAllowScrolling(false);
			$('#section0 video').animate({opacity:0}, 600);

			casestudyActive = 1
			console.log(casestudyActive);
		});		


		/* close CASESTUDY page */		
		$(".main-nav-link, .logo, .close-casestudy").click(function(){

			$(".casestudy").stop(true, true).animate({left:"100%", opacity:0}, 200 , function(){
				// sets the source to nothing, stopping the video
				$casestudyFrame0.attr('src','');
				$casestudyFrame1.attr('src',''); 
				$casestudyFrame2.attr('src',''); 
				$casestudyFrame3.attr('src',''); 
				$casestudyFrame4.attr('src',''); 
				// sets it back to the correct link so that it reloads immediately on the next window open
				$casestudyFrame0.attr('src', casestudyVidsrc0);
				$casestudyFrame1.attr('src', casestudyVidsrc1);
				$casestudyFrame2.attr('src', casestudyVidsrc2);
				$casestudyFrame3.attr('src', casestudyVidsrc3);
				$casestudyFrame4.attr('src', casestudyVidsrc4);
			});
			$('.close-casestudy').stop(true, true).animate({opacity:0}, 100 );
			$.fn.fullpage.setAllowScrolling(true);
			$('#section0 video').animate({opacity:100}, 200);
			casestudyActive = 0
			console.log(casestudyActive);
		});

	/////////////////////////////////
	//                             //
	//          demoreel           //
	//                             //
	/////////////////////////////////

		var $frame = $('iframe#home-reel-video-frame');
		// saves the current iframe source
		var vidsrc = $frame.attr('src');
		
		$frame.attr('src',''); 

		$("#demoreel-icon, #section0 h1, #section0 h2").click(function(){
			$("#home-reel, #close-home-reel").css({display:"block"}).animate({opacity:100}, 800 );
			$.fn.fullpage.setAllowScrolling(false);
			// sets it back to the correct link so that it reloads immediately on the next window open
			$frame.attr('src', vidsrc);
		});

		$("#close-home-reel").click(function(){
			$("#home-reel, #close-home-reel").animate({opacity:0}, 800, function(){
				$(this).css({display:"none"});
				// sets the source to nothing, stopping the video
				$frame.attr('src',''); 
			});
			$.fn.fullpage.setAllowScrolling(true);
		});

		$(document).keyup(function(e) {
	     if (e.keyCode == 27) { // escape key maps to keycode `27`
			$("#home-reel, #close-home-reel").animate({opacity:0}, 800, function(){
				$(this).css({display:"none"});
				// sets the source to nothing, stopping the video
				$frame.attr('src',''); 
			});
			$.fn.fullpage.setAllowScrolling(true);
		    }
		});

	/////////////////////////////////
	//                             //
	//           gallery           //
	//                             //
	/////////////////////////////////

	/////////////////////////////////
	//                             //
	//       window resize         //
	//                             //
	/////////////////////////////////

		$(window).resize(function(){
			if( casestudyActive == 1  ){
				if ($(window).width() < 1024) {
					$(".casestudy").stop(true, true).css({left:0});
				}
				else if ($(window).width() > 1024) {
					$(".casestudy").stop(true, true).css({left:"185px"});
				}
			}

			if ($(window).width() < 1025) {
					$("#side-bar nav").css({display:"none"});
			}
			if ($(window).width() > 1024) {
					$("#side-bar nav").css({display:"block"});
			}

		});

	/////////////////////////////////
	//                             //
	//         page scroll         //
	//                             //
	/////////////////////////////////

		$('#fullpage').fullpage({


			continuousVertical: true,
			verticalCentered: false,
			anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', 'lastPage'],
			menu: '#menu',

			onLeave: function(){

				$('.inner-block h2, .inner-block h1, .dividing-line, .project-icon').animate({opacity:0}, 200, function(){
						$('.inner-block h1').css({marginTop:"-200px"});
						$('.dividing-line').css({opacity:1, width:0});
						$('.project-icon').css({marginTop:0});
				});
	        },

			afterLoad: function(anchorLink, index){

				/* after scroll to a page  */
				var sideBarWidth = $('#side-bar').width()
					if( sideBarWidth == 285 ){
						$(".title").stop(true, true).css({left:"10px", opacity:100});
					}
					if( sideBarWidth == 0 ){
						$(".title").stop(true, true).css({opacity:0,left:"4px"});
					}
				$(".line").stop(true, true).removeClass("line-now").animate({width:"5px", opacity:0.7}, 100 );
				$('.enter-link').stop(true, true).animate({marginRight:"-5px", opacity:0}, 100).delay(200).animate({marginRight:0, opacity:1}, 600);
				$('.enter-right-line').stop(true, true).css({right:"-14.5%"}, 100).animate({right:"0"}, 400);
				$('#casestudy-link, #breakdown-link, #viewgallery-link').addClass("not-display");
				$('#demoreel-casestudy, #dna-casestudy, #hypercube-casestudy, #snap-casestudy, #code-casestudy, #rns-casestudy, #gallery, #close-white, #close-black').addClass("not-display");
				$('.inner-block h1').delay(0).animate({marginTop:0}, 600).delay(0).animate({opacity:1}, 400);
				$(".dividing-line").delay(600).animate({width:"50px"}, 400);
				$('.inner-block h2').delay(800).animate({opacity:1}, 400);
				$('.project-icon').delay(0).animate({opacity:1, marginTop:0}, 200);



				/*demo reel*/
				if(index == 1){
					$("#one .line").stop(true, true).addClass("line-now").animate({width:"92px", opacity:1}, 200 );
					$('.enter-left-line').stop(true, true).animate({right:"20%", width:0}, 100).delay(200).animate({right:"24.5%", width:"6.5%"}, 300);
					$('#breakdown-link').stop(true, true).removeClass("not-display");
					$('#demoreel-casestudy, #close-black').stop(true, true).removeClass("not-display");

				}

				/*dna*/
				if(index == 2){
					$("#two .line").stop(true, true).addClass("line-now").animate({width:"62px", opacity:1}, 200 );
					$('.enter-left-line').stop(true, true).animate({right:"20%", width:0}, 100).delay(200).animate({right:"24.5%", width:"12.5%"}, 300);
					$('#casestudy-link').stop(true, true).removeClass("not-display");
					$('#dna-casestudy, #close-white').stop(true, true).removeClass("not-display");
				}

				/*hypercube*/
				if(index == 3){
					$("#three .line").stop(true, true).addClass("line-now").animate({width:"92px", opacity:1}, 200 );
					$('.enter-left-line').stop(true, true).animate({right:"20%", width:0}, 100).delay(200).animate({right:"24.5%", width:"5.2%"}, 300);
					$('#casestudy-link').stop(true, true).removeClass("not-display");
					$('#hypercube-casestudy, #close-white').stop(true, true).removeClass("not-display");
				}

				/*snap*/
				if(index == 4){
					$("#four .line").stop(true, true).addClass("line-now").animate({width:"54px", opacity:1}, 200 );
					$('.enter-left-line').stop(true, true).animate({right:"20%", width:0}, 100).delay(200).animate({right:"24.5%", width:"15%"}, 300);
					$('#casestudy-link').stop(true, true).removeClass("not-display");
					$('#snap-casestudy, #close-white').stop(true, true).removeClass("not-display");
				}
				
				/*code*/
				if(index == 5){
					$("#five .line").stop(true, true).addClass("line-now").animate({width:"55px", opacity:1}, 200 );
					$('.enter-left-line').stop(true, true).animate({right:"20%", width:0}, 100).delay(200).animate({right:"24.5%", width:"14.5%"}, 300);
					$('#casestudy-link').stop(true, true).removeClass("not-display");
					$('#code-casestudy, #close-white').stop(true, true).removeClass("not-display");
				}

				/*ride n style*/
				if(index == 6){
					$("#six .line").stop(true, true).addClass("line-now").animate({width:"102px", opacity:1}, 200 );
					$('.enter-left-line').stop(true, true).animate({right:"20%", width:0}, 100).delay(200).animate({right:"24.5%", width:"2.2%"}, 300);
					$('#casestudy-link').stop(true, true).removeClass("not-display");
					$('#rns-casestudy, #close-white').stop(true, true).removeClass("not-display");

				}

				/*gallery*/
				if(index == 7){
					$("#seven .line").stop(true, true).addClass("line-now").animate({width:"69px", opacity:1}, 200 );
					$('.enter-left-line').stop(true, true).animate({right:"20%", width:0}, 100).delay(200).animate({right:"24.5%", width:"9.5%"}, 300);
					$('#viewgallery-link').stop(true, true).removeClass("not-display");
					$('#gallery, #close-white').stop(true, true).removeClass("not-display");
				}

			}// end of afterLoad
		});

}); // end of document ready
