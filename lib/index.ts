import { App } from "vue";
import MyButton from "./MytButton.vue";

export { MyButton };

const components = [MyButton];

export default {
  install(vue: App) {
    components.forEach((comp) => {
      vue.component(comp.name, comp);
    });
  },
};
