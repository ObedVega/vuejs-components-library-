import ButtonVue from "./components/Button.vue";

export default{
    install: (app, options) => {
        app.component("Botton", ButtonVue);
    },
};