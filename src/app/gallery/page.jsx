"use client"

import { useState, useEffect } from 'react'

import Subnav from '../Layout/Subnav/page'
import Navbar from '../Layout/Navbar/page'
import Footer from '../Layout/Footer/footer'
import { FaTools } from 'react-icons/fa'

import AOS from 'aos'
import 'aos/dist/aos.css'

import './page.scss'
import Loading from '../loading/page'


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
    { id: 13, image: "/Images/testGallery.png", category: "alluminume", alt: "gallery image" },
    { id: 14, image: "/Images/testGallery2.png", category: "fer", alt: "gallery image" },
    { id: 15, image: "/Images/testGallery3.png", category: "inox", alt: "gallery image" },
    { id: 16, image: "/Images/testGallery4.png", category: "travaux divers", alt: "gallery image" },
    { id: 17, image: "/Images/testGallery5.png", category: "alluminume", alt: "gallery image" },
    { id: 18, image: "/Images/testGallery6.png", category: "fer", alt: "gallery image" },
    { id: 19, image: "/Images/testGallery7.png", category: "inox", alt: "gallery image" },
    { id: 20, image: "/Images/testGallery2.png", category: "travaux divers", alt: "gallery image" },
    { id: 21, image: "/Images/testGallery3.png", category: "alluminume", alt: "gallery image" },
    { id: 22, image: "/Images/testGallery4.png", category: "fer", alt: "gallery image" },
    { id: 23, image: "/Images/testGallery5.png", category: "inox", alt: "gallery image" },
    { id: 24, image: "/Images/testGallery6.png", category: "travaux divers", alt: "gallery image" },
]

const gridClasses = ["div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8", "div9", "div10", "div11", "div12", "div13", "div14", "div15", "div16", "div17", "div18", "div19", "div20", "div21", "div22", "div23", "div24"]
const Gallery = () => {

    const [activeFilter, setActiveFilter] = useState("Tous")
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [filteredItems, setFilteredItems] = useState(galleryItems)
    const [gridAssignments, setGridAssignments] = useState({})
    const [loading, setLoading] = useState(true)





    const [showModal, setShowModal] = useState()
    const [moadlID, setModalId] = useState()

    useEffect(() => {
        AOS.init({ duration: 300, easing: 'ease-in-out', once: true })
        setLoading(false);
    }, [])

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
            assignments[item.id] = gridClasses[index % 24]
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

    return (loading ? <Loading /> :
        <div>
            <Subnav />
            <Navbar />

            <div className="hero">
                <div className="container">
                    <div className="hero_details" data-aos="fade-up">
                        <h3>Chez Remelex</h3>
                        <h1>
                            chaque projet est une preuve de notre <span>engagement</span> envers la
                            <span> qualité</span>, la précision et la satisfaction client.
                        </h1>
                        <h3>
                            Découvrez une sélection de nos travaux réalisés pour maisons, bureaux,
                            cafés, et autres espaces
                        </h3>
                    </div>
                </div>
            </div>

            {showModal ? (
                <div className="modal_gallery" onClick={() => openModal()}>
                    <div className="modal_content" data-aos="zoom-in">
                        <img
                            src={galleryItems[moadlID]?.image}
                            alt={galleryItems[moadlID]?.alt + moadlID}
                        />
                    </div>
                </div>
            ) : (
                ""
            )}

            <section className="gallery">
                <div className="container">
                    <div className="title" data-aos="fade-up">
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

                    <div className="gallery-select" data-aos="fade-right">
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

                    <div
                        className={`gallery-container ${isTransitioning ? "transitioning" : ""
                            }`}
                    >
                        {filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`gallery-card ${gridAssignments[item.id] || gridClasses[index % 24]
                                    }`}
                                style={{ transitionDelay: `${index * 30}ms` }}
                                onClick={() => openModal(item.id)}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <img src={item.image || "/placeholder.svg"} alt={item.id} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <Footer />

        </div>
    )
}

export default Gallery