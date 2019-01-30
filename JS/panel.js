class panel{

    constructor(){
        //Creacion del div
        this.panel = document.createElement("div");
        //Variable para comprobar usada para ver si esta pulsado
        this.estaPulsado = false;
        //Creo las variables iniciales del div;
        this.yActual = "100";
        this.xActual = "500";
        //Dibujo el panel
        this.asignarCss().agregarAlBody().mostrar();
        //Le agrego los eventos al panel, si lo cliqueo, si dejo de cliquear, si muevo el mouse dentro, y si sale el mouse de div
        this.panel.addEventListener("mousedown", this.mouseDown, false);
        this.panel.addEventListener("mouseup", this.mouseUp, false);
        this.panel.addEventListener("mousemove", this.mouseMove, false);
        this.panel.addEventListener("mouseover",this.mouseUp,false);
    }

    asignarCss(){
        this.panel.style.position = "absolute";
        this.panel.style.left = this.xActual + "px";
        this.panel.style.top = this.yActual + "px";
        this.panel.style.width = "500px";
        this.panel.style.height = "500px";
        this.panel.style.backgroundColor="rgba(100,100,100,1)";
        return this;
    }

    mostrar(){
        this.panel.style.display="block";
        return this;
    }

    ocultar(){
        this.panel.style.display="none";
        return this;
    }

    agregarAlBody(){
        document.body.appendChild(this.panel);
        return this;
    }
    
    //Logica
    mouseDown(evt) { 
        //Guardo las cordenadas del click
        this.xActual = evt.clientX;
        this.yActual = evt.clientY;    
        //Aviso que se esta pulsando
        this.estaPulsado = true;
    }
    
    mouseMove(evt) {
        //Mientras se este pulsando y moviendo
        if(this.estaPulsado) {
            //Detecto la posicion del mouse
            var xMouse = evt.clientX;
            var yMouse = evt.clientY;
            //Resto la posicion actual del mouse para encontrar la variacion. 
            var xVariacion = xMouse-this.xActual;
            var yVariacion = yMouse-this.yActual;
            //El estado actual ahora es la posicion del mouse
            this.xActual = xMouse;
            this.yActual = yMouse;
            //El style del top sera igual al estilo actual + la variacion en la posicion del mouse
            //Parseo el style.top y el style.left porque ellos traen un string tal que "200px", al parsear le quita el "px"
            //Luego yo se lo agrego de nuevo
            //Altura nueva del Div = la altura actual + la variacion del mouse
            this.style.top = (parseInt(this.style.top)+yVariacion) + "px";
            this.style.left = (parseInt(this.style.left)+xVariacion) + "px";
    
        }
    }
    
    mouseUp(evt) {
        this.estaPulsado = false;
    }

}



    