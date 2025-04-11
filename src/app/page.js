import { FaRegStar, FaStar, FaTools } from "react-icons/fa";
import Navbar from "./Layout/Navbar/page";
import Subnav from "./Layout/Subnav/page";

import './page.scss'

export default function Home() {
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
              <button className="btn devi">Demandez un devis</button>
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

    </>
  );
}
