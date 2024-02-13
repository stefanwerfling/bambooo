import {Navbar} from './Base/Navbar/Navbar';
import {Preloader} from './Base/Preloader';
import {Wrapper} from './Base/Wrapper';

new Wrapper({
    preloader: new Preloader({
        image: 'images/icons/icon-100x100.png'
    }),
    navbar: new Navbar()
});