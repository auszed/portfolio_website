class Project_box extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML= `
        <div class="inside_box">
                <img src="assets/Starting poin-07.png" alt="" class="max_size_projects_image">
        </div>
        <div class="title_projects">
            <h3 class="animation_text">New Algorithm Can Predict Crime in US Cities a Week Before It Happens</h3>
            <p>The algorithm, which was formulated by scientists at the University of Chicago, touts 90% accuracy</p>
        </div>
            
        `
    }
}

// 1sr la etiketa, 2nd el nombre de la clase
window.customElements.define("Project-box",Project_box);