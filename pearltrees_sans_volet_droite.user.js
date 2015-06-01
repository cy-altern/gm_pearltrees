// ==UserScript==
// @name        pearltrees_sans_volet_droite
// @namespace   http://galactron.org/IMG/gm_scripts/pearltrees_sans_volet_droite
// @description masquer le volet de pearltrees proposant le passage en premium / hide pearltrees's right panel for those without premium account
// @include     http*://www.pearltrees.com/*
// @version     1
// @grant       GM_addStyle
// @oujs:author cy-altern
// ==/UserScript==
GM_addStyle("#right-column-region { display: none !important; }");
GM_addStyle("#main-container { right: 0 !important; }");
