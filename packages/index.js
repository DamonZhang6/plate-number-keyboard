import PlateNumberKeyboard from './PlateNumberKeyboard/plateNumberKeyboard.vue';

const components = [PlateNumberKeyboard];

const install = (Vue) => {
  if (install.installed) return;

  components.map((component) => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  PlateNumberKeyboard,
};
