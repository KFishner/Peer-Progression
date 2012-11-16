
$(document).ready(function() {

/*---------------------------------------*/
/*           Load Revs as Vars           */
/*---------------------------------------*/
  
  var image = ["<img id='0' class='imageholder' src='images/full/sketch.jpg' height='500px'/>", "<img id='1' class='imageholder' src='images/full/proto.jpg' height='500px'/>", "<div id='2'><iframe src='revisions/Tradefours/110412/index.html' frameborder='0' width='1100px' height='500px'></iframe></div>", "<iframe id='3' src='index.html' frameborder='0' width='1100px' height='500px'></iframe>"]
  var rsummary = ["<p>This was my original sketch for a visual project management tool that promotes constructive dissention, rather than blind collaboration.</p>", "<p>Graphical interpretation of the sketch. I want the design to emphasize the changes made, and the justifications and inspirations for those changes. Must promote conflict of ideas, but constructively.</p>"];
  var link1 = ["<a href='http://www.stevenberlinjohnson.com/' target='_blank'>Steven Johnson</a>", "<a href='http://www.heroku.com/' target='_blank'>Heroku</a>" ]
  var explain1 = ["<span>Peer progressivism and collaboration as conflict</span>", "<span>Borrowed the dark design, used blue instead of purple as accent. Hoping to keep focus on the product changes</span>" ]
  var link2 = ["<a href='http://startupschool.org/' target='_blank'>Startup School</a>", "<a href='http://layervault.org/' target='_blank'>Layer Vault</a>" ]
  var explain2 = ["<span>Conversations with Nimi about online product collaboration tools</span>","<span>Visual focus, revision timelines</span>"]

  var arr0 = [image[0], rsummary[0], link1[0], explain1[0], link2[0], explain2[0]]
  var arr1 = [image[1], rsummary[1], link1[1], explain1[1], link2[1], explain2[1]]
  var arr2 = [image[2]]
  var arr3 = [image[3]]


  var revarray = [arr0, arr1, arr2, arr3]


/*-------------------------------------*/
/*           Add New Project           */
/*-------------------------------------*/
    $("#addnewproject").click(
      function () {
	var detach = $('#addnewtitle').children()
	detach.detach()
	var projectinputs = "<input id='projecttitle' type='text' size='14' value='Title'><br><textarea id='projectdesc' rows='2' cols='10'></textarea><div class='forkbutton' id='newproject'>Add</div>"
	$('#addnewtitle').append(projectinputs);
    
    $("#newproject").click(
      function(){
      var title = $('#projecttitle').val();
      var desc = $('#projectdesc').val();

      $('#insertnew').append("<div class='gridfour'><div class='gridtext'>" + title + "<p>" + desc + "</p></div><a href=" + title + ".html><div class='gridimage'></div></a></div>");

      });      });




/*--------------------------------------*/
/*          Revision Selection          */
/*--------------------------------------*/
    $("#rev0").click(
      function () {
	$('#leftnav').css('display','block');
	$('#insertnew,#link1,#explain1,#link2,#explain2,#revisionsummary').children().detach();
        $('#insertnew').append(revarray[0][0])
        $('#revisionsummary').append(revarray[0][1])
	$('#link1').append(revarray[0][2])
	$('#explain1').append(revarray[0][3])
	$('#link2').append(revarray[0][4])
	$('#explain2').append(revarray[0][5])
      }
    );
    
    $("#rev1").click(
      function () {
	$('#leftnav').css('display','block');
	$('#insertnew,#link1,#explain1,#link2,#explain2,#revisionsummary').children().detach();
        $('#insertnew').append(revarray[1][0])
        $('#revisionsummary').append(revarray[1][1])
	$('#link1').append(revarray[1][2])
	$('#explain1').append(revarray[1][3])
	$('#link2').append(revarray[1][4])
	$('#explain2').append(revarray[1][5])
      }
    );

    $("#rev2").click(
      function () {
	$('#leftnav').css('display','block');
	$('#insertnew,#link1,#explain1,#link2,#explain2,#revisionsummary').children().detach();
        $('#insertnew').append(revarray[2][0]);
	
      }
    );
    $("#rev3").click(
      function () {
	$('#leftnav').css('display','block');
	$('#insertnew,#link1,#explain1,#link2,#explain2,#revisionsummary').children().detach();
        $('#insertnew').append(revarray[3][0]);
	
      }
    );
/*--------------------------------------*/
/*          Revision Scrolling          */
/*--------------------------------------*/

    $("#button3").click(
      function () {
	var currentrev = parseInt($("#insertnew").children(0).attr('id'),10)
    if ( currentrev == 0)
    {
    var previous = 0
    }else{
    var previous = currentrev -1
    }
	$('#insertnew,#link1,#explain1,#link2,#explain2,#revisionsummary').children().detach();
        $('#insertnew').append(revarray[previous][0])
        $('#revisionsummary').append(revarray[previous][1])
	$('#link1').append(revarray[previous][2])
	$('#explain1').append(revarray[previous][3])
	$('#link2').append(revarray[previous][4])
	$('#explain2').append(revarray[previous][5])
    });
    $("#button4").click(
      function () {
	var currentrev = parseInt($("#insertnew").children(0).attr('id'),10)
    if ( currentrev == revarray.length -1)
    {
    var next = revarray.length -1
    }else{
    var next = currentrev +1
    }
	$('#insertnew,#link1,#explain1,#link2,#explain2,#revisionsummary').children().detach();
        $('#insertnew').append(revarray[next][0])
        $('#revisionsummary').append(revarray[next][1])
	$('#link1').append(revarray[next][2])
	$('#explain1').append(revarray[next][3])
	$('#link2').append(revarray[next][4])
	$('#explain2').append(revarray[next][5])
    });
    
/*------------------------*/
/*          Share         */
/*------------------------*/
    $("#button2").click(
      function () {
    $("#rightnav").toggle('slide', { direction: "right" },'slow');
    var socialnav = "<ul class='nav2'><li id='twitter'><a target='_blank' href='http://twitter.com/?status=Checkout what I just built! http://www.tradefours.com/share/nW7q+%23Tradefours'><img src='images/icons/twitter.jpg'/></a></li><li><a href='https://www.facebook.com/sharer/sharer.php?u=Checkout what I just built! http://www.tradefours.com/share/nW7q' target='_blank'><img id='facebook' src='images/icons/facebook.png'/></a></li></ul><br><br>";
    var position = $('#holder').css('right');
    if ( position == '150px')
    {
        $("#holder").animate({
            'right':"0px",}
            ,600, function(){
        // Animation complete.
            });;
    }else{
        $("#holder").animate({
            'right':"150px"}
            ,600, function(){
        // Animation complete.
            });;
    }
	$('#details,#link1,#explain1,#link2,#explain2').children().detach();
	$('#details').prepend("<h2>Share</h2>");
	$('#details').append("<p id='sharelink'>http://www.tradefours.com/share/nW7q</p>");
	$('#details').append(socialnav)

	
      }
    );

/*---------------------------------*/
/*          Add Revision           */
/*---------------------------------*/

    $("#button5,#revnew").click(
      function () {
	$('#leftnav').css('display','block');
	$('#insertnew').children().detach();
	$('#details,#revisionsummary,#link1,#explain1,#link2,#explain2').children().detach();
	$('#details').append("<h2 id='revisionsummary'>Revision Summary</h2>",
			     "<h2 id='inspiration'>Inspiration</h2>",
			     "<div class='links' id='link1'></div>",
			     "<div class='explainations' id='explain1'></div>",
			     "<div class='links' id='link2'></div>",
			     "<div class='explainations' id='explain2'></div><br>",
			     "<div class='forkbutton' id='preview'>Preview</div>");
        $('#revisionsummary').append("<div id='summaryinsert'><textarea id='inputsummary' rows='3' cols='40' value='Describe your revision' class='greyfont' ></textarea></div>");
	$('.links').css("width", "303")
	$('#link1').append("<span><input id='inputtitle1' type='text' size='22' value='title' class='greyfont'><input id='inputlink1' type='text' size='22' value='link' class='greyfont'></span>")
	$('#explain1').append("<span><input id='inputexplain1' type='text' size='50' value='explanation' class='greyfont'></span>")
	$('#link2').append("<span><input id='inputtitle2' type='text' size='22' value='title' class='greyfont'><input id='inputlink2' type='text' size='22' value='link' class='greyfont'></span>")
	$('#explain2').append("<span><input id='inputexplain2' type='text' size='50' value='explanation' class='greyfont'></span>")


    
    $("#rightnav").toggle('slide', { direction: "right" },'slow');
    
    var position = $('#holder').css('right');
    if ( position == '150px')
    {
        $("#holder").animate({
            'right':"0px",}
            ,600, function(){
        // Animation complete.
            });;
    }else{
        $("#holder").animate({
            'right':"150px"}
            ,600, function(){
        // Animation complete.
            });;
    }

    if ( $("#inputfilerev").is('*') ) // Prepend File Upload Button
    {}else{
	$('#details').prepend("<h2>Revision</h2><input id='inputfilerev' type='file'>");
      }

    $("#preview").click(function(){ //Preview New Revision
	var msg = $('#inputsummary').val();
	var title1 = $('#inputtitle1').val();
	var link1 = $('#inputlink1').val();
	var explain1 = $('#inputexplain1').val();
	var title2 = $('#inputtitle2').val();
	var link2 = $('#inputlink2').val();
	var explain2 = $('#inputexplain2').val();

	$('#revisionsummary,#link1,#explain1,#link2,#explain2').children().detach();

	$('#revisionsummary').append("<p>"+msg+"</p>");
    	$('#link1').append("<a href='" + link1 + "' target='_blank'>" + title1 + "</a>")
	$('#explain1').append(explain1)
    	$('#link2').append("<a href='" + link2 + "' target='_blank'>" + title2 + "</a>")
	$('#explain2').append(explain2)
	$('#preview').text("Add")
      });
    
  });


/*---------------------------------*/
/*          Right Nav Slider       */
/*---------------------------------*/

    $("#button1").click(
      function () {
	var currentrev = parseInt($("#insertnew").children(0).attr('id'),10)
	$('#insertnew,#details,#revisionsummary,#link1,#explain1,#link2,#explain2').children().detach();
	$('#details').append("<h2 id='revisionsummary'>Revision Summary</h2>",
			     "<h2 id='inspiration'>Inspiration</h2>",
			     "<div class='links' id='link1'></div>",
			     "<div class='explainations' id='explain1'></div>",
			     "<div class='links' id='link2'></div>",
			     "<div class='explainations' id='explain2'></div>",
			     "<br><a class='forkbutton' id='preview'>Edit</a>");
        $('#insertnew').append(revarray[currentrev][0])
        $('#revisionsummary').append(revarray[currentrev][1])
	$('#link1').append(revarray[currentrev][2])
	$('#explain1').append(revarray[currentrev][3])
	$('#link2').append(revarray[currentrev][4])
	$('#explain2').append(revarray[currentrev][5])
    
	$("#rightnav").toggle('slide', { direction: "right" },'slow');

    var position = $('#holder').css('right');
    if ( position == '150px')
    {
        $("#holder").animate({
            'right':"0px",}
            ,600, function(){
        // Animation complete.
            });;
    }else{
        $("#holder").animate({
            'right':"150px"}
            ,600, function(){
        // Animation complete.
            });;
    }
 
        }
      );

        
        
/*----------------------------------*/
/*          Left Nav Hover          */
/*----------------------------------*/

    $("#button1").hover(
      function () {
        $(this).addClass("nbuttonhover").append('<p>Summary</p>');
      }, 
      function () {
        $(this).removeClass("nbuttonhover").find("p:last").remove();
      }
    );

    $("#button2").hover(
      function () {
        $(this).addClass("nbuttonhover").append('<p>Share</p>');
      }, 
      function () {
        $(this).removeClass("nbuttonhover").find("p:last").remove();
      }
    );
    $("#button3").hover(
      function () {
        $(this).addClass("nbuttonhover").append('<p>Previous</p>');
      }, 
      function () {
        $(this).removeClass("nbuttonhover").find("p:last").remove();
      }
    );
    $("#button4").hover(
      function () {
        $(this).addClass("nbuttonhover").append('<p>Next</p>');
      }, 
      function () {
        $(this).removeClass("nbuttonhover").find("p:last").remove();
      }
    );
    $("#button5").hover(
      function () {
        $(this).addClass("nbuttonhover").append('<p>Add Revision</p>');
      }, 
      function () {
        $(this).removeClass("nbuttonhover").find("p:last").remove();
      }
    );


/*----------------------------------*/
/*               Date               */
/*----------------------------------*/

    
});