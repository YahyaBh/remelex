import { FaRegStar, FaTools } from "react-icons/fa";
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

        </div>
      </section>



    </>
  );
}
