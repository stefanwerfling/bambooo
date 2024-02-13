"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_1 = require("./Base/Navbar/Navbar");
const Preloader_1 = require("./Base/Preloader");
const Wrapper_1 = require("./Base/Wrapper");
new Wrapper_1.Wrapper({
    preloader: new Preloader_1.Preloader({
        image: 'images/icons/icon-100x100.png'
    }),
    navbar: new Navbar_1.Navbar()
});
