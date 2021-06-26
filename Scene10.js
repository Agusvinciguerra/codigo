class Scene10 extends Phaser.Scene {
    constructor() {
      super('nivel2');
    }

    create () {

        // Cámara

        camera2 = this.cameras.main; 
        
        this.cameras.main.setBounds(0, 0, 1800, 600)

        // Background

        this.add.image(900, 300, 'bg2')

        platform = this.physics.add.staticGroup();

        platform.create(182, 563, 'uno'); // Base 

        platform.create(800, 563, 'dos'); // Base
        
        platform.create(1080, 563, 'uno'); // Base 

        platform.create(1710, 563, 'uno'); // Base

        platform.create(210, 450, 'p2');

        platform.create(180, 220, 'dos');
        
        platform.create(600, 355, 'uno');

        platform.create(850, 465, 'p2');

        platform.create(950, 270, 'p2');

        platform.create(1400, 220, 'dos');

        platform.create(-10, 300, 'vertical'); // Borde izquierdo

        platform.create(1810, 300, 'vertical'); // Borde derecho

        platform.create(900, -10, 'horizontal'); // Borde arriba

        // World Bounds

        Wbounds = this.physics.add.staticGroup()

        Wbounds.create(900, 610, 'horizontal');

        // Player 

        player = this.physics.add.sprite(28, 500, 'still');

        player.setScale(0.7);

        this.physics.add.collider(player, platform); // Collider con plataformas

        this.physics.add.overlap(player, Wbounds, this.deathone, null, this); // Consecuencia colisión con el borde 

        //this.physics.add.collider(player, tween); 

        this.physics.add.collider(player, mplat);

        player.setCollideWorldBounds(false);
    
        if (cursors =! undefined){
            
            cursors = this.input.keyboard.createCursorKeys();
        }

        // Rayos 

        rayall = this.physics.add.group({

            key: 'rayoide',

            repeat: 4, 

            setXY: {x: 20, y: 20, stepX: 300, stepY: 30},
        });

        this.physics.add.collider(rayall, platforms);

        this.physics.add.overlap(player, rayall, this.recorayo, null, this);

        ray = this.add.image(16, 25, 'rayoide')

        ray.scrollFactorX = 0

        ray.scrollFactorY = 0

        rayoText = this.add.text(32, 16, ':', { fontSize: '30px', fill: '#000000' });

        rayoText.scrollFactorX = 0

        rayoText.scrollFactorY = 0

        rayoScore = 0;

        this.physics.add.collider(rayall, platform)

        // Golden apples 

        gapple = this.physics.add.group();

        this.physics.add.collider(gapple, platform)

        this.physics.add.overlap(player, gapple, this.collectgapple, null, this, this.sound.play("g_apple")); 

        // Idas

        idas = this.add.image(720, 70, 'idas')

        idastween = this.tweens.add({

            targets: idas,

            y: 140,

            paused: false,

            yoyo: true,

            repeat: -1
        })

        idas.scrollFactorX = 0

        idas.scrollFactorY = 0

        // Timer settings

        initialTime = 120

        timedEvent = this.time.addEvent({ delay: 1000, callback: this.timer, callbackScope: this, loop: true });

        timeText = this.add.text(120, 16, '', { fontSize: '30px', fill: '#000000' });

        timeText.scrollFactorX = 0

        timeText.scrollFactorY = 0

        clok = this.add.image(100, 27, 'cloc');

        clok.scrollFactorX = 0

        clok.scrollFactorY = 0

        // Red apples

        rap = this.add.image(235, 25, 'rapple'); 

        rap.scrollFactorX = 0

        rap.scrollFactorY = 0

        rapple = this.physics.add.group();

        this.physics.add.collider(rapple, platform);

        this.physics.add.overlap(player, rapple, this.collectrapple, null, this);

        initialenergy = 100; 

        energyText = this.add.text(250, 16, '', { fontSize: '30px', fill: '#000000' }); 

        gameOver = false;

        this.jumps = 0;

        // Inicialización 

        gameOver = false;

        this.jumps = 0;

        // Flechas 

        arrows = this.physics.add.group({

            key: 'arrow',

            repeat: 10, 

            setXY: {x: 20, y: 20, stepX: 300, stepY: 30},
        });

        this.physics.add.collider(rayall, platforms);

        this.physics.add.overlap(player, arrows, this.arrowhit, null, this);
    }

    update () {

        camera2.centerOn(player.x, player.y);

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
    
            var x = (player.x < 900) ? Phaser.Math.Between(100, 300) : Phaser.Math.Between(0, 400);
    
            gapple = gapple.create(x, 200, 'gapple');
    
            gapple.setCollideWorldBounds(false);
    
            gapple.allowGravity = true;
            
        }

    }

    deathone(player, Wbounds) {

        gameOver = true;

        player.anims.play('death', true);

        player.setTint(0xFAB0AB);

        this.physics.pause();

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

    collectrapple(player, rapple) {

        rapple.disableBody(true, true);

        initialenergy += 20

        energyText.setText(':' + initialTime)

    }

    arrowhit(player, arrows) {

        initialenergy -= 20,

        energyText.setText(':' + initialTime)
    }
}
