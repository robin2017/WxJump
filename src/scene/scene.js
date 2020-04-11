import camera from './camera'

class Scene {
    constructor() {
        this.instance = null
    }

    init() {
        this.instance = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            canvas,
            antilias: true,//抗锯齿
            preserveDrawingBuffer: true
        })
        this.camera = camera
        this.camera.init()
        this.instance.add(this.camera.instance)
        this.axesHelper = new THREE.AxesHelper(100)
        this.instance.add(this.axesHelper)
    }

    render() {
        this.renderer.render(this.instance, this.camera.instance)
    }
}

export default new Scene()
