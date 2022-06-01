//const myImadge = new Image();
const myImage = new Image();

myImage.src = 'data:image/jpeg;base64,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';
myImage.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    canvas.width = 500;
    canvas.height = 700;
    let particlesArray = [];
    const numberOfParticles = 5000;
    const detail =1;
    let mappedImage = [];
    for (let y = 0; y < canvas.height; y++) {
        let row = [];
        for (let x = 0; x < canvas.width; x++) {
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];

            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const brightness = calculateRelativeBrightness(red, blue, green);

            const cell = [
                brightness
            ];
            row.push(cell);
        }
        mappedImage.push(row);
    }
    function calculateRelativeBrightness(red, blue, green) {
        return Math.sqrt((red * red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114) / 100;
    }

    class Particle {

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 4.5;
            this.size = Math.random() * 1.5 + 1;
            this.position1 = Math.floor(this.x);
            this.position2 = Math.floor(this.y);
        }
        update() {
            this.position1 = Math.floor(this.x);
            this.position2 = Math.floor(this.y);
            this.speed = row[Math.floor(this.y / detail)][Math.floor(this.x / detail)];
            let movement = (2.5 - this.speed) + this.velocity;
            //console.log(mappedImage)
            
            // console.log(movement)
            this.y += movement;
            if (this.y >= canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;

            }
        }
        draw() {
            ctx.beginPath();
            ctx.fillStyle = 'green';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();

        }



    }

    function init() {
        for (let i = 0; i < numberOfParticles; i++) {

            particlesArray.push(new Particle);

        }
    }
    init();
    function animate() {
        ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {

            particlesArray[i].update();
            particlesArray[i].draw();

        }
        requestAnimationFrame(animate);
    }
    animate();
});




