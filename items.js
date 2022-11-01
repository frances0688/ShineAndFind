

class Items {
    constructor(array) {
        this.selectedItems = this.selectRandomItems(array);
        this.item
    }


    selectRandomItems(array) {
        return array.sort(() => Math.random() - 0.5).slice(0,9)
        
    }
    
    draw() {
        for (let i=0; i<this.selectedItems.length; i++) {
            noFill();
            noStroke();
            rect(this.selectedItems[i].x, this.selectedItems[i].y, this.selectedItems[i].w, this.selectedItems[i].h);

            if (mouseIsPressed){
                //if the mouse is over the rectangle
                console.log('first if')
                if ((mouseX > this.selectedItems[i].x) && (mouseX < this.selectedItems[i].x + this.selectedItems[i].w) &&
                    (mouseY > this.selectedItems[i].y) && (mouseY < this.selectedItems[i].y + this.selectedItems[i].h)) {
                      console.log('hffj')
                        this.selectedItems[i].li.setAttribute('text-decoration', 'line-through')  
                }
            } 
        }

    }

}