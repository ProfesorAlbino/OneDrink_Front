<template>

<footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>One Drink</h3>
              <p>
                San Jose <br>
                Costa Rica<br><br>
                <strong>Teléfono: 8888-8888</strong> <br>
                <strong>Correo:</strong> Rafael@gmail.com<br>
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Acceso Rápido</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Inicio</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Acerca de nosotros</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Productos</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Términos y condiciones</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Política de privacidad</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Nuestros Servicios</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Envíos</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Encargos</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Regalos</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Información</h4>
            <p>únete para estar al tanto de nuevas ofertas</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>One Drink</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
      </div>
    </div>
  </footer><!-- End Footer -->

</template>

<style>
#footer {
  background: black;
  padding: 0 0 30px 0;
  color: #fff;
  font-size: 14px;
}

#footer .footer-top {
  background: #0c0b09;
  border-top: 1px solid #37332a;
  border-bottom: 1px solid #28251f;
  padding: 60px 0 30px 0;
}

#footer .footer-top .footer-info {
  margin-bottom: 30px;
}

#footer .footer-top .footer-info h3 {
  font-size: 24px;
  margin: 0 0 20px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
}

#footer .footer-top .footer-info p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Playfair Display", serif;
  color: #fff;
}

#footer .footer-top .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #28251f;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .footer-top .social-links a:hover {
  background: #cda45e;
  color: #fff;
  text-decoration: none;
}

#footer .footer-top h4 {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  position: relative;
  padding-bottom: 12px;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #cda45e;
  font-size: 18px;
  line-height: 1;
}

#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

#footer .footer-top .footer-links ul a {
  color: #fff;
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}

#footer .footer-top .footer-links ul a:hover {
  color: #cda45e;
}

#footer .footer-top .footer-newsletter form {
  margin-top: 30px;
  background: #28251f;
  padding: 6px 10px;
  position: relative;
  border-radius: 50px;
  border: 1px solid #454035;
}

#footer .footer-top .footer-newsletter form input[type="email"] {
  border: 0;
  padding: 4px;
  width: calc(100% - 110px);
  background: #28251f;
  color: white;
}

#footer .footer-top .footer-newsletter form input[type="submit"] {
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 20px 2px 20px;
  background: #cda45e;
  color: #fff;
  transition: 0.3s;
  border-radius: 50px;
}

#footer .footer-top .footer-newsletter form input[type="submit"]:hover {
  background: #d3af71;
}

#footer .copyright {
  text-align: center;
  padding-top: 30px;
}

#footer .credits {
  padding-top: 10px;
  text-align: center;
  font-size: 13px;
  color: #fff;
}

</style>