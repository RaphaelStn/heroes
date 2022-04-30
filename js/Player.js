class Player {
    constructor(x, y, w, h, gravity, keys) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.keys = keys;
    this.gravity = gravity;
    this.speed = 1;
    this.friction = 0.95;
    this.velocity = {x:0, y:0};
    this.grounded = false;
    this.death = false;
    }
    draw(ctx, img) {
        ctx.drawImage(img,this.x, this.y, this.w, this.h)
    }
    movements() {
        if (this.keys[38] && this.grounded ) {
            this.velocity.y -= 2;
            this.grounded = false;
        }
        if (this.keys[39]) {
            if (this.velocity.x <= this.speed) {
                this.velocity.x += 0.05;
                this.flip = false;
            }
        }
        if (this.keys[37]) {
            if (this.velocity.x >= -this.speed) {
                this.velocity.x -= 0.05;
                this.flip = true;
            }
        }
    }
    update(ctx, img) {
        this.movements();
        this.draw(ctx, img);
        this.grounded = false;
        if (!this.grounded) {
            this.velocity.y += this.gravity;
        }
        if(this.grounded){
            this.velocity.y = 0;
        }
        this.velocity.x *= this.friction;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}