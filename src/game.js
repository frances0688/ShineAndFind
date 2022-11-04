class Game {
	constructor(backgroundImage) {
		this.backgroundImage;
        this.imageStringPath = backgroundImage;
	}


	preload() {
		this.backgroundImage = loadImage(this.imageStringPath);   
        startDiv.style.display = "block";
        
	}
    

	draw() {
	
        image(this.backgroundImage, 0, 0);
        
        // flashlight effect
        function update(e){
            let x = e.clientX || e.touches[0].clientX
            let y = e.clientY || e.touches[0].clientY
    
            document.documentElement.style.setProperty('--cursorX', x-150 + 'px')
            document.documentElement.style.setProperty('--cursorY', y-360 + 'px')
          }
          
          document.addEventListener('mousemove',update)
          document.addEventListener('touchmove',update)
 
    }
       
}
