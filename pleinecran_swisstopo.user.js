// ==UserScript==
// @name           pleinecran_swisstopo
// @namespace      http://userscripts.org/scripts/show/98309
// @description    Passage de l'interface de consultation des cartes en pleine fenêtre du navigateur 
// @include        http://map.geo.admin.ch/?lang=fr
// @grant       GM_addStyle
// @oujs:author cy-altern
// ==/UserScript==


GM_addStyle("#ext-comp-1017, #ext-gen24, #ext-gen26 { heigth: 100% !important; }");
GM_addStyle("#ext-gen25 {display: none !important; }");
GM_addStyle("#ext-comp-1017 { top: 0px !important; }");
GM_addStyle("#ext-comp-1028 { display: none !important; }");
