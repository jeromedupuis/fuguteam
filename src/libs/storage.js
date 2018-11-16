const createStorage = storageName => {
  const storage = window[storageName];

  return {
    get(key, defaultValue) {
      try {
        const item = storage.getItem(key);

        if (!item) {
          return defaultValue;
        }

        return JSON.parse(item);
      } catch (err) {
        return defaultValue;
      }
    },
    set(key, value) {
      storage.setItem(key, JSON.stringify(value));
    },
    remove(key) {
      storage.removeItem(key);
    }
  };
};

export default {
  local: createStorage("localStorage"),
  session: createStorage("sessionStorage")
};
