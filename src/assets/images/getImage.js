import React from 'react';

function getImage(image) {

    switch (image) {
        case "1":
            return require("./jynxshirt2.png");
            break;
        case "2":
            return require("./jynxhoodie.png");
            break;
        case "3":
            return require("./jynxjoggers.png");
            break;
        case "4":
            return require("./jynxshorts.png");
            break;
        case "5":
            return require("./jynxboxers.png");
            break;
        case "6":
            return require("./jynxfrogtearsshirt.png");
            break;
        case "7":
            return require("./frogtearsjynxhoodie2.png");
            break;
        case "8":
            return require("./jynxsocks.png");
            break;
        case "9":
            return require("./gorillasocks2.png");
            break;
        case "10":
            return require("./jynx_the_law_jersey.png");
            break;
        case "11":
            return require("./jynxbeanie.png");
            break;
        case "12":
            return require("./jynxtornhat2.png");
            break;
        case "13":
            return require("./nikejynxaj1v2.png");
             break;
        case "14":
            return require("./jxoflvsimpsons2.png");
            break;
        case "15":
            return require("./jynxwatch.png");
            break;
        case "16":
            return require("./jynxwallet.png");
            break;
        case "17":
            return require("./jynx_x_the_law_basketball.png");
            break;
        case "18":
            return require("./jynx_headband.png");
            break;
        case "19":
            return require("./jynx_bottle.png");
            break;
        case "20":
            return require("./jynx_phone_case.png");
            break;
        default:
            return require("./imagenotfound.png");
            break;
    }
}
export default getImage;