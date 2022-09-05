import VueComponentFactory from "./src";

VueComponentFactory.install = (Vue) => {
    Vue.component(VueComponentFactory.name, VueComponentFactory)
}

// 判断是否直接引入文件
if (typeof window !== "undefined" && window.Vue) {
    VueComponentFactory.install(window.Vue)
}

export default VueComponentFactory
