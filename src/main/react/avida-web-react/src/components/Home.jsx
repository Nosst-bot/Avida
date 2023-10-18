import Navbar from './Navbar';
import MapSection from './MapSection';
import Enciclopedia from './Enciclopedia';
import avidaBackground1 from '/src/assets/home-pag.png';
import avidaBackground2 from '/src/assets/ver-guia.png';
import avidaHome2 from '/src/assets/aplicacion-8.png';
import avidaHome3 from '/src/assets/mapa.jpeg';
import avidaHome4 from '/src/assets/ruta-grupo-2.png';
import avidaHome5 from '/src/assets/ruta-grupo.png';
import avidaHome6 from '/src/assets/ruta-bici.png';
import avidaComunity1 from '/src/assets/galeria-1-8.png';
import avidaComunity2 from '/src/assets/galeria-2-8.png';
import avidaComunity3 from '/src/assets/galeria-3-8.png';
import avidaIcon1 from '/src/assets/usuario-1.png';
import avidaIcon2 from '/src/assets/usuario-2.png';
import avidaIcon3 from '/src/assets/usuario-3.png';

import '../css/custom.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <section
        className="masthead"
        style={{ backgroundImage: `url(${avidaBackground1})` }}
      >
        <div className="color-overlay d-flex justify-content-start align-items-center container-fluid">
          <h1 className="customH1 ms-5">
            CONOCE LA
            <br />
            BIODIVERSIDAD
            <br />
            QUE TE RODEA
          </h1>
        </div>
      </section>

      <section className="min-vh-100 d-flex mt-3">
        <div className="container">
          <div className="row d-flex">
            <div className="col align-self-center">
              <h1>
                Conecta con la
                <br />
                naturaleza, Conéctate
                <br />
                con la Comunidad
              </h1>
              <p>
                Bienvenido a nuestra plataforma dedicada a la biodiversidad
                terrestre de Chile. Te invitamos a un emocionante viaje de
                exploración, aprendizaje y conservación de la naturaleza.
                <br />
                <br />
                Nuestra aplicación te permite descubrir la asombrosa
                biodiversidad que te rodea. Captura fotos de las especies que
                encuentres en tus rutas por parques, humedales y ecosistemas.
                Cada avistamiento cuenta para la ciencia y la conservación.
                También aprende sobre las especies locales con nuestras guías de
                identificación y pon a prueba tus conocimientos con
                cuestionarios interactivos. Únete a una comunidad apasionada por
                la naturaleza, comparte tus experiencias y contribuye a
                proyectos de investigación.
              </p>
            </div>
            <div className="col">
              <img
                src={avidaHome2}
                className="img-fluid"
                alt="Imagen de un celular referencial para el hero de la landing, "
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-center">
              <button className="btn btn-success fs-2 px-5">Descargar</button>
            </div>
          </div>
        </div>
      </section>

      <section className="min-vh-75 mt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={avidaHome3} className="img-fluid" alt="" />
            </div>
            <div className="col">
              <h1>Crea y recorre rutas</h1>
              <p>
                Podrás realizar rutas que ya han sido creadas por otros usuarios
                o dar rienda suelta a tu espíritu explorador y diseñar tus
                propios recorridos únicos. En Ávida, priorizamos la seguridad y
                autenticidad de tus aventuras. Cada camino que se comparte en la
                aplicación pasa por un riguroso proceso de verificación y
                aprobación antes de estar disponible para ti. Esto garantiza que
                cada ruta que elijas esté cuidadosamente revisada y aprobada,
                proporcionándote la tranquilidad de un viaje seguro y auténtico
                en medio de la biodiversidad de Chile.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <img src={avidaHome4} className="img-fluid" alt="" />
            </div>
            <div className="col">
              <img src={avidaHome5} className="img-fluid" alt="" />
            </div>
            <div className="col">
              <img src={avidaHome6} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="d-flex justify-content-center">
              <button className="btn btn-success fs-2 px-5">Ver rutas</button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="masthead mt-5"
        style={{ backgroundImage: `url(${avidaBackground2})` }}
      >
        <div className="color-overlay d-flex justify-content-start align-items-center container-fluid">
          <h1 className="customH1 ms-5">
            Conoce
            <br />
            nuestra guía
            <br />
            de exploración
          </h1>
          {/* <button className='btn btn-success '>Ver guía</button> */}
        </div>
      </section>

      <section className="min-vh-100 mt-3">
        <div className="container">
          <h1 className="text-center">Únete a la comunidad</h1>
          <div className="row mt-3">
            <div className="col">
              <img src={avidaComunity1} className="img-fluid" alt="" />
              <div className="container mt-3 row g-0">
                <div className="col">
                  <img src={avidaIcon1} className="img-fluid" alt="" />
                </div>
                <div className="col-md-8 mt-3 ms-1">
                  <h2>María L.</h2>
                  <span className="fs-6">Parque Bustamante</span>
                </div>
                <p className="mt-3">
                  ¡Qué increíble experiencia! Capturé una foto de un cururo en
                  el parque cerca de mi casa y la subí a la aplicación. Me
                  emocionó ver cuántas personas se unieron para identificarlo.
                  ¡Estamos contribuyendo juntos a la conservación de la fauna en
                  Chile!
                </p>
              </div>
            </div>

            <div className="col">
              <img src={avidaComunity2} className="img-fluid" alt="" />
              <div className="container mt-3 row g-0">
                <div className="col">
                  <img src={avidaIcon2} className="img-fluid" alt="" />
                </div>
                <div className="col-md-8 mt-3 ms-1">
                  <h2>Juan C.</h2>
                  <span className="fs-6">Quinta Normal</span>
                </div>
                <p className="mt-3">
                  Nunca antes había notado la diversidad de plantas en mi
                  región. Usando la aplicación, capturé una foto de una ortiga
                  chilena y la compartí. Fue emocionante aprender más sobre la
                  flora chilena y saber que mi contribución cuenta para su
                  conservación.
                </p>
              </div>
            </div>

            <div className="col">
              <img src={avidaComunity3} className="img-fluid" alt="" />
              <div className="container mt-3 row g-0">
                <div className="col">
                  <img src={avidaIcon3} className="img-fluid" alt="" />
                </div>
                <div className="col-md-8 mt-3 ms-1">
                  <h2>Carlos R.</h2>
                  <span className="fs-6">Templo Bahai</span>
                </div>
                <p className="mt-3">
                  Soy un amante de las aves y esta aplicación es un tesoro.
                  Fotografié un cachudito en el templo Bahai y rápidamente lo
                  identificamos. Ahora, puedo aprender sobre las aves de Chile
                  mientras contribuyo a la investigación científica. ¡Muy
                  agradecido por esta oportunidad!
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-center">
              <button className="btn btn-success fs-2 px-5">Comunidad</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
