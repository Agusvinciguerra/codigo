class Scene5 extends Phaser.Scene {
    constructor() {
      super('historia2');
    }

    preload () {

      this.load.image('historia', 'assets/historiamain.png');
      this.load.image('sgtebutton', 'assets/sgte.png');
    }

    create () {

      this.add.image(400, 300, 'historia')

      var comienza = this.add.image(765, 500, 'sgtebutton')
      comienza.setInteractive()
      comienza.on('pointerdown', () => this.scene.start('historia3') );
  
    }
}