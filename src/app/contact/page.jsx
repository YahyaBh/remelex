import { FaTools } from 'react-icons/fa'
import Navbar from '../Layout/Navbar/page'
import Subnav from '../Layout/Subnav/page'


import './page.scss'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import { SlEnvolope } from 'react-icons/sl'
import Footer from '../Layout/Footer/footer'

const page = () => {
    return (
        <div>

            <Subnav />
            <Navbar />

            <section className="contact">
                <div className="container">
                    <div className="title">
                        <div className="liner">
                            <div className="line-l"></div>
                            <FaTools />
                            <div className="line-r"></div>
                        </div>

                        <h2>Contactez-nous</h2>

                        <div className="liner">
                            <div className="line-l"></div>
                            <span>Notre réseau</span>
                            <div className="line-r"></div>
                        </div>
                    </div>

                    <div className="contact-container">
                        <div className="left">
                            <iframe frameBorder="0" style={{ border: 0 }} src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&origin=Av.%20Abderrahim%20Bouabid%2C%20Secteur%206%2C%20Mag%204%2C%20Imm%203%2C%20Hay%20Salam%20%E2%80%93%20Sal%C3%A9&destination=Av.%20Abderrahim%20Bouabid%2C%20Secteur%206%2C%20Mag%204%2C%20Imm%203%2C%20Hay%20Salam%20%E2%80%93%20Sal%C3%A9&mode=driving&zoom=13&maptype=satellite" allowFullScreen></iframe>

                            <div className="infos">
                                <ul>
                                    <li>
                                        <FiMapPin />
                                        <span>Av. Abderrahim Bouabid, Secteur 6, Mag 4, Imm 3, Hay Salam – Salé</span>
                                    </li>
                                    <li>
                                        <FiPhone />
                                        <span>(+212 ) 06 48 40 33 45</span>
                                    </li>
                                    <li>
                                        <SlEnvolope />
                                        <span>contact@remelex.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="right">

                            <div className="form">
                                <div className="double-inp">

                                    <div className="inp">
                                        <label htmlFor="prenom">Prenom</label>
                                        <input type="text" placeholder="Prénom" />
                                    </div>

                                    <div className="inp">
                                        <label htmlFor="nom">Nom</label>
                                        <input type="text" placeholder="Nom" />
                                    </div>
                                </div>


                                <div className="double-inp">
                                    <div className="inp">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" placeholder="Email" />
                                    </div>

                                    <div className="inp">
                                        <label htmlFor="tel">Téléphone</label>
                                        <input type="text" placeholder="Numero de téléphone" />
                                    </div>
                                </div>
                                <textarea placeholder="Message" />

                                <button>Envoyer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer/>
        </div>
    )
}

export default page