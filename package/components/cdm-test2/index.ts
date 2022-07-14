import test2 from './src/index.vue';

import type {App, Plugin} from 'vue';

export const cdmTest2: Plugin = {
    install(app: App) {
        app.component(test2.name, test2)
    }
}
export const name = 'cdmTest2';

