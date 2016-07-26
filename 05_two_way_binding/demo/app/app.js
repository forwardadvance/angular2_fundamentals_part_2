// <input [(ngModel)]='toast'/>{{toast}}



var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
    <form (submit)="handleSubmit()">
      <input [(ngModel)]="catName" />
      {{catName}}
      <input [value]="catName" (input)="handleInput($event)" />
      <button>Go Now!</button>
    </form>
    `
  })
  .Class({
    constructor: function() {
      this.catName = "Miffy";
      this.handleInput = (evt) => {
        this.catName = evt.target.value;
      }
      this.handleSubmit = () => {
        // AJAX
        console.log(this.catName);
      }
    }
  })


document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});

// initial state

