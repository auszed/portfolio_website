class header_main extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML= `
        
            <div class="span-col-2 span-col-2 span-col-1-sm"></div>
            <div class="span-col-4 span-col-5-md span-col-8-sm">
                <a class=" " href="index.html">
                    <img class="logo_icono animate__animated animate__pulse " src="assets/favicon.png" alt="logo" >
                </a>
                
            </div>
            <div class="span-col-4 span-col-5-md span-col-1-sm navbar_right_mobile">
                <button class="navbar-toggler navbar-toggler-left ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item"><a class="nav-link animation_text" href="about.html">About</a></li>
                        <li class="nav-item"><a class="nav-link animation_text" href="projects.html">Projects</a></li>
                        <li class="nav-item"><a class="nav-link animation_text" href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="span-col-2 span-col-1-md span-col-1-sm"></div>
        
                
        `
    }
}

// 1sr la etiketa, 2nd el nombre de la clase
window.customElements.define("header-main",header_main);