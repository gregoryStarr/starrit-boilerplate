export const loggerMiddleware = store => next => action => {
    console.log(action.type);
    next(action);
}

export const fetchMiddleware = fetchImplementation => store => next => action => {
    if (action.type === 'FETCH') {
        const { url, params } = action;
        const token = store.getState().token;
        return fetchImplementation(url, params);
    } else {
        return next(action);
    }
};