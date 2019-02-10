var Router = function() {
  var router = {};
  router.requests = {};
  router.error = "Error 404: Not Found";
  
  router.bind = function(url, type, func) {
    if(!this.requests[url])
      this.requests[url] = {};
    this.requests[url][type] = func;
  };
  
  router.runRequest = function(url, type) {
    try {
      return this.requests[url][type]();
    } catch(e) {
      return this.error;
    }
  }
  
  return router;
}