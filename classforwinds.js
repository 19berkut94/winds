'use strict'
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column'
document.body.style.margin = '0';

class hideAndSeek {
    constructor(){
        
       
    }

    hide() {
        this.tagName.style.display = 'none'
    }

    appear() {
        this.tagName.style.display = 'flex'
    }


}



class createWinds extends hideAndSeek {
    constructor(options) {  
        super()
          this.tagName = document.createElement(options.tagName)
       
        this.tagName.innerHTML = options.innerHTML
        this.tagName.style.display = options.display
        this.tagName.style.margin = options.margin 
        this.tagName.style.padding = options.padding + 'px'
        this.tagName.style.alignItems = options.alignItems
          this.tagName.style.background = options.background
          this.tagName.style.width = options.width + 'px'
          this.tagName.style.height = options.height + 'px'
          this.tagName.style.textAlign = options.textAlign
          this.tagName.style.marginTop = options.marginTop + 'px'
          this.tagName.style.paddingTop = options.paddingTop + 'px'
          this.tagName.style.fontSize = options.fontSize + 'px'
          this.tagName.style.color = options.color,
          this.tagName.style.flexDirection = options.flexDirection,
          document.body.append(this.tagName)


          
        }


        addPositive(){
            positiveWind.tagName.appendChild(inPositiveWind.tagName)
            positiveWind.tagName.appendChild(butnPositiveWind.tagName)
        }
        
        addNegative(){
       negativeWind.tagName.appendChild(inNegativeWind.tagName)
         negativeWind.tagName.appendChild(butnNegativeWind.tagName)
        }
       
    
 }



 const positiveWind = new createWinds({
    tagName: 'div',
    background: '#55a84c',
    width: 500,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    innerHTML: '',
    margin: '150px  auto'
} ,
)


const inPositiveWind = new createWinds({
    tagName: 'div',
    innerHTML: '<p>Поздравляем!)Вы успешно прошли регистрацию!!</p>',
    background: '#55a84c',
    width: 300,
    height: 100,
    textAlign: 'center',
    margin: '0 auto',
    marginTop: 50,
    color: 'white',
    fontSize: 20,
})

const butnPositiveWind = new createWinds({
    tagName: 'button',
    innerHTML: '<p>ПРОДОЛЖИТЬ</p>',
    background: '#a84c4c',
    width: 120,
    height: 50,
 textAlign: 'center',
 marginTop: 30,
 color: 'white',
    });

    positiveWind.addPositive()
    // positiveWind.tagName.appendChild(inPositiveWind.tagName)
    // positiveWind.tagName.appendChild(butnPositiveWind.tagName)
    











const negativeWind = new createWinds({
    tagName: 'div',
    background: '#eb3f3f',
    width: 500,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    innerHTML: '',
    margin: '150px auto',
    
} ,
)


const inNegativeWind = new createWinds({
    tagName: 'div',
    innerHTML: '<p>Не переживайте)Просто попробуйте еще раз)</p>',
    background: '#eb3f3f',
    width: 300,
    height: 100,
    textAlign: 'center',
    margin: '0 auto',
    marginTop: 50,
    color: 'white',
    fontSize: 20,

}

)







const butnNegativeWind = new createWinds({
    tagName: 'button',
    innerHTML: '<p>ПОВТОРИТЬ</p>',
    background: '#e0ba0d',
    width: 120,
    height: 50,
 textAlign: 'center',
 margin: '30px auto',
 color: 'white',

    
}

);

negativeWind.addNegative()
// negativeWind.tagName.appendChild(inNegativeWind.tagName)
// negativeWind.tagName.appendChild(butnNegativeWind.tagName)










///попытки копировать объект
const anotherWind = ({...positiveWind})
console.log(anotherWind)
document.body.append(anotherWind)
/////////////////////////////////////
const a = Object.create(positiveWind)
console.log(a)
document.body.append(a)
//////////////////////////////////////////


