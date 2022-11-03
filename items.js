class Items {
    constructor(array) {
        this.selectedItems = this.selectRandomItems(array);

    }


    selectRandomItems(array) {
        return array.sort(() => Math.random() - 0.5).slice(0,10)   
    }

   
    
    draw() {
        for (let i=0; i<this.selectedItems.length; i++) {
            noFill();
            noStroke();
            rect(this.selectedItems[i].x, this.selectedItems[i].y, this.selectedItems[i].w, this.selectedItems[i].h);
        }    

    }

    found() {
        for (let i=0; i<this.selectedItems.length; i++) {
            // if the mouse is over the rectangle
            if ((mouseX > this.selectedItems[i].x) && (mouseX < this.selectedItems[i].x + this.selectedItems[i].w) &&
            (mouseY > this.selectedItems[i].y) && (mouseY < this.selectedItems[i].y + this.selectedItems[i].h)) { 
                let itemLocation = this.selectedItems[i].li;
                itemLocation.classList.add('strikeThrough');  
                
            }
        }
    }
}