export default function promiseMiddleware() {
  return next => action => {
    console.log('ACTION IN MIDDLEWARE', action);
    const { promise, type, ...rest } = action;

    if (!promise) return next(action);

    const SUCCESS = type;

    const REQUEST = type + '_REQUEST';
    const FAILURE = type + '_FAILURE';

    next({ ...rest, type: REQUEST });

    return promise
      .then(res => {
        console.log('WE HAVE A SUCCESS!', res);
        next({ ...rest, res, type: SUCCESS });

        return true;
      })
      .catch(error => {
        console.log('WE HAVE AN ERROR!', error);
        next({ ...rest, error, type: FAILURE });
        console.log(error);

        return false;
      });
  };
}
