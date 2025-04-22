"use client"
import React, { useState, useEffect } from 'react'
import Subnav from '../Layout/Subnav/page'
import Navbar from '../Layout/Navbar/page'
import { FaRegStar, FaTools } from 'react-icons/fa'

import './page.scss'
import Footer from '../Layout/Footer/footer'
import Loading from '../loading/page'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Competence = () => {

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        AOS.init({ duration: 300, easing: 'ease-in-out', once: true })
        setLoading(false);
    }, [])

    return (loading ? <Loading /> :
        <div>
            <Subnav />
            <Navbar />

            <div className="hero">
                <div className="container">
                    <div className="hero_details" data-aos="fade-up">
                        <h3>Chez Remelex</h3>
                        <h1>
                            nous vous proposons une gamme complète de services sur mesure,
                            <span>adaptés aussi bien aux particuliers qu’aux professionnels.</span>
                        </h1>
                        <h3>Découvrez nos domaines d’intervention :</h3>
                    </div>
                </div>
            </div>

            <section className="competence">
                <div className="container">
                    <div className="title" data-aos="zoom-in">
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

                    <div className="cards">
                        {[
                            {
                                img: 'doormetal',
                                title: 'Aluminium & Inox',
                                desc: 'Conception et installation d’éléments en aluminium et en inox alliant durabilité et esthétique moderne, adaptés à tous les types de projets.',
                            },
                            {
                                img: 'fenceDoor',
                                title: 'Ferronnerie sur mesure',
                                desc: 'Portails, rampes, balustrades et décorations en fer forgé fabriqués artisanalement pour s’intégrer parfaitement à votre espace.',
                            },
                            {
                                img: 'windowAll',
                                title: 'Portes & fenêtres',
                                desc: 'Fabrication et pose de portes et fenêtres sur mesure garantissant isolation, sécurité et design élégant pour tous les styles d’habitations.',
                            },
                            {
                                img: 'kitchenSpace',
                                title: 'Cuisines sur mesure',
                                desc: 'Création de cuisines fonctionnelles et personnalisées, adaptées à votre espace et à vos goûts.',
                            },
                            {
                                img: 'buildingMetal',
                                title: 'Projets personnalisés',
                                desc: 'Étude et réalisation de structures ou finitions spéciales selon vos besoins spécifiques.',
                            },
                            {
                                img: 'villaMetal',
                                title: 'Aménagements professionnels',
                                desc: 'Solutions sur mesure pour cafés, bureaux, restaurants et autres espaces professionnels.',
                            },
                        ].map((_, index) => (
                            <div
                                className="card"
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="top">
                                    <img src={`/Images/${_.img}.png`} alt={_.title} />
                                    <div className="service">
                                        <h3>Service {index}</h3>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <h3>{_.title}</h3>
                                    <p>
                                        {_.desc}
                                    </p>
                                    <button>Demandez un devis</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




            <Footer />

        </div>
    )
}

export default Competence