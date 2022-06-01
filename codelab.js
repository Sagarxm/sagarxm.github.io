const image = new Image();

// image.src = 'data:image/jpeg;base64,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';
image.src='data:image/jpeg;base64,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';
image.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 205;
    canvas.height = 246;

    let particlesArray = [];
    const numberOfParticles = 12000;
    const detail = 1;

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let grid = [];
    for (let y = 0; y < canvas.height; y += detail){
        let row = [];
        for (let x = 0; x < canvas.width; x += detail){
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)]
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)]
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)]
            const color = 'rgb(' + red +',' + green + ',' + blue + ')';
            const brightness = calculateBrightness(red, green, blue)/100;

            row.push(brightness);
        }  
        grid.push(row); 
    }

    class Particle {
        constructor(){
            this.x = Math.random() * canvas.width;
            this.y =  0;
            //this.prevX = this.x;
            this.speed = 0;
            this.velocity = Math.random() * 0.7;
            this.size = Math.random() * 2 + .1;
        }
        update () {
            this.speed = grid[Math.floor(this.y / detail)][Math.floor(this.x / detail)];
            let movement = (2.5 - this.speed) + this.velocity;
            this.y += movement;
            if (this.y >= canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
            //console.log(this.x += movement)
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    function init(){
        for (let i = 0; i < numberOfParticles; i++){
            particlesArray.push(new Particle());
        }
    }
    init();

    function animate () {
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0,0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.2;
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * 0.3;
            particlesArray[i].draw();
        }
        requestAnimationFrame( animate );
    }
    animate();

    function calculateBrightness(red, green, blue){
        return blue;
    }

});