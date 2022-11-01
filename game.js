class Game {
	constructor(backgroundImage) {
		this.backgroundImage;
        this.imageStringPath = backgroundImage;
	}


	preload() {
		this.backgroundImage = loadImage(this.imageStringPath);   
	}
    

	draw() {
	
        image(this.backgroundImage, 0, 0);
        
        function update(e){
            let x = e.clientX || e.touches[0].clientX
            let y = e.clientY || e.touches[0].clientY
          console.log(window.innerWidth, window.innerHeight)
            document.documentElement.style.setProperty('--cursorX', x-Math.floor(window.innerWidth/6) + 'px')
            document.documentElement.style.setProperty('--cursorY', y-300 + 'px')
          }
          
          document.addEventListener('mousemove',update)
          document.addEventListener('touchmove',update)

                   
       
        }
        
        
    }
