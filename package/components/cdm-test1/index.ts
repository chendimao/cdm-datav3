import test1 from './src/index.vue';

import type {App, Plugin} from 'vue';

export const cdmTest: Plugin = {
    install(app: App) {
        app.component(test1.name, test1)
    }
}

export const name = 'cdmTest';


