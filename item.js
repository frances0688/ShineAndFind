class Item {
    constructor(name,x,y,w,h) {
        this.name = name
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.li = document.createElement('li'),
        this.li.innerText = this.name
    }

    
}