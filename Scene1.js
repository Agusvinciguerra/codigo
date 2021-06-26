class Scene1 extends Phaser.Scene {
    constructor() {
      super('inicio');
    }

    preload () {
      this.load.spritesheet('Left', 'assets/Left.png', { frameWidth: 57, frameHeight: 85 });    
      this.load.spritesheet('Right', 'assets/Right.png', { frameWidth: 57, frameHeight: 85 }); 
      this.load.spritesheet('death', 'assets/death.png', { frameWidth: 85, frameHeight: 85 });
      //this.load.spritesheet('bomb', 'assets/bomb.png', { frameWidth: 50, frameHeight: 60});
      this.load.image('still', 'assets/tipardo.png'); 
      this.load.image('menuone', 'assets/menu principal.png');
      this.load.image('jugar', 'assets/jugar.png');
      this.load.image('creditos', 'assets/creditos.png');
      this.load.image('ayuda', 'assets/ayuda.png');
      this.load.image('ground', 'assets/groundlvl1.png');
      this.load.image('bg', 'assets/lvl1.png');
      this.load.image('rayoide', 'assets/rayoide.png');
      this.load.image('gapple', 'assets/goldenapple.png');
      this.load.image('rapple', 'assets/redapple.png');
      this.load.image('cloc', 'assets/clok.png');
      this.load.image('vertical', 'assets/bound1.png');
      this.load.image('horizontal', 'assets/bound2.png');
      this.load.image('plat1', 'assets/Plat1 lvl1.png');
      this.load.image('plat2', 'assets/Plat2 lvl1.png');
      this.load.image('cloud', 'assets/cloud9.png')
      this.load.image('bg2', 'assets/lvl2.png');
      this.load.image('g2', 'assets/groundlvl2.png');
      this.load.image('puerta', "assets/puerta.png");
      this.load.image('temple', 'assets/temple from afar.png');
      this.load.image('restart', 'assets/Reiniciar.png');
      this.load.image('p2', 'assets/lvl2platform.png'); 
      this.load.image('uno', 'assets/piso/364px.png'); 
      this.load.image('dos', 'assets/piso/533px.png'); 
      this.load.image('tres', 'assets/piso/147px.png');  
      this.load.image('idas', 'assets/idas.png');
      this.load.image('arrow', 'assets/arrow.png'); 

      // Música

    this.load.audio('nivel1', [
      'assets/Musica/cancion_nivel1.ogg',
      'assets/Musica/cancion_nivel1.mp3'
    ]);
    this.load.audio('intro', [
      'assets/Musica/cancion_intro.ogg',
      'assets/Musica/cancion_intro.mp3'
    ]);

      // sfx
      
    this.load.audio('jump', [
      'assets/sonidos/Jump.ogg',
      'assets/sonidos/Jump.mp3',
    ]);
    this.load.audio('g_apple', [
      'assets/sonidos/Golden_Apple.ogg',
      'assets/sonidos/Golden_Apple.mp3',
    ]);
    this.load.audio('rayo', [
      'assets/sonidos/Pickup_Rayo.ogg',
      'assets/sonidos/Pickup_Rayo.mp3',
    ]);
    }
    

    create() {

      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('Left', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'turn',
        frames: [ { key: 'still', frame: 4 } ],
        frameRate: 20
      });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('Right', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'death',
        frames: this.anims.generateFrameNumbers('death', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: 0
      });

      this.anims.create({
        key: 'bomb',
        frames: this.anims.generateFrameNumbers('bomb', {start: 0, end: 2}),
        frameRate: 10, 
        repeat: 1
      })

      this.add.image(400, 300, 'menuone'); 

      var start = this.add.image(500, 420, 'jugar')
      start.setInteractive()
      start.on('pointerdown', () => this.scene.start('historia1') );

      var creds = this.add.image(475, 470, 'creditos')
      creds.setInteractive()
      creds.on('pointerdown', () => this.scene.start('creditos') );

      var help = this.add.image(500, 520, 'ayuda')
      help.setInteractive()
      help.on('pointerdown', () => this.scene.start('ayuda') );

    }
}
