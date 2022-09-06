<template>
  <div id="app">
    <vue-component-factory v-bind="config" v-if="vif"></vue-component-factory>
  </div>
</template>

<script>
export default {
  name: "App",

  mounted() {
    setTimeout(() => {
      this.vif = false;
    }, 5000);
  },

  data() {
    return {
      vif: true,
      config: {
        vmodel: "B",
        bind: {
          is: "select",
          label: "hello",
          ref: "testref",
        },
        created: (self) => {
          console.log("created self", self);
          console.log("created ref", self.$refs["testref"]);
        },
        mounted: (self) => {
          console.log("mounted self", self);
          console.log("mounted ref", self.$refs["testref"]);
        },
        beforeDestroy: (self) => {
          console.log("beforeDestroy self", self);
          console.log("beforeDestroy ref", self.$refs["testref"]);
        },
        on: {
          change: (self) => {
            console.log("change self", self);
          },
        },
        children: [
          {
            bind: {
              is: "option",
              value: "A",
            },
          },
          {
            bind: {
              is: "option",
              value: "B",
            },
            on: {},
          },
          {
            bind: {
              is: "option",
              value: "C",
            },
            on: {},
          },
        ],
      },
      config2: {
        bind: {
          is: "div",
          style: { padding: "20px", background: "red" },
        },
        on: {
          click: (self, event) => {
            console.log("click", self, event);
          },
        },
        children: [
          {
            vmodel: 20,
            bind: {
              is: "input",
              placeholder: "输入框",
            },
            on: {
              change: function () {
                console.log(this.bind.is);
              },
            },
          },
          {
            vmodel: "B",
            bind: {
              is: "select",
              label: "hello",
            },
            on: {
              change: () => {
                console.log(this.config);
              },
            },
            children: [
              {
                bind: {
                  is: "option",
                  value: "A",
                },
                on: {},
              },
              {
                bind: {
                  is: "option",
                  value: "B",
                },
                on: {},
              },
              {
                bind: {
                  is: "option",
                  value: "C",
                },
                on: {},
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
