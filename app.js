var App = (function() {
  var name = "John";
  return {
    getName: function() {
      console.log(name);
    },
    setName: function(myName) {
      name = myName;
    }
  }
})();

App.getName();
App.setName('Siva');
App.getName();