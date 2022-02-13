class MyGreetings extends HTMLElement {
  constructor() {
    super();
    console.log("Hello MyGreetings");
    // this.addEventListener('click',e=>{
    //   alert('hello web component');
    //   this.id="my-greetings";
    //   if(this.disabled){
    //     this.disabled='';
    //   } else{
    //     this.disabled = true;
    //   }
    //   if(this.Open){
    //     this.removeAttribute('open');
    //   } else{
    //     this.setAttribute('open', true);
    //   }
    // })
  }
  static get observedAttributes() {
    return ["open"];
  }

  get open() {
    return this.getAttribute("open");
  }
  set open(value) {
    if (value) {
      this.setAttribute("open", value);
    } else {
      this.removeAttribute("open");
    }
  }
  // get disabled(){
  //   return this.hasAttribute('disabled');
  // }
  // set disabled(val){
  //   if(val){
  //     this.setAttribute('disabled', '');
  //   } else{
  //     this.removeAttribute('disabled');
  //   }
  // }
  connectedCallback() {
    console.log("connected");
    // const styleElem = document.createElement('style');
    // this.innerHTML=`
    //   <div>
    //     <p class="myText">Ello</p>
    //   </div>
    // `;
    // styleElem.innerText=`
    //   .myText{
    //     border: 1px solid red;
    //   }
    // `;
    // this.appendChild(styleElem);
  }
  attributeChangedCallback(name, oldVal, newVal) {
    console.log(
      `Attr ${name} has changed from ${oldVal} to ${newVal} and ${typeof newVal}`
    );
  }
}

// class ShowName extends HTMLElement{
//   constructor(){
//     super();
//     const shaRoot = this.attachShadow({mode: 'open'});
//     const tmpl = document.createElement('template');
//     tmpl.innerHTML = `
//       <slot></slot>
//       <div id="showName">
//         <p>${this.name}</p>
//       </div>
//       `;
//     shaRoot.appendChild(tmpl.content.cloneNode(true));
//   }
//   get name(){
//     if(this.hasAttribute('name')){
//       return this.getAttribute('name');
//     } else{
//       return 'actual demo';
//     }
//   }
// }
//window.customElements.define('show-name',ShowName);

customElements.whenDefined("my-greetings").then(() => {
  console.log("my-greetings upgraded");
});

window.customElements.define("my-greetings", MyGreetings);

class CustomButton extends HTMLButtonElement {
  constructor(height) {
    console.log(`The height is ${height}`);
    super();
    console.log("This is custom button");
  }
  connectedCallback() {
    this.textContent = "hello";
  }
}
window.customElements.define("custom-button", CustomButton, {
  extends: "button",
});

// Shadow DOM
const elem = document.createElement("header");
const h1 = document.createElement("h1");
h1.innerText = "Welcome to Ohana";
const shadow = elem.attachShadow({ mode: "closed" });
shadow.appendChild(h1);
document.body.appendChild(elem);

class PtDemoGreetings extends HTMLElement {
  constructor() {
    super();
    console.log(`Instantiating PtDemoGreetings`);
  }
  connectedCallback(){
    const temp = document.querySelector('#pt-demo-greetings');
    const tempElem = temp.content.cloneNode(true);
    const shadow = this.attachShadow({mode:'open'});
    shadow.appendChild(tempElem);
  }
}

window.customElements.define('pt-demo-greetings',PtDemoGreetings);