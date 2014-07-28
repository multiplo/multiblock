/**
 Copyright 2014 Gordon Williams (gw@pur3.co.uk)

 This Source Code is subject to the terms of the Mozilla Public
 License, v2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 
 ------------------------------------------------------------------
  'About' Settings Page 
 ------------------------------------------------------------------
**/
"use strict";
(function(){
  
  function getVersion(callback) 
  {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'manifest.json');
    xmlhttp.onload = function (e) {
        var manifest = JSON.parse(xmlhttp.responseText);
        callback(manifest.version);
    }
    xmlhttp.send(null);
  }

  function init() {

    getVersion(function(version){

      Espruino.Core.Config.addSection("About", {
        description : "About the Espruino Web IDE v"+ version,
        sortOrder : -1000,
        getHTML : function(callback) {      
          $.get("/data/settings_about.html", function(data) {
            callback(data);
            var html;
            if (Object.keys(Espruino.Core.Env.getBoardData()).length > 0)
              html = Espruino.Core.Utils.htmlTable(Espruino.Core.Env.getBoardData());
            else
              html = "<p>Unable to get board information</p>";
            $('.board_info').html( html );
          });
        }
      });

    });

    
  }
  
  Espruino.Core.SettingsAbout = {
    init : init,
  };
}());