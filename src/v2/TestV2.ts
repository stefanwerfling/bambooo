import {MainSidebar} from './Base/MainSidebar';
import {Navbar} from './Base/Navbar/Navbar';
import {Preloader} from './Base/Preloader';
import {SidebarLogo} from './Base/Sidebar/SidebarLogo';
import {Wrapper} from './Base/Wrapper';

new Wrapper({
    preloader: new Preloader({
        image: 'images/icons/icon-100x100.png'
    }),
    navbar: new Navbar(),
    mainsidebar: new MainSidebar({
        logo: new SidebarLogo({

        })
    })
});