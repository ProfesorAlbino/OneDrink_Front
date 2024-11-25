<template>
     <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div class="row">
        <div class="col-lg-8">
          <h1>Bienvenido a <span>One Drink</span></h1>
          <h2>Descubre nuestra amplia selección de licores premium, desde los vinos más elegantes hasta los destilados más exclusivos.</h2>

          <div class="btns">
            <a href="#menu" class="btn-menu animated fadeInUp scrollto">Nuestros Productos</a>
          </div>
        </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" class="glightbox play-btn"></a>
        </div>

      </div>
    </div>
  </section>

  |<section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <div class="about-img">
              <img src="/Logos/Section_AcercaDe.jpg" alt="">
            </div>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Acerca de Nosotros</h3>
            <p class="fst-italic">
                En One Drink, creemos que cada celebración merece un toque especial. Somos un emprendimiento apasionado por ofrecer una experiencia única a nuestros clientes, seleccionando cuidadosamente una variedad de vinos, cervezas artesanales, y destilados premium de alta calidad.
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i> Atención personalizada para ayudarte a encontrar la opción perfecta.</li>
              <li><i class="bi bi-check-circle"></i> Precios competitivos para que disfrutes sin preocupaciones.</li>
              <li><i class="bi bi-check-circle"></i> Compromiso con la calidad y el servicio al cliente.</li>
            </ul>
            <p>
                Ya sea para un evento especial, una reunión con amigos o un momento de relajación, estamos aquí para acompañarte en cada brindis. ¡Gracias por elegirnos como tu tienda de confianza! One Drink Porque cada copa cuenta una historia.
            </p>
          </div>
        </div>

      </div>
    </section>

</template>

<style>
#hero {
  width: 100%;
  height: 100vh;
  background: url("/Logos/Curse_Header.avif") top center;
  background-size: cover;
  position: relative;
  padding: 0;
}

#hero:before {
  content: "";
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#hero .container {
  padding-top: 110px;
}

@media (max-width: 992px) {
  #hero .container {
    padding-top: 98px;
  }
}

#hero h1 {
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #fff;
  font-family: "Poppins", sans-serif;
}

#hero h1 span {
  color: #cda45e;
}

#hero h2 {
  color: #eee;
  margin-bottom: 10px 0 0 0;
  font-size: 22px;
}

#hero .btns {
  margin-top: 30px;
}

#hero .btn-menu, #hero .btn-book {
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: inline-block;
  padding: 12px 30px;
  border-radius: 50px;
  transition: 0.3s;
  line-height: 1;
  color: white;
  border: 2px solid #cda45e;
}

#hero .btn-menu:hover, #hero .btn-book:hover {
  background: #cda45e;
  color: #fff;
}

#hero .btn-book {
  margin-left: 15px;
}

#hero .play-btn {
  width: 94px;
  height: 94px;
  background: radial-gradient(#cda45e 50%, rgba(205, 164, 94, 0.4) 52%);
  border-radius: 50%;
  display: block;
  position: relative;
  overflow: hidden;
}

#hero .play-btn::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

#hero .play-btn::before {
  content: '';
  position: absolute;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation: pulsate-btn 2s;
  animation: pulsate-btn 2s;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(205, 164, 94, 0.7);
  top: -15%;
  left: -15%;
  background: rgba(198, 16, 0, 0);
}

#hero .play-btn:hover::after {
  border-left: 15px solid #cda45e;
  transform: scale(20);
}

#hero .play-btn:hover::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border: none;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 200;
  -webkit-animation: none;
  animation: none;
  border-radius: 0;
}

@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 992px) {
  #hero .play-btn {
    margin-top: 30px;
  }
}

@media (max-height: 500px) {
  #hero {
    height: auto;
  }
  #hero .container {
    padding-top: 130px;
    padding-bottom: 60px;
  }
}

@media (max-width: 768px) {
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }
  #hero h2 {
    font-size: 18px;
    line-height: 24px;
  }
}

@-webkit-keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}

@keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}

/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.breadcrumbs {
  padding: 15px 0;
  background: #1d1b16;
  margin-top: 110px;
}

@media (max-width: 992px) {
  .breadcrumbs {
    margin-top: 98px;
  }
}

.breadcrumbs h2 {
  font-size: 26px;
  font-weight: 300;
}

.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
}

.breadcrumbs ol li + li {
  padding-left: 10px;
}

.breadcrumbs ol li + li::before {
  display: inline-block;
  padding-right: 10px;
  color: #37332a;
  content: "/";
}

@media (max-width: 768px) {
  .breadcrumbs .d-flex {
    display: block !important;
  }
  .breadcrumbs ol {
    display: block;
  }
  .breadcrumbs ol li {
    display: inline-block;
  }
}

/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about {
  background: url("Logos/Section_AcercaDe.jpg") center center;
  background-size: cover;
  position: relative;
  padding: 80px 0;
  color: #fff   ;
}

.about:before {
  content: "";
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

.about .about-img {
  position: relative;
  transition: .5s;
}

.about .about-img img {
  max-width: 100%;
  border: 4px solid rgba(255, 255, 255, 0.2);
  position: relative;
}

.about .about-img::before {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 60px;
  height: 60px;
  z-index: 1;
  content: '';
  border-left: 5px solid #cda45e;
  border-top: 5px solid #cda45e;
  transition: .5s;
}

.about .about-img::after {
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  z-index: 2;
  content: '';
  border-right: 5px solid #cda45e;
  border-bottom: 5px solid #cda45e;
  transition: .5s;
}

.about .about-img:hover {
  transform: scale(1.03);
}

.about .about-img:hover::before {
  left: 10px;
  top: 10px;
}

.about .about-img:hover::after {
  right: 10px;
  bottom: 10px;
}

.about .content h3 {
  font-weight: 600;
  font-size: 26px;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  padding-bottom: 10px;
}

.about .content ul i {
  font-size: 20px;
  padding-right: 4px;
  color: #cda45e;
}

.about .content p:last-child {
  margin-bottom: 0;
}

@media (min-width: 1024px) {
  .about {
    background-attachment: fixed;
  }
}
</style>