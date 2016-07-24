// styles array
// encapsulation: ng.core.ViewEncapsulation.Native hides parent styles from child


var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <div>hello from the shadow DOM</div>
    `,
    styles: [`
      div {
        background: green;
      }
    `],
    encapsulation: ng.core.ViewEncapsulation.Native
  })
  .Class({
    constructor: function() {}
  })

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});


// Inital State
// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     template:
//     `
//       <div>hello from the shadow DOM</div>
//     `
//   })
//   .Class({
//     constructor: function() {}
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });

