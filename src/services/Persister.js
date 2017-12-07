class Persister {

    storeSettings(key, data) {
        let storeKey = 'settings' + key;
        let stringData = JSON.stringify(data);
        localStorage.setItem(storeKey, stringData);
    }

}

export default new Persister();
