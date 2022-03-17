import nav from './Nav.js'
function Header () {
    this.create = () =>{
        const header = document.createElement('header');
        header.classList.add('header');

        header.innerHTML=`<div class="container">
                                <div class="header__wrapper">
                                    <div class="header__logo">
                                        <a href="/">
                                            <img src="images/logo-1.png">
                                        </a>
                                    </div>
                                </div>
                                ${nav.outerHTML}
                                <a href="#cart">Cart</a>
                          </div>`
        return header
    }

    this.init = () => {
        return this.create()
    }
}

const header = new Header().init()

export default header