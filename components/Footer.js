function Footer () {
    this.create = () => {
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        footer.innerHTML = `
                            <div class="container">
                                <div class="footer_wrapper">
                                    <p>footer</p>
                                </div>
                            </div>
                         `
        return footer
    }

    this.init = () => {
        return this.create()
    }
}

const footer = new Footer().init()

export default footer