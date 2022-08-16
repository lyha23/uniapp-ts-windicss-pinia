import { createSSRApp } from "vue";
import App from "./App.vue";
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
import piniaStore from './store';
export function createApp() {
  const app = createSSRApp(App);
  app.use(piniaStore)
  return {
    app,
  };
}
