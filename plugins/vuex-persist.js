// ~/plugins/vuex-persist.js
import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
    window.onNuxtReady(() => {
        new VuexPersistence({
            key: 'score',
            reducer: state => state.score,
            restoreState: (key, storage) => {
                let value = storage.getItem(key);

                if (!value) {
                    return;
                }

                return { [key]: JSON.parse(value) };
            },
        }).plugin(store);
    });
};
