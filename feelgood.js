// ==UserScript==
// @name			FeelGoodComments
// @match			http://www.youtube.com/*
// @match			http://youtube.com/*
// ==/UserScript==

var commentsDiv = document.getElementById('watch7-discussion');
commentsDiv.innerHTML = '<div style=\'font-size: 96px;\'>You\'re Beautiful</div>';
