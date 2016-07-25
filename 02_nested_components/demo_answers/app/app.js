// directives: [LikeButtonComponent],
// Show that no data is passed in. Tiddles is divorced.

var CatComponent = ng.core
  .Component({
    selector: "cat",
    template:
    `
      Tiddles the Cat
    `
  })
  .Class({
    constructor: function() {}
  })


var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <cat></cat>
      <cat></cat>
      <cat></cat>
      <cat></cat>
    `,
    directives: [CatComponent]
  })
  .Class({
    constructor: function() {

    }
  })

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});



// Final State
// var CatComponent = ng.core
//   .Component({
//     selector: "cat",
//     template:
//     `
//       Tiddles the Cat
//     `
//   })
//   .Class({
//     constructor: function() {

//     }
//   })


// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     template:
//     `
//       <cat></cat>
//       <cat></cat>
//       <cat></cat>
//       <cat></cat>
//     `,
//     directives: [CatComponent]
//   })
//   .Class({
//     constructor: function() {

//     }
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });


