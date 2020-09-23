 // Twitch streamers to monitor
var streamers_list = ["ReallyNavi", "TSM_Viss", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var clientId = '6ogczdxknslhmkeg8h0npfbt4y03qy';
var url = '';
var html = "";

var allURL = [];
var allData = {};
var logoLinks = [];
var username = "";
var userlogo = '';

var online_users_html = "";
var offline_users_html = "";

var user_url = '';
var allUserURL = [];


// Build an URL for request
  function makeURL(streamers_list){
    // We should read our streamers list
    for (var i = 0; i < streamers_list.length; i++) {
        // Then we make an url for the one streamer
        channel = streamers_list[i];
        url = 'https://api.twitch.tv/kraken/streams/' + channel + '?client_id=' + clientId;
      
        user_url = 'https://api.twitch.tv/kraken/users/' + channel + '?client_id=' + clientId;
        // store all URLs in array
        allURL[allURL.length] = url; // stream urls
        allUserURL[allUserURL.length] = user_url // user urls;
      }
  }

  function getLogo(allUserURL){
    console.log("kek");
    for (var i = 0; i < allUserURL.length; i++){
      $.ajax({
      type: 'GET',
      url: allUserURL[i],
      async: false,
      dataType: 'json',
      success: function(data) {
        //console.log(data.logo); 
        logoLinks[logoLinks.length] = data.logo;
      },
      error: function() {
        alert('Oops, could not get data!');
      }
    });
    }
     
  }

  // Make a request to Twitch
  function makeRequest(allURL, allUserURL){
     // IT IS CORRECT
     for (var j =0; j < allUserURL.length; j++){
        //console.log(allUserURL[j]);
        $.getJSON(allUserURL[j], function(data) {
          //username = data.display_name;  
       });
     }
     
     for (var i = 0; i < allURL.length; i++) {
        // We make a request to get some info about User
        $.ajax({
          type: 'GET',
          url: allURL[i],
          async: false,
          dataType: 'json',
          success: function(data) {
              console.log(data);    
              data.name = streamers_list[i]; 
              data.userlogo = logoLinks[i];
              // Call the func to build html
              buildElement(data);
          },
          error: function() {
            alert('Oops, could not get data!');
          }
        });    
     }
   }

  function buildElement(data) {
      //console.log(data);
      if(data.stream != null) {
         status = "<span>"+ data.stream.game +"</span>";
         logo = data.userlogo;
         name = data.name;
         link =  "https://www.twitch.tv/"+ name +"/videos/all";
        
        online_users_html += "<div class='row users-wrap'>"
               
                    + "<div class='col-xs-2 logo-wrap'>"
                        + "<img class='img-responsive' src='" + logo + "' >"
                    + "</div>"
                
                    + "<div class='col-xs-3 name-wrap'>"
                      + "<a href='"+ link +"'>"
                        + "<h4 class='text-left'>" + name + "</h4>"
                      + "</a>"
                    //+ "</div>"
                  + "</div>"
    
                      + "<div class='col-xs-7 status-wrap'>"
                      + "<h3 class='text-center'>" + status + "</h3>"
                    //+ "</div>"
                  + "</div>"
                  +"</div>"; 
                  +"</div>"; 
      } else {
         status = "Offline";
         logo = data.userlogo;
         name = data.name;
         link =  "https://www.twitch.tv/"+ name +"/videos/all";
        
        offline_users_html += "<div class='row users-wrap'>"
               
                    + "<div class='col-xs-2 logo-wrap'>"
                        + "<img class='img-responsive' src='" + logo + "' >"
                    + "</div>"
                
                    + "<div class='col-xs-3 name-wrap'>"
                      + "<a href='"+ link +"'>"
                        + "<h4 class='text-left'>" + name + "</h4>"
                      + "</a>"
                    //+ "</div>"
                  + "</div>"
    
                      + "<div class='col-xs-7 status-wrap'>"
                      + "<h3 class='text-center'>" + status + "</h3>"
                    //+ "</div>"
                  + "</div>"
                  +"</div>"; 
                  +"</div>"; 
      }
     
     status = data.stream != null ? "<span>"+ data.stream.game +"</span>" : "Offline";
     logo = data.userlogo;
     name = data.name;
     link =  "https://www.twitch.tv/"+ name +"/videos/all";
      //console.log(link);
     
     html += "<div class='row users-wrap'>"
               
                    + "<div class='col-xs-2 logo-wrap'>"
                        + "<img class='img-responsive' src='" + logo + "' >"
                    + "</div>"
                
                    + "<div class='col-xs-3 name-wrap'>"
                      + "<a href='"+ link +"'>"
                        + "<h4 class='text-left'>" + name + "</h4>"
                      + "</a>"
                    //+ "</div>"
                  + "</div>"
    
                      + "<div class='col-xs-7 status-wrap'>"
                      + "<h3 class='text-center'>" + status + "</h3>"
                    //+ "</div>"
                  + "</div>"
                  +"</div>"; 
                  +"</div>"; 
    
    $('.result_wrap').html(html);
    
  }


$(document).ready(function() {
  
   $('#all-wrap').click(function(){
     $('#all-wrap').addClass('active'); 
     $('#offline-wrap').removeClass('active');
     $('#online-wrap').removeClass('active');
     
     $('.result_wrap').html(html);
  });
  
  $('#online-wrap').click(function(){
   
    $('#online-wrap').addClass('active'); 
    $('#all-wrap').removeClass('active');
    $('#offline-wrap').removeClass('active');
    // Show only online users
    $('.result_wrap').html(online_users_html);
  });
  
  $('#offline-wrap').click(function(){
    $('#offline-wrap').addClass('active'); 
    $('#all-wrap').removeClass('active');
    $('#online-wrap').removeClass('active');
     
    $('.result_wrap').html(offline_users_html);
  });
  
  // Firstly, create necessary URLs
  makeURL(streamers_list);
  
  // Then get some info about streaner
  getLogo(allUserURL);
 
  // Finaly make a request and then build an html;
  makeRequest(allURL, allUserURL);

}); // ends $(document).ready
