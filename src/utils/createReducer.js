/**
 * @param  {initState}
 * @param  {Object} handlers
 * @return {Reducer}
 */
export default function createReducer(initState, handlers = null) {
  return function reducer(state = initState, action) {
    const handler = handlers == null ? false : handlers[action.type];
    return handler ? handler(state, action) : state;
  };
}
