class Scene9 extends Phaser.Scene {
    constructor() {
      super('creditos');
    }

    preload () {

      this.load.image('creds', 'assets/credits.png');
      this.load.image('volver', 'assets/volver.png');
    }

    create () {

      this.add.image(400, 300, 'creds')

      var backtomain = this.add.image(765, 550, 'volver')
      backtomain.setInteractive()
      backtomain.on('pointerdown', () => this.scene.start('inicio') );
  
    }
}