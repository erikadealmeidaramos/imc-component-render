export function debounce(fct) {
    const debounceFct = (...args) => {
        fct.apply(this, ...args);
    };

    return debounceFct;
}