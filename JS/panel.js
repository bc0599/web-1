panel=class{
    constructor(){
        this.panel=document.createElement("div");
    }
    setProperties(){
        this.panel.style.position="absolute";
        this.panel.style.left="100px";
        this.panel.style.top="100px";
        this.panel.style.width="200px";
        this.panel.style.height="50px";
        this.panel.style.backgroundColor="rgba(100,100,100,.5)";
        return this;
    }
    show(){
        this.panel.style.display="block";
        return this;
    }
    hide(){
        this.panel.style.display="none";
        return this;
    }
    addToBody(){

        document.body.appendChild(this.panel);
        return this;
    }
}