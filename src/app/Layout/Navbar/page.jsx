import './page.scss'


const Navbar = () => {
    return (
        <div className="navbar">
            <div className='container'>

                <div className="logo">
                    <img src="/Images/logo.png" alt="main logo" />
                </div>

                <div className="menu">
                    <a href="#">Acceuil</a>
                    <a href="#">Services</a>
                    <a href="#">Réalisations</a>
                    <a href="#">Contact</a>
                </div>

                <a href='tel:+212648403345' className='button_start'>
                    <button>
                        Demandez un devis
                    </button>
                </a>

            </div>

        </div >
    )
}

export default Navbar