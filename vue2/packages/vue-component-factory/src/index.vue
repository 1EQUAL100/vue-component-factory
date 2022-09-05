<template>
  <component
    v-if="checked"
    v-model="vmodelCopy"
    :is="bind.is"
    v-bind="bind"
    v-on="fmtOn"
  >
    <template v-if="children">
      <vue-component-factory
        v-for="(item, index) in children"
        :key="index"
        v-model="item.vmodel"
        v-bind="item"
      ></vue-component-factory>
    </template>
  </component>
</template>

<script>
export default {
  name: "VueComponentFactory",

  model: {
    prop: "vmodel",
    event: "change",
  },

  props: {
    vmodel: null,
    bind: { type: Object, default: () => {}, required: true },
    on: { type: Object, default: () => {} },
    children: { type: Array, default: () => [] },
  },

  data() {
    return {
      vmodelCopy: this.vmodel,

      checked: false,
    };
  },

  computed: {
    // Add component "this" and event target object.
    fmtOn() {
      const result = {};
      if (Object.prototype.toString.call(this.on) === "[object Object]") {
        for (const key of Object.keys(this.on)) {
          const onFunc = this.on[key];
          if (Object.prototype.toString.call(onFunc) === "[object Function]") {
            result[key] = (event) => {
              onFunc(this, event);
            };
          }
        }
      }

      return result;
    },
  },

  watch: {
    vmodel: {
      handler(newValue) {
        // Parent v-model change.
        this.vmodelCopy = newValue;
      },
    },

    vmodelCopy: {
      handler(newValue) {
        // Parent v-model update.
        this.$emit("change", newValue);
      },
    },

    bind: {
      deep: true,
      immediate: true,
      handler(newValue) {
        const isObject =
          Object.prototype.toString.call(newValue) === "[object Object]";

        // Set the default component to "div"
        if (isObject && !newValue.is) {
          newValue.is = "div";
        }

        this.checked = isObject;
      },
    },
  },
};
</script>
