"use strict";
var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    let serverAddress = "https://eia-endabgabe.herokuapp.com";
    function init(_event) {
    }
    function insert() {
        let url = "command=insert" + "&" + "score" + "=" + Endabgabe.score + "&" + "name" + "=" + Endabgabe.name;
        sendRequest(url, handleInsertResponse);
    }
    DatabaseClient.insert = insert;
    function getHighscore() {
        let query = "command=getHighscore";
        sendRequest(query, handleHighscoreResponse);
    }
    DatabaseClient.getHighscore = getHighscore;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
        }
    }
    function handleHighscoreResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
            let hs = JSON.parse(xhr.response);
            function sortScore(_h1, _h2) {
                if (_h1.score < _h2.score) {
                    return 1;
                }
                if (_h1.score > _h2.score) {
                    return -1;
                }
                return 0;
            }
            hs.sort(sortScore);
            for (let b = 0; b < hs.length; b++) {
                let div = document.createElement("div");
                document.getElementById("scores").appendChild(div);
                div.innerHTML = "Name " + hs[b].name;
                div.innerHTML += "\t Score " + hs[b].score;
            }
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=databaseclient.js.map