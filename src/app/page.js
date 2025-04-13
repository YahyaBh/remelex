"use client"

import { useState, useEffect } from "react"

import { FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaRegStar, FaStar, FaTiktok, FaTools } from "react-icons/fa";
import Navbar from "./Layout/Navbar/page";
import Subnav from "./Layout/Subnav/page";

import './page.scss'
import { FiPhone } from "react-icons/fi";
import { SlEnvolope } from "react-icons/sl";

const galleryItems = [
  { id: 1, image: "/Images/testGallery.png", category: "alluminume", alt: "gallery image" },
  { id: 2, image: "/Images/testGallery.png", category: "fer", alt: "gallery image" },
  { id: 3, image: "/Images/testGallery.png", category: "inox", alt: "gallery image" },
  { id: 4, image: "/Images/testGallery.png", category: "travaux divers", alt: "gallery image" },
  { id: 5, image: "/Images/testGallery.png", category: "alluminume", alt: "gallery image" },
  { id: 6, image: "/Images/testGallery.png", category: "fer", alt: "gallery image" },
  { id: 7, image: "/Images/testGallery.png", category: "inox", alt: "gallery image" },
  { id: 8, image: "/Images/testGallery.png", category: "travaux divers", alt: "gallery image" },
  { id: 9, image: "/Images/testGallery.png", category: "alluminume", alt: "gallery image" },
  { id: 10, image: "/Images/testGallery.png", category: "fer", alt: "gallery image" },
  { id: 11, image: "/Images/testGallery.png", category: "inox", alt: "gallery image" },
  { id: 12, image: "/Images/testGallery.png", category: "travaux divers", alt: "gallery image" },
]

const gridClasses = ["div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8", "div9", "div10", "div11", "div12"]


export default function Home() {

  const [activeFilter, setActiveFilter] = useState("Tous")
  const [filteredItems, setFilteredItems] = useState(galleryItems)
  const [gridAssignments, setGridAssignments] = useState({})
  const [isTransitioning, setIsTransitioning] = useState(false)



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
    setGridAssignments(assignRandomGridClasses(galleryItems ?? galleryItems))
  }, [])

  return (
    <>
      <Subnav />
      <Navbar />

      <div className="hero">
        <div className="container">
          <div className="hero_details">
            <h3>remelex – Votre expert en aluminium, inox & fer forgé</h3>
            <h1>Des solutions sur mesure pour vos maisons , commerces & <span>projets professionnels.</span></h1>
            <div className="buttons">
              <button className="btn devib">Demandez un devis</button>
              <button className="btn catalogue">Telecharger Catalogue</button>
            </div>
          </div>

          <div className="float_infos">
            <div className="info">
              <FaRegStar />

              <div className="details">
                <h3>4.8</h3>
                <h5>Lorem Ipsum is simply</h5>
              </div>
            </div>

            <div className="info">
              <FaRegStar />

              <div className="details">
                <h3>4.8</h3>
                <h5>Lorem Ipsum is simply</h5>
              </div>
            </div>

            <div className="info">
              <FaRegStar />

              <div className="details">
                <h3>4.8</h3>
                <h5>Lorem Ipsum is simply</h5>
              </div>
            </div>

            <div className="info">
              <FaRegStar />

              <div className="details">
                <h3>4.8</h3>
                <h5>Lorem Ipsum is simply</h5>
              </div>
            </div>
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

          </div>

          <button className="btn-plus">
            Plus de service
          </button>

        </div>
      </section>


      <section className="skill">
        <div className="container">

          <div className="title">

            <div className="liner">
              <div className="line-l"></div>
              <FaTools />
              <div className="line-r"></div>
            </div>

            <h2>Ce qui fait notre succès</h2>

            <div className="liner">
              <div className="line-l"></div>
              <span>Nos chiffres</span>
              <div className="line-r"></div>
            </div>

          </div>


          <div className="skills">
            <div className="skill-card">
              <img src="/Images/customer-review 1.svg" alt="customer review" />
              <h3>Expertise & Artisanat</h3>
            </div>

            <div className="line"></div>

            <div className="skill-card">
              <img src="/Images/hourglass.svg" alt="time glass" />
              <h3>Respect des délais</h3>
            </div>

            <div className="line"></div>


            <div className="skill-card">
              <img src="/Images/solution.svg" alt="problem solve" />
              <h3>Solutions sur mesure</h3>
            </div>

            <div className="line"></div>


            <div className="skill-card">
              <img src="/Images/maintenance.svg" alt="problem solve" />
              <h3>Équipe qualifiée et professionnelle</h3>
            </div>
          </div>

        </div>

      </section>


      <section className="feedback">
        <div className="container">
          <div className="title">

            <div className="liner">
              <div className="line-l"></div>
              <FaTools />
              <div className="line-r"></div>
            </div>

            <h2>Testimonials</h2>

            <div className="liner">
              <div className="line-l"></div>
              <span>Que disent nos clients</span>
              <div className="line-r"></div>
            </div>

            <p>« Nous considérons nos clients comme des invités, à une fête où nous sommes les hôtes »</p>

          </div>


          <div className="feedbacks">
            <div className="feedback-card">
              <div className="top">
                <img src="/Images/testPer.png" alt="person avatar" />
                <div className="details">
                  <h3>Bimosaurus</h3>
                  <p>Graphic Designer</p>
                </div>
              </div>
              <div className="bottom">
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p>I’ve used other kits, but this one is the best. The attention to detail and usability are truly amazing.</p>
              </div>


            </div>

            <div className="feedback-card">
              <div className="top">
                <img src="/Images/testPer.png" alt="person avatar" />
                <div className="details">
                  <h3>Bimosaurus</h3>
                  <p>Graphic Designer</p>
                </div>
              </div>
              <div className="bottom">
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p>I’ve used other kits, but this one is the best. The attention to detail and usability are truly amazing.</p>
              </div>


            </div>

            <div className="feedback-card">
              <div className="top">
                <img src="/Images/testPer.png" alt="person avatar" />
                <div className="details">
                  <h3>Bimosaurus</h3>
                  <p>Graphic Designer</p>
                </div>
              </div>
              <div className="bottom">
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p>I’ve used other kits, but this one is the best. The attention to detail and usability are truly amazing.</p>
              </div>


            </div>

          </div>

        </div>
      </section >


      <section className="steps">
        <div className="container">
          <div className="title">

            <div className="liner">
              <div className="line-l"></div>
              <FaTools />
              <div className="line-r"></div>
            </div>

            <h2>Comment ça marche</h2>

            <div className="liner">
              <div className="line-l"></div>
              <span>Notre processus de travail</span>
              <div className="line-r"></div>
            </div>

            <p>Ensemble pour trouver la meilleur solution avec le meilleur prix.</p>

          </div>


          <div className="steps-container">
            <div className="step-card">
              <div className="img-cont">
                <img src="/Images/budget 1.svg" alt="demande devi" />
              </div>
              <h3>1. Devis</h3>
              <p>L'envoyez votre demande devis en ligne ou appelez nous au téléphone.</p>
            </div>

            <img src="/Images/arrowStep.svg" alt="arrow" className="arrow" />

            <div className="step-card">
              <div className="img-cont">
                <img src="/Images/fact-checking.svg" alt="check facture" />
              </div>
              <h3>2. Confirmation</h3>
              <p>Ensemble nous trouvons la meilleure solution la plus économique et plus de qualité.</p>
            </div>

            <img src="/Images/arrowStep.svg" alt="arrow" className="arrow" />


            <div className="step-card">
              <div className="img-cont">
                <img src="/Images/support.svg" alt="support available" />
              </div>
              <h3>3. Exécution</h3>
              <p>Nous nous occupons de l’achat des matériels et l’installation.</p>
            </div>

            <img src="/Images/arrowStep.svg" alt="arrow" className="arrow" />


            <div className="step-card">
              <div className="img-cont">
                <img src="/Images/fast-delivery.svg" alt="fast delivery" />
              </div>
              <h3>4. Livraison</h3>
              <p>Apres les travaux vous faites le constat que tout est bien. nous sommes sur que vous serez satisfait.</p>
            </div>

          </div>
        </div>
      </section>


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
              <li className={activeFilter === "Tous" ? "active" : ""} onClick={() => handleFilterChange("Tous")}>
                Tous
              </li>
              <li
                className={activeFilter === "alluminume" ? "active" : ""}
                onClick={() => handleFilterChange("alluminume")}
              >
                alluminume
              </li>
              <li className={activeFilter === "fer" ? "active" : ""} onClick={() => handleFilterChange("fer")}>
                fer
              </li>
              <li className={activeFilter === "inox" ? "active" : ""} onClick={() => handleFilterChange("inox")}>
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
              >
                <img src={item.image || "/placeholder.svg"} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="devi">
        <div className="container">
          <div className="left">
            <div className="liner">
              <div className="line-l"></div>
              <FaTools />
              <div className="line-r"></div>
            </div>
            <h2>Devis Gratuit</h2>
            <p>Décrivez-nous votre projet de menuiserie et on revient vers vous très vite.</p>
            <div className="line" />
            <p>Demandez un devis gratuit, et comparez la qualité de notre offre autour de vous..</p>

            <button>Demandez un devis</button>
          </div>

          <div className="right">
            {/* <img src="/Images/devisection.png" alt="devi image" /> */}
          </div>
        </div>
      </section>


      <section className="colab">
        <div className="container">
          <div className="title">
            <div className="liner">
              <div className="line-l"></div>
              <FaTools />
              <div className="line-r"></div>
            </div>

            <h2>Nos partenaires</h2>

            <div className="liner">
              <div className="line-l"></div>
              <span>Notre réseau</span>
              <div className="line-r"></div>
            </div>
          </div>

          <p>Remelex travaille avec des partenaires fiables à l’échelle nationale afin de proposer à ses clients des produits de haute qualité au meilleur prix. Chaque matériau est rigoureusement sélectionné pour s’adapter aussi bien aux constructions neuves qu’aux projets de rénovation, garantissant ainsi des réalisations durables, esthétiques et parfaitement adaptées aux besoins de chaque client.</p>

          <div className="colab-container">
            <img src="/Images/ESTest.png" alt="colab 1" />
            <img src="/Images/ESTest.png" alt="colab 2" />
            <img src="/Images/ESTest.png" alt="colab 3" />
            <img src="/Images/ESTest.png" alt="colab 4" />
          </div>
        </div>
      </section>


      <section className="desc">
        <div className="container">
          <div className="left">
            <h2>
              Remelex – Un partenaire de confiance pour vos <span>projets sur mesure</span>
            </h2>

            <p>
              Remelex occupe une place reconnue sur le marché national grâce à son expertise dans les domaines de la menuiserie aluminium, inox et ferronnerie. Forte de nombreuses réalisations dans les secteurs résidentiel et professionnel, l’entreprise s’engage à proposer des solutions modernes, durables et esthétiques pour l’enveloppe du bâtiment.
              <br />
              Notre mission est de promouvoir l’utilisation de matériaux de haute qualité dans la fabrication de fenêtres, portes, façades, cloisons, cuisines, rampes, grilles décoratives, et bien plus encore. Chaque réalisation allie design soigné, fonctionnalité optimale et excellence artisanale, afin de répondre aux exigences les plus élevées de nos clients.</p>
          </div>

          <div className="right">
            <img src="/Images/descImage.png" alt="desc image" />
          </div>
        </div>
      </section>


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
              <hr/>
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
              <hr/>
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

    </>
  );
}
