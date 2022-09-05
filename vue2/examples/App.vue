<template>
  <div id="app">
    <vue-component-factory v-bind="config"></vue-component-factory>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      config: {
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
