export function mapKeysToUnderscore(obj) {
    if (!obj || typeof obj !== 'object') return obj;

    const keys = Object.keys(obj) || [];
    const convertedObj = {};
    keys.map(key => {
        const value = obj[key];
        if ((key.match(new RegExp('[A-Z]')))) {
            key = key.replace(/[A-Z]/g, k => `_${k.toLowerCase()}`);
        }

        if (Array.isArray(value)) {
            return convertedObj[key] = value.map(item => mapKeysToUnderscore(item));
        }
        
        if (typeof value === 'object') {
            return convertedObj[key] = mapKeysToUnderscore(value);
        }

      convertedObj[key] = value;
    });

    return convertedObj;
  }