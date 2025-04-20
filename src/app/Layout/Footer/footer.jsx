import React from 'react'
import './footer.scss'

import {FaFacebookF, FaInstagram, FaTiktok} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="left">
                    <img src="/Images/logoLight.svg" alt="logo" />

                    <h4>REMELEX – Expertise & Finition de Qualité</h4>

                    <p>Chez Remelex, nos artisans allient savoir-faire et précision pour créer des ouvrages en aluminium, inox et fer forgé, à la fois durables, esthétiques et parfaitement adaptés à chaque espace.</p>
                </div>

                <div className="right">

                    <div className="list">
                        <h5>Nos Horaires</h5>
                        <hr />
                        <ul>
                            <li>Lundi: 08:00 - 17:00</li>
                            <li>Mardi: 08:00 - 17:00</li>
                            <li>Mercredi: 08:00 - 17:00</li>
                            <li>Jeudi: 08:00 - 17:00</li>
                            <li>Vendredi: 08:00 - 17:00</li>
                            <li>Samedi: 08:00 - 17:00</li>
                            <li>Dimanche: Fermé</li>
                        </ul>
                    </div>

                    <div className="list">
                        <h5>Notre Adresse</h5>
                        <hr />
                        <ul>
                            <li>Av. Abderrahim Bouabid, Secteur 6, Mag 4, Imm 3, Hay Salam – Salé</li>
                            <li>(+212) 06 48 40 33 45</li>
                            <li>contact@remelex.com</li>
                        </ul>
                        <div className="socials">
                            <a href="https://www.facebook.com/remelexmaroc/"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/remelex_maroc/"><FaInstagram /></a>
                            <a href="https://www.tiktok.com/@remelex_maroc"><FaTiktok /></a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="under">
                <p>© 2025 Remelex. Tous droits réservés.</p>
                <p>Developed and Maintained By <a href="https://webinadigital.com/" target="_blank">Webina Digital</a>  ©</p>
            </div>
        </footer>
    )
}

export default Footer