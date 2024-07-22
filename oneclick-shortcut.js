// ==UserScript==
// @name         IG Buy/Sell OneClick Shortcut
// @namespace    http://tampermonkey.net/
// @version      2024-07-14
// @description  try to take over the world!
// @author       You
// @match        https://demo-deal.ig.com/web-platform/
// @match        https://deal.ig.com/web-platform/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ig.com
// @grant        none
// ==/UserScript==

function doc_keyUp(e) {
    console.log(e.keyCode); // Output le code de la touche dans la console
    switch (e.keyCode) {
        case 130:
            //F19
            document.getElementsByClassName("ig-ticket-oneclick_price cell-price btn ig-price-button ig-price-button--buy ig-price-button--active ember-view")[0].click()
            break;
         case 129:
            //F18
            document.getElementsByClassName("ig-ticket-oneclick_price cell-price btn ig-price-button ig-price-button--sell ig-price-button--active ember-view")[0].click()
            break;
        case 19:
            //F16
            var list = document.getElementsByClassName("btn btn-grid cell-close_btn btn-submit");
            for (var i = list.length -1 ; i >= 0; i--) {
                document.getElementsByClassName("btn btn-grid cell-close_btn btn-submit")[i].click();
            }
            break;
        case 128:
            var el = document.getElementsByClassName("ig-market-view-title ember-view"); //HTMLCollection of buttons
            for (var j = 0; j<el.length; j++) {
                if (el[j].parentNode.parentNode.className == "workspace-panel_tab-title workspace-panel_tab-title--active ember-view") {
                    console.log(j+" est l'onglet sélectionné");
                    var nextitem = (1+j)%el.length; //next item using modulus operator
                    }
                 }
             console.log("Le prochain item est "+nextitem);
             el[nextitem].click();
            break;
        default:
            break;
    }
}

document.addEventListener('keyup', doc_keyUp, false);
