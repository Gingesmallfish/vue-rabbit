// 把components中的组件都进行全局化注册
// 通过插件的方式
import ImageView from './ImageView/inddex.vue'
import SKu from './XtxSku/index.vue'
export const componentPlugin = {
    install(app) {
        // app.component
        app.component("XtxImageView", ImageView);
        app.component("XtxSKu", SKu)
    }
}
