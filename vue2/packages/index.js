import VueComponentFactory from "./vue-component-factory/src";

const components = [VueComponentFactory]

const install = (Vue) => {
    if (install.installed) return

    components.forEach(component => {
        Vue.component(component.name, component)
    })

    install.installed = true
}

// if using “vue.js” file import.
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue)
}

export default {
    // https://v2.cn.vuejs.org/v2/api/#Vue-use
    install,
    ...components
}
