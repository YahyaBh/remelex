"use client"

import React, { useState, useEffect } from "react"

import { FiMapPin } from "react-icons/fi";
import { FaRegStar, FaStar, FaTools } from "react-icons/fa";
import Navbar from "./Layout/Navbar/page";
import Subnav from "./Layout/Subnav/page";

import './page.scss'
import { FiPhone } from "react-icons/fi";
import { SlEnvolope } from "react-icons/sl";
import { GoThumbsup } from "react-icons/go";
import { VscFeedback } from "react-icons/vsc";
import { FaBusinessTime } from "react-icons/fa6";

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from "./Layout/Footer/footer";
import Loading from "./loading/page";

const galleryItems = [
  { id: 1, image: "/Images/testGallery.png", category: "alluminume", alt: "gallery image" },
  { id: 2, image: "/Images/testGallery2.png", category: "fer", alt: "gallery image" },
  { id: 3, image: "/Images/testGallery3.png", category: "inox", alt: "gallery image" },
  { id: 4, image: "/Images/testGallery4.png", category: "travaux divers", alt: "gallery image" },
  { id: 5, image: "/Images/testGallery5.png", category: "alluminume", alt: "gallery image" },
  { id: 6, image: "/Images/testGallery6.png", category: "fer", alt: "gallery image" },
  { id: 7, image: "/Images/testGallery7.png", category: "inox", alt: "gallery image" },
  { id: 8, image: "/Images/testGallery2.png", category: "travaux divers", alt: "gallery image" },
  { id: 9, image: "/Images/testGallery3.png", category: "alluminume", alt: "gallery image" },
  { id: 10, image: "/Images/testGallery4.png", category: "fer", alt: "gallery image" },
  { id: 11, image: "/Images/testGallery5.png", category: "inox", alt: "gallery image" },
  { id: 12, image: "/Images/testGallery6.png", category: "travaux divers", alt: "gallery image" },
]

const gridClasses = ["div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8", "div9", "div10", "div11", "div12"]


export default function Home() {

  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("Tous")
  const [filteredItems, setFilteredItems] = useState(galleryItems)
  const [gridAssignments, setGridAssignments] = useState({})
  const [isTransitioning, setIsTransitioning] = useState(false)


  const [showModal, setShowModal] = useState()
  const [moadlID, setModalId] = useState()


  const openModal = (id) => {
    if (showModal) {
      setShowModal(false)
      setModalId(null)
    } else {
      setShowModal(true)
      setModalId(id)
    }
  }


  const shuffleArray = (array) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  const assignRandomGridClasses = (items) => {
    const shuffledItems = shuffleArray([...items])
    const assignments = {}

    shuffledItems.forEach((item, index) => {
      assignments[item.id] = gridClasses[index % 12]
    })

    return assignments
  }

  const handleFilterChange = (category) => {
    if (category === activeFilter) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveFilter(category)
      const newFilteredItems =
        category === "Tous" ? galleryItems : galleryItems.filter((item) => item.category === category)
      setFilteredItems(newFilteredItems)
      setGridAssignments(assignRandomGridClasses(newFilteredItems))

      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 300)
  }


  useEffect(() => {
    AOS.init({ duration: 300, easing: 'ease-in-out', once: true })
    setGridAssignments(assignRandomGridClasses(galleryItems ?? galleryItems))
    setLoading(false);
  }, [])

  return (loading ? <Loading /> :
    <>
      <Subnav />
      <Navbar />

      {/* Hero Section */}
      <section className="hero" data-aos="fade-down">
        <div className="container">
          <div className="hero_details" data-aos="fade-up" data-aos-delay="100">
            <h3>remelex – Votre expert en aluminium, inox & fer forgé</h3>
            <h1>Des solutions sur mesure pour vos maisons, commerces & <span>projets professionnels.</span></h1>
            <div className="buttons" data-aos="zoom-in" data-aos-delay="200">
              <button className="btn devib">Demandez un devis</button>
              <button className="btn catalogue">Telecharger Catalogue</button>
            </div>
          </div>
          <div className="float_infos">
            {[{ Icon: FaRegStar, title: '4.4', sub: 'Service de qualité' }, { Icon: VscFeedback, title: '4.8', sub: 'Engagement et confiance' }, { Icon: GoThumbsup, title: '4.3', sub: 'Fidélité assurée toujours' }, { Icon: FaBusinessTime, title: '4.1', sub: 'Plus de 30 ans d’expérience' }].map((info, i) => (
              <div key={i} className="info" data-aos="flip-left" data-aos-delay={300 + i * 150}>
                <info.Icon />
                <div className="details"><h3>{info.title}</h3><h5>{info.sub}</h5></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competence Section */}
      <section className="competence" data-aos="fade-up">
        <div className="container">
          <div className="title" data-aos="fade-right">
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
            ].map((item, i) => (
              <div key={i} className="card" data-aos="zoom-in" data-aos-delay={100 + i * 200}>
                <div className="top">
                  <img src={`/Images/${item.img}.png`} alt={item.title} />
                  <div className="service">
                    <h3>Service {i + 1}</h3>
                  </div>
                </div>
                <div className="bottom">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button>Demandez un devis</button>
                </div>
              </div>
            ))}
          </div>

          <button className="btn-plus" data-aos="fade-up" data-aos-delay="700">
            <a href="/services">Plus de service</a>
          </button>
        </div>
      </section>


      {/* Skill Section */}
      <section className="skill" data-aos="fade-up">
        <div className="container">
          <div className="title" data-aos="fade-left">
            <div className="liner"><div className="line-l"></div><FaTools /><div className="line-r"></div></div>
            <h2>Ce qui fait notre succès</h2>
            <div className="liner"><div className="line-l"></div><span>Nos chiffres</span><div className="line-r"></div></div>
          </div>
          <div className="skills">
            {['customer-review 1', 'hourglass', 'solution', 'maintenance'].map((img, i) => (
              <div key={i} className="skill-card" data-aos="flip-up" data-aos-delay={200 + i * 150}><img src={`/Images/${img}.svg`} alt={img} /><h3>{['Expertise & Artisanat', 'Respect des délais', 'Solutions sur mesure', 'Équipe qualifiée'][i]}</h3></div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="feedback" data-aos="fade-up">
        <div className="container">
          <div className="title" data-aos="fade-down">
            <div className="liner"><div className="line-l"></div><FaTools /><div className="line-r"></div></div>
            <h2>Testimonials</h2>
            <div className="liner"><div className="line-l"></div><span>Que disent nos clients</span><div className="line-r"></div></div>
            <p data-aos="fade-up" data-aos-delay="100">« Nous considérons nos clients comme des invités... »</p>
          </div>
          <div className="feedbacks">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="feedback-card" data-aos="flip-right" data-aos-delay={200 + i * 150}>
                <div className="top"><img src="/Images/testPer.png" alt="avatar" /><div className="details"><h3>Bimosaurus</h3><p>Graphic Designer</p></div></div>
                <div className="bottom"><div className="stars">{[...Array(5)].map((_, idx) => <FaStar key={idx} />)} </div><p>I’ve used other kits, but this one is the best...</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps" data-aos="fade-up">
        <div className="container">
          <div className="title" data-aos="fade-down">
            <div className="liner"><div className="line-l"></div><FaTools /><div className="line-r"></div></div>
            <h2>Comment ça marche</h2>
            <div className="liner"><div className="line-l"></div><span>Notre processus de travail</span><div className="line-r"></div></div>
            <p data-aos="fade-up" data-aos-delay="100">Ensemble pour trouver la meilleure solution avec le meilleur prix.</p>
          </div>
          <div className="steps-container">
            {[
              { img: 'budget 1', title: '1. Devis', desc: "Envoyez votre demande en ligne ou appelez-nous." },
              { img: 'fact-checking', title: '2. Confirmation', desc: "Nous trouvons la solution optimale." },
              { img: 'support', title: '3. Exécution', desc: "Achat et installation du matériel." },
              { img: 'fast-delivery', title: '4. Livraison', desc: "Vérification finale et satisfaction." }
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div className="step-card" data-aos="zoom-in" data-aos-delay={200 + i * 150}>
                  <div className="img-cont"><img src={`/Images/${step.img}.svg`} alt={step.title} /></div>
                  <h3>{step.title}</h3><p>{step.desc}</p>
                </div>
                {i < 3 && <img className="arrow" data-aos="fade-left" data-aos-delay={250 + i * 150} src="/Images/arrowStep.svg" alt="arrow" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {showModal && <div className="modal_gallery" onClick={() => openModal()} data-aos="fade-in"><div className="modal_content" data-aos="zoom-in"><img src={galleryItems[moadlID]?.image} alt="modal" /></div></div>}
      <section className="gallery">
        <div className="container">
          <div className="title">
            <div className="liner">
              <div className="line-l"></div>
              <FaTools />
              <div className="line-r"></div>
            </div>

            <h2>Quelque clichés</h2>

            <div className="liner">
              <div className="line-l"></div>
              <span>Galerie</span>
              <div className="line-r"></div>
            </div>
          </div>

          <div className="gallery-select">
            <ul>
              <li
                className={activeFilter === "Tous" ? "active" : ""}
                onClick={() => handleFilterChange("Tous")}
              >
                Tous
              </li>
              <li
                className={activeFilter === "alluminume" ? "active" : ""}
                onClick={() => handleFilterChange("alluminume")}
              >
                alluminume
              </li>
              <li
                className={activeFilter === "fer" ? "active" : ""}
                onClick={() => handleFilterChange("fer")}
              >
                fer
              </li>
              <li
                className={activeFilter === "inox" ? "active" : ""}
                onClick={() => handleFilterChange("inox")}
              >
                inox
              </li>
              <li
                className={activeFilter === "travaux divers" ? "active" : ""}
                onClick={() => handleFilterChange("travaux divers")}
              >
                travaux divers
              </li>
            </ul>
          </div>

          <div className={`gallery-container ${isTransitioning ? "transitioning" : ""}`}>
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`gallery-card ${gridAssignments[item.id] || gridClasses[index % 12]}`}
                style={{ transitionDelay: `${index * 30}ms` }}
                onClick={() => openModal(item.id)}
              >
                <img src={item.image || "/placeholder.svg"} alt={item.id} />
              </div>
            ))}
          </div>
        </div>

        {/* a button to visit gallery page */}
        <div className="btn-plus" data-aos="fade-up" data-aos-delay="700">
          <a href="/gallery">Voir plus</a>
        </div>

      </section>


      {/* Devi Section */}
      <section className="devi" data-aos="fade-up">
        <div className="container">
          <div className="left" data-aos="fade-right">
            <div className="liner"><div className="line-l"></div><FaTools /><div className="line-r"></div></div>
            <h2>Devis Gratuit</h2>
            <p>Décrivez-nous votre projet de menuiserie et on revient vers vous très vite.</p>
            <button>Demandez un devis</button>
          </div>
          <div className="right" data-aos="fade-left"></div>
        </div>
      </section>

      {/* Colab Section */}
      <section className="colab" data-aos="fade-up">
        <div className="container">
          <div className="title" data-aos="fade-down"><div className="liner"><div className="line-l"></div><FaTools /><div className="line-r"></div></div><h2>Nos partenaires</h2></div>
          <p data-aos="fade-up">Remelex travaille avec des partenaires fiables ...</p>
          <div className="colab-container" data-aos="fade-up" data-aos-delay="100">
            {[1, 2, 3, 4].map((n) => <img key={n} src="/Images/ESTest.png" alt={`colab ${n}`} />)}
          </div>
        </div>
      </section>

      {/* Desc Section */}
      <section className="desc" data-aos="fade-up">
        <div className="container">
          <div className="left" data-aos="fade-right">
            <h2>Remelex – Un partenaire de confiance pour vos <span>projets sur mesure</span></h2>
            <p>Remelex occupe une place reconnue ...</p>
          </div>
          <div className="right" data-aos="fade-left"><img src="/Images/descImage.png" alt="desc" /></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" data-aos="fade-up">
        <div className="container">
          <div className="title" data-aos="fade-down">
            <div className="liner" data-aos="fade-up" data-aos-delay="100">
              <div className="line-l"></div>
              <FaTools />
              <div className="line-r"></div>
            </div>

            <h2 data-aos="fade-up" data-aos-delay="200">Contactez-nous</h2>

            <div className="liner" data-aos="fade-up" data-aos-delay="300">
              <div className="line-l"></div>
              <span>Notre réseau</span>
              <div className="line-r"></div>
            </div>
          </div>

          <div className="contact-container">
            <div className="left" data-aos="fade-right" data-aos-delay="400">
              <iframe
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&origin=Av.%20Abderrahim%20Bouabid%2C%20Secteur%206%2C%20Mag%204%2C%20Imm%203%2C%20Hay%20Salam%20%E2%80%93%20Sal%C3%A9&destination=Av.%20Abderrahim%20Bouabid%2C%20Secteur%206%2C%20Mag%204%2C%20Imm%203%2C%20Hay%20Salam%20%E2%80%93%20Sal%C3%A9&mode=driving&zoom=13&maptype=satellite"
                allowFullScreen
                title="Remelex Location"
              ></iframe>

              <div className="infos" data-aos="fade-up" data-aos-delay="500">
                <ul>
                  <li>
                    <FiMapPin />
                    <span>Av. Abderrahim Bouabid, Secteur 6, Mag 4, Imm 3, Hay Salam – Salé</span>
                  </li>
                  <li>
                    <FiPhone />
                    <span>(+212) 06 48 40 33 45</span>
                  </li>
                  <li>
                    <SlEnvolope />
                    <span>contact@remelex.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="right" data-aos="fade-left" data-aos-delay="600">
              <div className="form" data-aos="fade-up" data-aos-delay="700">
                <div className="double-inp">
                  <div className="inp" data-aos="fade-up" data-aos-delay="800">
                    <label htmlFor="prenom">Prenom</label>
                    <input type="text" placeholder="Prénom" />
                  </div>
                  <div className="inp" data-aos="fade-up" data-aos-delay="900">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" placeholder="Nom" />
                  </div>
                </div>

                <div className="double-inp">
                  <div className="inp" data-aos="fade-up" data-aos-delay="1000">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="inp" data-aos="fade-up" data-aos-delay="1100">
                    <label htmlFor="tel">Téléphone</label>
                    <input type="text" placeholder="Numéro de téléphone" />
                  </div>
                </div>

                <textarea
                  placeholder="Message"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                />

                <button
                  data-aos="zoom-in"
                  data-aos-delay="1300"
                >
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}
