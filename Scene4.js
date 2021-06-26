class Scene4 extends Phaser.Scene {
    constructor() {
      super('historia1');
    }

    preload ()
    {
      this.load.image('introduccion', 'assets/historiaintro.png');   
      this.load.image('saltarbutton', 'assets/saltarhistoria.png');
      this.load.image('sgtebutton', 'assets/sgte.png');
    }
    
    create() {
      
      this.add.image(400, 300, 'introduccion')

      var sgte = this.add.image(765, 500, 'sgtebutton')
      sgte.setInteractive()
      sgte.on('pointerdown', () => this.scene.start('historia2') );

      var skip = this.add.image(650, 550, 'saltarbutton')
      skip.setInteractive()
      skip.on('pointerdown', () => this.scene.start('historia3') );

    }

   

    
}
  