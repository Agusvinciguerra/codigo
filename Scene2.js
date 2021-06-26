class Scene2 extends Phaser.Scene {
    constructor() {
      super('nivel1');
    }

    create ()
    {
        // Cámara

        camera = this.cameras.main; 
        
        this.cameras.main.setBounds(0, 0, 800, 1800)

        // Background 

        this.add.image(400, 900, 'bg');

        // Platforms
        
        platforms = this.physics.add.staticGroup();

        platforms.create(400, 1800, 'ground').refreshBody();

        platforms.create(600, 1680, 'plat1').setScale(0.5).refreshBody(); 

        platforms.create(340, 1550, 'plat2').setScale(0.3).refreshBody(); 

        platforms.create(125, 1430, 'plat1').setScale(0.5).refreshBody(); 

        platforms.create(60, 1650, 'plat1').setScale(0.5).refreshBody();

        platforms.create(500, 1380, 'plat2').setScale(0.3).refreshBody(); 

        platforms.create(695, 1270, 'plat1').setScale(0.5).refreshBody();

        platforms.create(330, 1180, 'plat1').setScale(0.5).refreshBody();

        platforms.create(90, 1060, 'plat1').setScale(0.5).refreshBody();

        platforms.create(700, 1060, 'plat1').setScale(0.5).refreshBody();

        platforms.create(360, 950, 'plat2').setScale(0.3).refreshBody();

        platforms.create(650, 830, 'plat1').setScale(0.5).refreshBody(); 

        platforms.create(280, 730, 'plat1').setScale(0.5).refreshBody(); 

        platforms.create(570, 600, 'plat2').setScale(0.3).refreshBody();

        platforms.create(300, 480, 'plat1').setScale(0.5).refreshBody();

        platforms.create(80, 340, 'plat2').setScale(0.3).refreshBody();

        platforms.create(360, 230, 'plat1').setScale(0.5).refreshBody();

        platforms.create(690, 239, 'cloud').setScale(1.5).refreshBody();

        platforms.create(-10, 900, 'vertical'); //borde izquierdo

        platforms.create(810, 900, 'vertical'); //borde derecho

        platforms.create(400, -10, 'horizontal') //borde arriba

        platforms.create(400, 1810, 'horizontal') //borde abajo

        // Player 

        player = this.physics.add.sprite(100, 1700, 'still');

        player.setScale(0.7);

        this.physics.add.collider(player, platforms);

        player.setCollideWorldBounds(false);
    
        if (cursors =! undefined){
            
            cursors = this.input.keyboard.createCursorKeys();
        }

        // Lightning 

        rayall = this.physics.add.group({

            key: 'rayoide',

            repeat: 4, 

            setXY: {x: 20, y: 20, stepX: 150, stepY: 150},
        });

        this.physics.add.collider(rayall, platforms);

        this.physics.add.overlap(player, rayall, this.recorayo, null, this);

        ray = this.add.image(16, 25, 'rayoide')

        ray.scrollFactorX = 0

        ray.scrollFactorY = 0

        rayoText = this.add.text(40, 16, ':', { fontSize: '30px', fill: '#FFFFFF' });

        rayoText.scrollFactorX = 0

        rayoText.scrollFactorY = 0

        rayoScore = 0;

        gameOver = false;

        this.jumps = 0;

        // Timer settings

        initialTime = 20

        timedEvent = this.time.addEvent({ delay: 1000, callback: this.timer, callbackScope: this, loop: true });

        timeText = this.add.text(700, 16, '', { fontSize: '30px', fill: '#FFFFFF' });

        timeText.scrollFactorX = 0

        timeText.scrollFactorY = 0

        clok = this.add.image(685, 27, 'cloc');

        clok.scrollFactorX = 0

        clok.scrollFactorY = 0

        // Golden apples 

        gapple = this.physics.add.group();

        this.physics.add.collider(gapple, platforms)

        this.physics.add.overlap(player, gapple, this.collectgapple, null, this, this.sound.play("g_apple"));

        //Puerta
        
        puerta = this.physics.add.staticGroup();

        puerta.create(698, 80, 'puerta').setScale(0.8); 

        this.physics.add.overlap(player, puerta, () => this.scene.start("medio"))

        //Musica

        /*var music = this.sound.add('nivel1');

        music.loop = true;

        music.play(); */

        //SFX

        sfxJump = this.sound.add("jump");

        sfxGoldenApple = this.sound.add("g_apple");

        sfxRayo = this.sound.add("rayo");
    }

    update ()
    {
        camera.centerOn(player.x, player.y);

        if (gameOver) {      

            return

        }
        
        
        if (cursors.left.isDown) {

            player.setVelocityX(-160);

            player.anims.play('left', true);
        }

        else if (cursors.right.isDown) {

            player.setVelocityX(160);

            player.anims.play('right', true);
        }

        else {

            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down) {

            player.setVelocityY(-330);

            this.sound.play("jump");

        }
    }

    recorayo(player, rayo) {

        rayo.disableBody(true, true);

        this.sound.play("rayo");

        rayoScore += 1

        rayoText.setText(':' + rayoScore)

        if (rayall.countActive(true) == 3) {

            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            var y = (player.y < 900) ? Phaser.Math.Between(900, 1800) : Phaser.Math.Between(0, 900);

            gapple = gapple.create(x, y, 'gapple');

            gapple.setCollideWorldBounds(false);

            gapple.allowGravity = true;
        }
    }

    gameOver() {        

        gameOver = true;

        //this.physics.pause();

        player.anims.play('death', true);

        player.setTint(0xFAB0AB);

        //music.stop();
    }
    
    timer() {

        if (! gameOver) {    

            initialTime = initialTime - 1; 

            timeText.setText(':' + initialTime);

        if (initialTime == 0) {

            timedEvent.paused = true;

            this.gameOver()

            }            
        }
    }

    collectgapple(player, gapple) {

        gapple.disableBody(true, true);

        initialTime += 50

        timeText.setText(':' + initialTime)

        this.sound.play("g_apple");
    }
    
}