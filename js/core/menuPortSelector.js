/**
 Copyright 2014 Gordon Williams (gw@pur3.co.uk)

 This Source Code is subject to the terms of the Mozilla Public
 License, v2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 
 ------------------------------------------------------------------
  List of Serial Ports, and handles connection and disconnection
 ------------------------------------------------------------------
**/
"use strict";
(function(){
  
  var connectButton;
  var lastContents = undefined;
  
  function init() 
  {
    connectButton = Espruino.Core.App.addIcon({ 
      id: "connection",
      icon: "connect", 
      title : "Connect / Disconnect", 
      order: -1000, 
      area: {
        name: "toolbar",
        position: "left"
      },
      click: toggleConnection
    });
    
    Espruino.addProcessor("connected", function(data, callback) {
      connectButton.setIcon("disconnect");
      callback(data);
    });

    Espruino.addProcessor("disconnected", function(data, callback) {
      connectButton.setIcon("connect");
      callback(data);
    });    
  }
 
  function toggleConnection() {
    if (Espruino.Core.Serial.isConnected()) {
      disconnect();
    } else {
      createPortSelector();
    }
  }
  
  function createPortSelector(callback) {
    var checkInt, popup;

    function selectPort() {
      Espruino.Core.Status.setStatus("Connecting...");
      connectToPort($(this).data("port"), function(success){
        if(success){
          popup.close();
          $(".window--modal").off("click", ".port-list__item a", selectPort);
          if (callback!==undefined) callback();
        }
      });
    }

    function getPorts() {
      Espruino.Core.Serial.getPorts(function(items) {

        if (items.toString() == lastContents) 
          return; // same... don't update
        lastContents = items.toString();
      

        var html;

        if(items && items.length > 0){
          html = '<ul class="port-list">';
          for (var i in items) {
            var port = items[i];
            html += '<li class="port-list__item">'+
                      '<a title="'+ port +'" class="button button--icon button--wide" data-port="'+ port +'">'+
                        '<i class="icon-usb lrg button__icon"></i>'+
                        '<span class="port-list__item__name">'+ port +'</span>'+
                      '</a>'+
                    '</li>';
          }
          html += '</ul>';   
        } else {
          html = "<h2 class='port-list__no-results'>Searching...</h2>"
        } 

        popup.setContents(html);   

      });
    }

    // force update
    lastContents = undefined;
    // Launch the popup
    popup = Espruino.Core.App.openPopup({
      title: "Select a port...",
      contents: "Loading...",
      position: "center",
    });

    $(".window--modal").on("click", ".port-list__item a", selectPort);

    // Setup checker interval
    checkInt = setInterval(getPorts, 1000);
    getPorts();


    // Make sure any calls to close popup, also clear
    // the port check interval
    var oldPopupClose = popup.close;
    popup.close = function()
    {
      clearInterval(checkInt);
      oldPopupClose();
      popup.close = oldPopupClose;
    }

  }

  function connectToPort(serialPort, callback) 
  {
    if (!serialPort) {
      Espruino.Core.Notifications.error("Invalid Serial Port");
      return;
    }

    Espruino.Core.Serial.setSlowWrite(true);
    Espruino.Core.Serial.open(serialPort, function(cInfo) {
      if (cInfo!=undefined) {
        console.log("Device found (connectionId="+ cInfo.connectionId +")");        
        Espruino.Core.Notifications.success("Connected to port "+ serialPort, true);
        callback(true);
      } else {
        // fail
        Espruino.Core.Notifications.error("Connection Failed.", true);
        callback(false);
      }
    }, function () {
      console.log("Force disconnect");
      Espruino.Core.Notifications.warning("Disconnected", true);
      disconnect();
    });

  };

  /** If we're connected, call callback, otherwise put up a connection dialog.
   * If connection succeeds, call callback - otherwise don't */
  function ensureConnected(callback) {
    if (Espruino.Core.Serial.isConnected()) {
      callback(); // great - we're done!
    } else {
      createPortSelector(callback);
    }
  }

  function disconnect()
  {
    Espruino.Core.Serial.close();
  }
  
  Espruino.Core.MenuPortSelector = {
      init : init,
      
      ensureConnected : ensureConnected,
      disconnect : disconnect,
      showPortSelector: createPortSelector
  };

}());
