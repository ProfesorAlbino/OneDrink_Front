<template>
    <header class="header_section">
       <div class="container">
          <nav class="navbar navbar-expand-lg">
             <div class="navbar-brand">
                <a href="#">
                   <img src="/Logos/Logo_One_Drink.png" alt="Logo" class="logo">
                </a>
             </div>
             
             <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
             </button>
             
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                   <li class="nav-item active">
                      <a class="nav-link" href="#">Inicio</a>
                   </li>
                   <li class="nav-item">
                      <a class="nav-link" href="#">Acerca de nosotros</a>
                   </li>
                   <li class="nav-item">
                      <a class="nav-link" href="#">Productos</a>
                   </li>
                   <li class="nav-item">
                      <a class="nav-link" href="#">Envíos</a>
                   </li>
                   <li class="nav-item">
                      <a class="nav-link" href="#">Encargos</a>
                   </li>
                   <li class="nav-item">
                      <a class="nav-link" href="#">Contacto</a>
                   </li>
                </ul>
                
                <div class="nav-actions">
                   <a href="#" class="login-link">
                      <i class="fa fa-user"></i>
                      <span>Iniciar Sesión</span>
                   </a>
                   <a href="#" class="search-link">
                      <i class="fa fa-search"></i>
                   </a>
                </div>
             </div>
          </nav>
       </div>
    </header>
 </template>
 
<style>
.header_section {
    width: 100%;
    background: #0c0b09;
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    color: #ffffff;
}

.navbar {
    display: flex;
    align-items: center;
    padding: 0;
}

.navbar-brand {
    margin: 0;
    padding: 0;
}

.logo {
    height: 80px;
    width: auto;
    transition: transform 0.3s ease;
}

.logo:hover {
    transform: scale(1.05);
}

.navbar-collapse {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-nav {
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    gap: 10px;
}

.nav-item {
    position: relative;
}

/* Establecemos el color blanco por defecto para todos los enlaces */
.navbar a,
.nav-link,
.login-link,
.search-link,
.fa {
    color: #ffffff !important;
}

.nav-link {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 12px 20px;
    transition: all 0.3s ease;
    border-radius: 4px;
}

.nav-link:hover, 
.nav-item.active .nav-link {
    color: #ffffff !important;
    background-color: #f01c1c;
    transform: translateY(-2px);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 20px;
}

.login-link, 
.search-link {
    font-size: 16px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s ease;
}

.login-link:hover, 
.search-link:hover {
    color: #f01c1c !important;
}

.fa {
    font-size: 18px;
}

/* Aseguramos que el botón del menú móvil sea visible */
.navbar-toggler {
    border-color: rgba(255, 255, 255, 0.5);
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

@media (max-width: 991px) {
    .navbar-collapse {
        flex-direction: column;
        align-items: flex-start;
    }

    .navbar-nav {
        flex-direction: column;
        width: 100%;
        margin: 20px 0;
    }

    .nav-actions {
        width: 100%;
        justify-content: center;
        margin-top: 20px;
    }

    .nav-link {
        padding: 10px 15px;
    }
}
</style>