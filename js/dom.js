const domElement = {
    el: '',
    target: function (selector) {
      this.el = document.querySelector(selector);
    },
    getText: function () {
      return this.el.textContent;
    },
    setText: function (newText) {
      this.el.textContent = newText;
    },
    appendText: function (newText) {
      this.el.textContent += newText;
    },
    getClasses: function () {
        return this.el.className;
    },
    removeEl: function () {
        console.log('bye bye');
        // --- deleting
        this.setText('---deleting')
        setTimeout(() => {          //ivyksta po 2000ms
            this.el.remove();

        }, 2000) 
    }
  };

  domElement.target('.target');
 console.log(' domElement.getText() ===',  domElement.getText());
 domElement.setText('pakeiciau h2 su domElement');

 
 const btn1 = document.querySelector('#btn');
 btn1.textContent = 'Pakeiciau';
 
 console.log('domElement.getClasses() ===', domElement.getClasses());
 btn1.addEventListener('click', () => {
    domElement.removeEl();
 });

