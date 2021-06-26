class Scene6 extends Phaser.Scene {
    constructor() {
      super('ayuda');
    }

    preload () {
      this.load.image('ayudamenu', 'assets/menuayuda.png'); 
      this.load.image('comojugar', 'assets/comojugar.png'); 
      this.load.image('volver', 'assets/volver.png');
    }

    create () {
      this.add.image(400, 300, 'ayudamenu')

      var comojugar = this.add.image(650, 500, 'comojugar')
      comojugar.setInteractive()
      comojugar.on('pointerdown', () => this.scene.start('comojugar') );
  

      var atras = this.add.image(775, 550, 'volver')
      atras.setInteractive()
      atras.on('pointerdown', () => this.scene.start('inicio') );
  }

}