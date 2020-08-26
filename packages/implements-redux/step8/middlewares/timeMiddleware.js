
function timeMiddleware(store) {

  return function(next) {
   
    return function(action) {

      console.log('⏰', new Date().getTime());
      next(action);
    }
  }
}

export default timeMiddleware;
