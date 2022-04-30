class Deathzone {
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
    collision(obj) {
        let vX = (obj.x + (obj.w / 2)) - (this.x + (this.w / 2));
        let vY = (obj.y + (obj.h / 2)) - (this.y + (this.h / 2));

        let hWidths = (obj.w / 2) + (this.w / 2);
        let hHeights = (obj.h / 2 ) + (this.h / 2);

        if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
            obj.death = true;
        }
    }
}