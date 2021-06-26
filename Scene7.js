class Scene7 extends Phaser.Scene {
    constructor() {
      super('comojugar');
    }

    preload () {

        this.load.image('menucomojugar', 'assets/comojugarmenu.png');
        this.load.image('volver', 'assets/volver.png'); 
        this.load.image('menuinicio', 'assets/menuinicial.png'); 
    }

    create () {
    
        this.add.image(400, 300, 'menucomojugar')

        var volver = this.add.image(775, 500, 'volver')
        volver.setInteractive()
        volver.on('pointerdown', () => this.scene.start('ayuda') );
        
        var backinicio = this.add.image(675, 550, 'menuinicio')
        backinicio.setInteractive()
        backinicio.on('pointerdown', () => this.scene.start('inicio') );
    }
}