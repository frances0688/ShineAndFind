class Game {
	constructor() {
		this.backgroundImage;
	}


	preload() {
		this.backgroundImage = loadImage("./img/church-1000x606.jpeg");    
	}
    

	draw() {
	
        image(this.backgroundImage, 0, 0);
        
        function update(e){
            let x = e.clientX || e.touches[0].clientX
            let y = e.clientY || e.touches[0].clientY
          
            document.documentElement.style.setProperty('--cursorX', x-350 + 'px')
            document.documentElement.style.setProperty('--cursorY', y-100 + 'px')
          }
          
          document.addEventListener('mousemove',update)
          document.addEventListener('touchmove',update)

        }
}






