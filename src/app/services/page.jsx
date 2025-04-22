import React from 'react'
import Subnav from '../Layout/Subnav/page'
import Navbar from '../Layout/Navbar/page'
import { FaRegStar, FaTools } from 'react-icons/fa'

import './page.scss'
import Footer from '../Layout/Footer/footer'
import Loading from '../loading/page'

const Competence = () => {
    return ( loading ? <Loading/> : 
        <div>
            <Subnav />
            <Navbar />

            <div className="hero">
                <div className="container">
                    <div className="hero_details">
                        <h3>Chez Remelex</h3>
                        <h1>nous vous proposons une gamme complète de services sur mesure,
                            <span>adaptés aussi bien aux particuliers qu’aux professionnels.</span></h1>
                        <h3>Découvrez nos domaines d’intervention :</h3>
                    </div>
                </div>

            </div>

            <section className="competence">
                <div className="container">

                    <div className="title">

                        <div className="liner">
                            <div className="line-l"></div>
                            <FaTools />
                            <div className="line-r"></div>
                        </div>

                        <h2>Nos compétences</h2>

                        <div className="liner">
                            <div className="line-l"></div>
                            <span>Services</span>
                            <div className="line-r"></div>
                        </div>

                    </div>



                    <div className="cards" >
                        <div className="card">
                            <div className="top">
                                <img src="/Images/doormetal.png" alt="door metal" />

                                <div className="service">
                                    <h3>Service 1</h3>
                                </div>
                            </div>
                            <div className="bottom">
                                <h3>Menuiserie Aluminium & Inox</h3>
                                <p>Conception et installation de fenêtres, portes et cloisons modernes en aluminium et inox, résistantes et esthétiques.</p>
                                <button>Demandez un devis</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="top">
                                <img src="/Images/doormetal.png" alt="door metal" />

                                <div className="service">
                                    <h3>Service 1</h3>
                                </div>
                            </div>
                            <div className="bottom">
                                <h3>Menuiserie Aluminium & Inox</h3>
                                <p>Conception et installation de fenêtres, portes et cloisons modernes en aluminium et inox, résistantes et esthétiques.</p>
                                <button>Demandez un devis</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="top">
                                <img src="/Images/doormetal.png" alt="door metal" />

                                <div className="service">
                                    <h3>Service 1</h3>
                                </div>
                            </div>
                            <div className="bottom">
                                <h3>Menuiserie Aluminium & Inox</h3>
                                <p>Conception et installation de fenêtres, portes et cloisons modernes en aluminium et inox, résistantes et esthétiques.</p>
                                <button>Demandez un devis</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="top">
                                <img src="/Images/doormetal.png" alt="door metal" />

                                <div className="service">
                                    <h3>Service 1</h3>
                                </div>
                            </div>
                            <div className="bottom">
                                <h3>Menuiserie Aluminium & Inox</h3>
                                <p>Conception et installation de fenêtres, portes et cloisons modernes en aluminium et inox, résistantes et esthétiques.</p>
                                <button>Demandez un devis</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="top">
                                <img src="/Images/doormetal.png" alt="door metal" />

                                <div className="service">
                                    <h3>Service 1</h3>
                                </div>
                            </div>
                            <div className="bottom">
                                <h3>Menuiserie Aluminium & Inox</h3>
                                <p>Conception et installation de fenêtres, portes et cloisons modernes en aluminium et inox, résistantes et esthétiques.</p>
                                <button>Demandez un devis</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="top">
                                <img src="/Images/doormetal.png" alt="door metal" />

                                <div className="service">
                                    <h3>Service 1</h3>
                                </div>
                            </div>
                            <div className="bottom">
                                <h3>Menuiserie Aluminium & Inox</h3>
                                <p>Conception et installation de fenêtres, portes et cloisons modernes en aluminium et inox, résistantes et esthétiques.</p>
                                <button>Demandez un devis</button>
                            </div>
                        </div>
                    </div>

                    {/* <button className="btn-plus">
                        Plus de service
                    </button> */}

                </div>
            </section>



                <Footer/>

        </div>
    )
}

export default Competence