export const LocalStorage = {
    get (key) {
        return localStorage.getItem(key);
    },
    set (key, value) {
        return localStorage.setItem(key, value);
    }
}