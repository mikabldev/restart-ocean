import React from 'react';
import 'mdb-ui-kit/css/mdb.min.css';

const Carousel = () => {
    return (
        <div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">
            {/* Indicadores */}
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>

            {/* Contenido del Carrusel */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="https://images.ecestaticos.com/T7n1X0x3_hzSw6Yl5OlqGFHEws0=/0x110:2183x1339/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3d9%2F587%2Ffbf%2F3d9587fbf2f19d48cbfa884b48be05b9.jpg"
                        className="d-block w-100"
                        alt="Motorbike Smoke"
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Colaborador 1</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img
                        src="https://www.mundodeportivo.com/urbantecno/hero/2023/02/animales-marinos-en-peligro-de-extincion.jpg?width=1200"
                        className="d-block w-100"
                        alt="Mountaintop"
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Colaborador 2</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img
                        src="https://c4.wallpaperflare.com/wallpaper/313/276/950/animales-delfines-mamiferos-marinos-wallpaper-preview.jpg"
                        className="d-block w-100"
                        alt="Woman Reading a Book"
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Colaborador 3</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
            </div>

            {/* Controles */}
            <button
                className="carousel-control-prev"
                type="button"
                data-mdb-target="#carouselDarkVariant"
                data-mdb-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-mdb-target="#carouselDarkVariant"
                data-mdb-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;

