let Tech = function() {
    let status = false;
    this.turnOn = function() {
        status = true
        return status
    };
    this.turnOff = function() {
        status = false
        return status
    };
    this.getStatus = function() {
        return status
    };
};

let Calc = function() {
   Tech.apply(this, arguments); 
   
    this.get = function () {
        this.a = +prompt ('Введите число а');
        this.b = +prompt ('Введите число b');
        this.oper = prompt ('Введите операцию: +, -, *, /');

        this.operation();
    }
    
    this.operation = function () {
        
        switch (this.oper) {
            case '+':
                this.result = this.a + this.b;
            break;
     
            case '-':
                this.result = this.a - this.b; 
            break;
        
            case '*':
                this.result = this.a * this.b; 
            break;
        
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;      
        }
        this.show();
    }
    this.show = function () {
        let output = this.a + ' ' + this.oper + ' ' + this.b + '=' + this.result;
        alert (output);
        let div = document.getElementById('calculation');
        div.innerHTML = output;
    }

}


let calc = new Calc();




console.log(calc);
console.log(calc.getStatus());
calc.turnOn();
console.log(calc.turnOn());
calc.get();

let  Teapot = function () {
    Tech.apply(this, arguments);
    this.get = function () {
        
        
        this.V = +prompt ('Введите объем емкости');
        this.Tk = +prompt ('Введите конечную температуру воды');
        this.Tn = +prompt ('Введите начальную температуру воды');
        this.P = +prompt ('Введите мощность');


        this.calculation();
       
    }
    this.calculation = function () {
        this.result = 4200 * this.V * (this.Tk-this.Tn) / this.P;
    }
   
    this.show = function () {
        alert ('4200*' + this.V + '*(' + this.Tk + '-' + this.Tn + ')/' + this.P + '=' + this.result + ' ' + 'sec');
    }
}

 let teapot = new Teapot ();
 teapot.get();
 teapot.show();


 let Light = function () {
    Tech.apply(this, arguments); 
    this.get = function () {
        this.P1 = +prompt ('Введите мощность');
        this.S = +prompt ('Введите стоимость электроэнергии');
        
        this.calculation();
       
    }
    this.calculation = function () {
    this.result = this.P1 * this.S;

    }      
    this.show = function () {
     alert (this.P1 + '*' + this.S + '=' + this.result + 'руб');
    }
   
}

 let light = new Light ();
 light.turnOn();
 light.get();
 light.show();






// Задание 2

 let Dom = function() {
     this.create = function (tagName) {

         let element = document.createElement(tagName);
         return element
     }   
     this.addClass = function (element, className) {
        element.classList.add(className);
     } 
     this.html = function (element, text) {
         element.innerHTML = text;
     }
     this.removeClass = function (element, className) {
         element.classList.remove(className);

     }
     this.toogleClass = function (element, className) {
         element.classList.toggle(className);
     }
     
 }

 let dom = new Dom();
 let div = dom.create('div');
 dom.addClass(div,'wrapper');
 document.body.appendChild(div);
 dom.html(div,'Lorem ipsum');
 dom.addClass(div,'section');
 dom.removeClass(div, 'section');
 dom.toogleClass(div, 'conteiner');
 
 























 