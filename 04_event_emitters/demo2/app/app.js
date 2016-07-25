// * events: ['liked']
// * this.liked = new ng.core.EventEmitter();
// * this.liked.next();

var Wrapper1Component = ng.core
  .Component({
    selector: "wrapper1",
    events: ['pop'],
    template:
    `
      <div (click)="handleClick()">
        Component 1
      </div>
    `
  })
  .Class({
    constructor: function() {
      this.pop = new ng.core.EventEmitter();
      this.handleClick = function() {
        this.pop.emit();
        console.log('component 1 popped', this.status);
      }
    }
  })

var Wrapper2Component = ng.core
  .Component({
    selector: "wrapper2",
    directives: [Wrapper1Component],
    template:
    `
      <div>
        Component 2
        <wrapper1 (pop)="x=2"></wrapper1>
        {{x}}
      </div>
    `
  })
  .Class({
    constructor: function() {}
  })

var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [Wrapper2Component],
    template:
    `
      <div>
        App Component
        <wrapper2 (pop)="x=2"></wrapper2>

      </div>
    `
  })
  .Class({
    constructor: function() {
      this.handleClick = function(evt) {
        this.message = evt;
      }
    }
  })

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});

// Initial State
// var LikeButtonComponent = ng.core
//   .Component({
//     selector: "like",
//     template:
//     `
//       <a>
//         Like?
//       </a>
//     `
//   })
//   .Class({
//     constructor: function() {
//       this.handleClick = function() {
//         console.log('clicked');
//       }
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [LikeButtonComponent],
//     template:
//     `
//       <like></like>
//       {{message}}
//     `
//   })
//   .Class({
//     constructor: function() {}
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });





// Goal State
// var LikeButtonComponent = ng.core
//   .Component({
//     selector: "like",
//     events: ["liked"],
//     template:
//     `
//       <a (click)="handleClick()">
//         Like?
//       </a>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       vm.liked = new ng.core.EventEmitter();
//       vm.handleClick = function() {
//         console.log('clicked');
//         vm.liked.next();
//       }
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [LikeButtonComponent],
//     template:
//     `
//       <like on-liked="handleLike()"></like>
//       {{message}}
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       this.handleLike = function() {
//         this.message = "Thanks for liking us"
//       }
//     }
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });








// Initial State
// var LikeButtonComponent = ng.core
//   .Component({
//     selector: "like",
//     // events: ["liked"],
//     template:
//     `
//       <a (click)="handleClick()">
//         Like?
//       </a>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       // vm.liked = new ng.core.EventEmitter();
//       vm.handleClick = function() {
//         console.log('clicked');
//       //   vm.liked.next();
//       }
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [LikeButtonComponent],
//     template:
//     `
//       <like></like>
//       {{message}}
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       // this.handleLike = function() {
//       //   this.message = "Thanks for liking us"
//       // }
//     }
//   })
//
// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });



// Final State
// var LikeButtonComponent = ng.core
//   .Component({
//     selector: "like",
//     events: ["liked"],
//     template:
//     `
//       <a (click)="handleClick()">
//         Like?
//       </a>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       vm.liked = new ng.core.EventEmitter();
//       vm.handleClick = function() {
//         console.log('clicked');
//         vm.liked.next();
//       }
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [LikeButtonComponent],
//     template:
//     `
//       <like on-liked="handleLike()">Hello</like>
//       {{message}}
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       // this.handleLike = function() {
//       //   this.message = "Thanks for liking us"
//       // }
//     }
//   })



// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });








// initial state
// var UserDisplayComponent = ng.core
//   .Component({
//     selector: "user",
//     template:
//     `

//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [UserDisplayComponent],
//     template:
//     `

//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//     }
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });











// Goal State
// var UserDisplayComponent = ng.core
//   .Component({
//     selector: "user",
//     template:
//     `
//       <div>
//         {{profile | json}}
//         <a (click)="onSelect()">
//           Select
//         </a>
//       </div>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       vm.select = new ng.core.EventEmitter();
//       vm.onSelect = function() {
//         // console.log('selected', vm.profile);
//         vm.select.next(vm.profile);
//       }
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [UserDisplayComponent],
//     template:
//     `
//       <user bind-profile="{name:'dave'}" on-select="setEditing($event)"></user>
//       <user bind-profile="{name:'martha'}" on-select="setEditing($event)"></user>
//       <p>
//         Currently Selected:
//         <user bind-profile="profile"></user>
//       </p>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       this.setEditing = function(profile) {
//         console.log(profile)
//         vm.profile = profile
//       }
//     }
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });
