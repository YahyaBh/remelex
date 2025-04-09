import './page.scss'

import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa'
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";

const Subnav = () => {
    return (
        <div className='subnav'>
            <div className='container'>
                <div className='left'>
                    <div className='elem'>
                        <FiPhone />
                        <h4>(+212) 06 48 40 33 45</h4>
                    </div>

                    <div className='line-split'></div>

                    <div className='elem'>
                        <SlLocationPin />
                        <h4>Av. Abderrahim Bouabid, Secteur 6, Mag 4, Imm 3, Hay Salam – Salé</h4>
                    </div>
                </div>

                <div className='right'>
                    <div className='social_container'>
                        <a href='https://www.facebook.com/'>
                            <FaInstagram />
                        </a>
                        <a href='https://www.facebook.com/'>
                            <FaTiktok />
                        </a>
                        <a href='https://www.facebook.com/'>
                            <FaFacebookF />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Subnav