var ProfileComponent = ng.core
  .Component({
    selector: "profile",
    inputs
    template:
    `
      <h1>User Profile</h1>
    `
  })
  .Class({
    constructor: function() {
    }
  })

var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [ProfileComponent],
    template:
    `
    <profile></profile>
    `
  })
  .Class({
    constructor: function() {
    }
  })


document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});
