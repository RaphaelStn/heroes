class Background {
    constructor(x, y, w, h, img) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
    }
    draw(ctx) {
        let ptrn = ctx.createPattern(this.img, 'repeat');
        ctx.fillStyle = ptrn;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}