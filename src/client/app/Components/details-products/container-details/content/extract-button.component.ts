import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'extract-button',
    template: `
      <div>
        <div class="button text-center">
          <a class="extracts">Extractos <b>PDF</b></a>
        </div>
      </div>`,
    styles: [`
    .button{
        height: 3em;
        padding: .7em 0em;
        cursor: pointer;
        box-shadow: 0px 0px 8px 1px rgba(167, 167, 167, 0.61);
        background-color: white;
        width: 7vw;
        border-radius: 2px;
        margin-left: .3em;
    }

    .button:hover{
        box-shadow: 0px 0px 8px 1px rgba(2, 2, 2, 0.49);
    }

    .extracts{
        font-size: .8vw;
        color: #777777;
        text-decoration: none;
    }

    b{
        font-size: .8vw;
        color:#67C23E;
    }
    `]
})

export class ExtractButtonComponent {  }
