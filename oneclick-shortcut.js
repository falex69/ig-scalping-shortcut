// ==UserScript==
// @name         IG Buy/Sell OneClick Shortcut
// @namespace    http://tampermonkey.net/
// @version      2025-03-13
// @description  try to take over the world!
// @author       falex
// @match        https://demo-deal.ig.com/web-platform/
// @match        https://deal.ig.com/web-platform/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ig.com
// @grant        none
// ==/UserScript==

function doc_keyUp(e) {
    console.log("Keycode: "+ e.keyCode); // Output le code de la touche dans la console
    switch (e.keyCode) {
        case 130:
        case 133:
            //F19 & Screen(HP) -> Buy Open ticket
            //document.getElementsByClassName("ig-ticket-oneclick_price cell-price btn ig-price-button ig-price-button--buy ig-price-button--active ember-view")[0].click()
            document.getElementsByClassName("cell-price btn ig-price-button ig-price-button--buy ig-price-button--active ig-ticket-oneclick_price")[0].click();
            break;
         case 129:
         case 124:
            //F18 & F12(HP) -> Sell Open ticket
            // document.getElementsByClassName("ig-ticket-oneclick_price cell-price btn ig-price-button ig-price-button--sell ig-price-button--active ember-view")[0].click()
            document.getElementsByClassName("cell-price btn ig-price-button ig-price-button--sell ig-price-button--active ig-ticket-oneclick_price")[0].click();
            break;
        case 19:
        case 113:
        case 127:
            //F16 (Win10) & F2(HP) & F16 (MacOS) -> Close ticket
            var list = document.getElementsByClassName("btn btn-grid cell-close_btn btn-submit");
            for (var i = list.length -1 ; i >= 0; i--) {
                //console.log("i="+i)
                document.getElementsByClassName("btn btn-grid cell-close_btn btn-submit")[i].click();
            }
            break;
        case 128:
        case 121:
            //F17 & F10(HP) -> Next Tab
            var el = document.getElementsByClassName("ig-market-view-title ember-view"); //HTMLCollection of buttons
            console.log(el[0].parentNode.parentNode.className);
            for (var j = 0; j<el.length; j++) {
                //Update 20250107 no more ember-view
                //if (el[j].parentNode.parentNode.className == "workspace-panel_tab-title workspace-panel_tab-title--active ember-view") {
                if (el[j].parentNode.parentNode.className == "workspace-panel_tab-title workspace-panel_tab-title--active") {
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

