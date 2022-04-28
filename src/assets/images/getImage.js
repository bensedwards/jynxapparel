import React from 'react';

function getImage(image) {

    switch (image) {
        case "1":
            return require("./jynxshirt.png")
            break;
        case "7":
            return require("./frogtearsjynxhoodie.png")
            break;
        case "9":
            return require("./gorillasocks.png")
            break;
        case "11":
            return require("./jynxtornhat.png")
            break;
        case "12":
            return require("./nikejynxaj1.png")
             break;
        case "13":
            return require("./jxoflvsimpsons.png")
            break;
        default:
            return require("./imagenotfound.png");
            break;
    }
}
export default getImage;