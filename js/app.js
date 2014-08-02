/*
    Chat Example for Bluetooth Serial PhoneGap Plugin
    http://github.com/don/BluetoothSerial

    Copyright 2013 Don Coleman

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

/* jshint quotmark: false, unused: vars */
/* global cordova, bluetoothSerial, listButton, connectButton, sendButton, disconnectButton */
/* rudi's hack:  global cmd1Button, cmd2Button, cmd3Button, freedraw, debugButton */
/* global chatform, deviceList, message, messages, statusMessage, chat, connection */
'use strict';

var app = {
    initialize: function() {
        this.bind();
        listButton.style.display = "none";
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.foo(), and not this.foo()

        // wire buttons to functions
        connectButton.ontouchstart = app.connect;
        debugButton.ontouchstart = app.debug;
        listButton.ontouchstart = app.list;

        sendButton.ontouchstart = app.sendData;
        cmd1Button.ontouchstart = app.cmd1;
        cmd2Button.ontouchstart = app.cmd2;
        cmd3Button.ontouchstart = app.cmd3;
        cmd4Button.ontouchstart = app.cmd4;
        cmd5Button.ontouchstart = app.cmd5;
        joy1Button.ontouchstart = app.joy1;
        joy2Button.ontouchstart = app.joy2;
        joy3Button.ontouchstart = app.joy3;
        joy4Button.ontouchstart = app.joy4;
        joy5Button.ontouchstart = app.joy5;
        backButton.ontouchstart = app.back;
        backButton2.ontouchstart = app.back;         
        backButton3.ontouchstart = app.back;          
        test.ontouchstart = app.testrun;   
        updateButton.ontouchstart = app.updateS; 

        chatform.onsubmit = app.sendData;
        disconnectButton.ontouchstart = app.disconnect;

        // listen for messages
        bluetoothSerial.subscribe("\n", app.onmessage, app.generateFailureFunction("Subscribe Failed"));

        app.setStatus("Waiting...");
        // get a list of peers
        setTimeout(app.list, 2000);
    },
    testrun: function(event) {
        drive.style.display = "block";
       // document.getElementById('freedraw').style.display = "block";
    },
    list: function(event) {
        deviceList.firstChild.innerHTML = "Discovering...";
        app.setStatus("Looking for Bluetooth Devices...");
        bluetoothSerial.list(app.ondevicelist, app.generateFailureFunction("List Failed"));
    },
    connect: function() {
        var device = deviceList[deviceList.selectedIndex].value;
        app.disable(connectButton);
        app.setStatus("Connecting...");
        console.log("Requesting connection to " + device);
        bluetoothSerial.connect(device, app.onconnect, app.ondisconnect);
    },
    debug: function() {
        var device = "0";
        app.disable(connectButton);
        console.log("Requesting connection to " + device);
        bluetoothSerial.connect(device, app.onconnect, app.ondisconnect);        
        connection.style.display = "none";
        chat.style.display = "block";
        app.setStatus("Debugging Mode active");
    },
    disconnect: function(event) {
        if (event) {
            event.preventDefault();
        }

        app.setStatus("Disconnecting...");
        bluetoothSerial.disconnect(app.ondisconnect);
    },
    sendData: function(event) {
        event.preventDefault();

        var text = message.value + "\r\n";
        var success = function () {
            message.value = "";
            messages.value += ("Command: " + text);
            messages.scrollTop = messages.scrollHeight;
        };

        bluetoothSerial.write(text, success);
        return false;
    },
    cmd1: function(event) {
        event.preventDefault();

        menu.style.display = "none"
        c2canvas.style.display = "block";

        var text = "d5=1; beep(22,770,500); d5=0;" + "\r\n";
        var success = function () {
            message.value = "";
            messages.value += ("Command: " + text);
            messages.scrollTop = messages.scrollHeight;
        };

        bluetoothSerial.write(text, success);
        return false;
    },
    cmd2: function(event) {
        event.preventDefault();      

        var text = "d5=1; beep(22,550,500); d5=0;" + "\r\n";
        var success = function () {
            message.value = "";
            messages.value += ("Command: " + text);
            messages.scrollTop = messages.scrollHeight;
        };

        bluetoothSerial.write(text, success);
        return false;
    },
    cmd3: function(event) {

        event.preventDefault();

        object.style.display = "block";
        menu.style.display = "none"


        var text = "d5=1; beep(22,660,500); d5=0;" + "\r\n";
        var success = function () {
            message.value = "";
            messages.value += ("Command: " + text);
            messages.scrollTop = messages.scrollHeight;
        };

        bluetoothSerial.write(text, success);
        return false;
    },  
    cmd4: function(event) {

        event.preventDefault();

        menu.style.display = "none"
        freedraw.style.display = "block";

        var text = "d5=1; beep(22,660,500); d5=0;" + "\r\n";
        var success = function () {
            message.value = "";
            messages.value += ("Command: " + text);
            messages.scrollTop = messages.scrollHeight;
        };

        bluetoothSerial.write(text, success);
        return false;
    },  
    cmd5: function(event) {
        event.preventDefault();

        menu.style.display = "none"
        drive.style.display = "block";

        var text = "d5=1; beep(22,440,500); d5=0;" + "\r\n";
        var success = function () {
            message.value = "";
            messages.value += ("Command: " + text);
            messages.scrollTop = messages.scrollHeight;
        };

        bluetoothSerial.write(text, success);
        return false
    },
   joy1: function(event) {

        event.preventDefault();

        var text = "mv(1,1,220);" + "\r\n";
        var success = function () {
            message.value = "";
            messages.value += ("Command: " + text);
            messages.scrollTop = messages.scrollHeight;
        };

        bluetoothSerial.write(text, success);
        return false;
    },     
    joy2: function(event) {

        event.preventDefault();

        var text = "mv(1,0,220);" + "\r\n";
        var success = function () {
            message.value = "";
            messages.value += ("Command: " + text);
            messages.scrollTop = messages.scrollHeight;
        };

        bluetoothSerial.write(text, success);
        return false;
    },      
   joy3: function(event) {

        event.preventDefault();

        var text = "mv(0,1,220);" + "\r\n";
        var success = function () {
            message.value = "";
            messages.value += ("Command: " + text);
            messages.scrollTop = messages.scrollHeight;
        };

        bluetoothSerial.write(text, success);
        return false;
    },         
   joy4: function(event) {

        event.preventDefault();

        var text = "mv(0,0,220);" + "\r\n";
        var success = function () {
            message.value = "";
            messages.value += ("Command: " + text);
            messages.scrollTop = messages.scrollHeight;
        };

        bluetoothSerial.write(text, success);
        return false;
    },   
   joy5: function(event) {

        event.preventDefault();

        var text = "mv(0);" + "\r\n";
        var success = function () {
            message.value = "";
            messages.value += ("Command: " + text);
            messages.scrollTop = messages.scrollHeight;
        };

        bluetoothSerial.write(text, success);
        return false;
    },        
    updateS: function(event) {
     event.preventDefault();

        //var text = "mv(1,0" + ball.speed1 + ");  mv(2,0" + ball.speed2 + ");" + "\r\n";
         var text = "mv(0);" + "\r\n";
        var success = function () {
            message.value = "";
            messages.value += ("Command: " + text);
            messages.scrollTop = messages.scrollHeight;
        };

        bluetoothSerial.write(text, success);
        return false;
    },
    back: function(event) {

        event.preventDefault();

        menu.style.display = "block";
        freedraw.style.display = "none";
        drive.style.display = "none";
        object.style.display = "none";


        var text = "d5=1; mv(0); beep(22,770,500); d5=0;" + "\r\n";
        var success = function () {
            message.value = "";
            messages.value += ("Command: " + text);
            messages.scrollTop = messages.scrollHeight;
        };

        bluetoothSerial.write(text, success);
        return false;
    },                          
    ondevicelist: function(devices) {
        var option;

        // remove existing devices
        deviceList.innerHTML = "";
        app.setStatus("");

        devices.forEach(function(device) {

            option = document.createElement('option');
            if (device.hasOwnProperty("uuid")) {
                option.value = device.uuid;
            } else if (device.hasOwnProperty("address")) {
                option.value = device.address;
            } else {
                option.value = "ERROR " + JSON.stringify(device);
            }
            option.innerHTML = device.name;
            deviceList.appendChild(option);
        });

        if (devices.length === 0) {

            option = document.createElement('option');
            option.innerHTML = "No Bluetooth Devices";
            deviceList.appendChild(option);

            if (cordova.platformId === "ios") { // BLE
                app.setStatus("No Bluetooth Peripherals Discovered.");
            } else { // Android
                app.setStatus("Please Pair a Bluetooth Device.");
            }

            app.disable(connectButton);
            listButton.style.display = "";
        } else {
            app.enable(connectButton);
            listButton.style.display = "none";
            app.setStatus("Found " + devices.length + " device" + (devices.length === 1 ? "." : "s."));
        }

    },
    onconnect: function() {
        connection.style.display = "none";
        chat.style.display = "block";
        app.setStatus("Connected");
    },
    ondisconnect: function(reason) {
        var details = "";
        if (reason) {
            details += ": " + JSON.stringify(reason);
        }
        connection.style.display = "block";
        app.enable(connectButton);
        chat.style.display = "none";
        app.setStatus("Disconnected");
    },
    onmessage: function(message) {
        messages.value += "EGG: " + message;
        messages.scrollTop = messages.scrollHeight;
    },
    setStatus: function(message) { // setStatus
        console.log(message);

        window.clearTimeout(app.statusTimeout);
        statusMessage.innerHTML = message;
        statusMessage.className = 'fadein';

        // automatically clear the status with a timer
        app.statusTimeout = setTimeout(function () {
            statusMessage.className = 'fadeout';
        }, 15000);
    },
    sendCommand: function(input) { // sendCommand
       console.log(input);

       var success = function () {
            messages.value += ("Command: " + input);
            messages.scrollTop = messages.scrollHeight;
        };
        bluetoothSerial.write(input, success);
    },
    enable: function(button) {
        button.className = button.className.replace(/\bis-disabled\b/g,'');
    },
    disable: function(button) {
        if (!button.className.match(/is-disabled/)) {
            button.className += " is-disabled";
        }
    },
    generateFailureFunction: function(message) {
        var func = function(reason) { // some failure callbacks pass a reason
            var details = "";
            if (reason) {
                details += ": " + JSON.stringify(reason);
            }
            app.setStatus(message + details);
        };
        return func;
    }
};