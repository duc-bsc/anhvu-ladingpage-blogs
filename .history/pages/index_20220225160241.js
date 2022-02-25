import Blogs from '../layout/blogs';
import Content from '../layout/content';
import Footer from '../layout/footer';
import Header from '../layout/header';
import Sidebar from '../layout/sidebar';
import Menu from '../layout/menu';
import { useState } from 'react';
export default function Home() {
    const [isMenu, setIsMenu] = useState(false);
    console.log('insMenu',isMenu)
    const handleOpenMenu =()=>{
        setIsMenu(true)
    }
    const handleCloseMenu =()=>{
        setIsMenu(false)
    }
    return (
        <div id="main">
            <Header handleOpenMenu={handleOpenMenu} />
            <Blogs />
            <div class="row container">
                <div class="col-content">
                    <Content />
                </div>
                <div class="col-sidebar">
                    <Sidebar />
                </div>
            </div>
            <Footer />
            <Menu isMenu={isMenu} handleCloseMenu={handleCloseMenu}/>
        </div>
    );
}
