class Scene3 extends Phaser.Scene {
    constructor() {
      super('medio');
    }

    create() {

      var temple = this.add.image(400, 300, 'temple')

      temple.setInteractive()

      temple.on('pointerdown', () => this.scene.start('nivel2') );
 
    }
}