class Scene8 extends Phaser.Scene {
    constructor() {
      super('historia3');
    }

    preload () {

      this.load.image('fin', 'assets/historiafin.png');
      this.load.image('start', 'assets/comenzar.png');
    }

    create () {

      this.add.image(400, 300, 'fin')

      var comienza = this.add.image(765, 500, 'start')
      comienza.setInteractive()
      comienza.on('pointerdown', () => this.scene.start('nivel2') );
  
    }
}