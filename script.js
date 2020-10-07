'use strict'



class HideandSeek{
    constructor(){}

        disappear(){
            this.wind.style.display = 'none'
        }

        appear(){
            this.wind.style.display = 'block'
        }
}


class ModalGeneral extends HideandSeek {
    constructor({windName, insideText, btnText,}){
        super()
        this.windName = windName,
        this.insideText = insideText,
        this.btnText = btnText
        this.wind = document.createElement('div')
        
    }
    
    creation(windclass,windNameClass, insideTextClass,
         btnClass, anim){

        //const wind = document.createElement('div')
        this.wind.className = windclass
        this.wind.classList.add('animate__animated', anim)
        this.wind.style.setProperty('--animate-duration', '3s');//vopros animation

        const windName = document.createElement('h1')
        windName.innerText = this.windName
        windName.className = windNameClass

        const insideText = document.createElement('p')
        insideText.innerText = this.insideText
        insideText.className = insideTextClass

        const btn = document.createElement('button')
        btn.innerText = this.btnText
        btn.className = btnClass
        btn.onclick = function() {
            //vopros...как вызвать здесь метод dissapear
        }

        document.body.appendChild(this.wind)
        this.wind.appendChild(windName)
        this.wind.appendChild(insideText)
        this.wind.appendChild(btn)
        
        
        return this.wind

            
    }
    

}
//positivnoe okno
const positiveWindow = new ModalGeneral({
    windName: 'Поздравляем))',
    insideText: 'Вы успешно прошли регистрацию!',
    btnText: 'продолжить',
    
})
positiveWindow.creation('wind wind--positive', 'windnameclass',
 'windtextclass', 'buttons buttons--yes', 'animate__fadeInTopRight')


 //negativnoe okno
const negativeWindow = new ModalGeneral({
    windName:'осторожно!',
    insideText: 'Будьте внимательны при вводе данных)',
    btnText: 'повторить'
})

negativeWindow.creation('wind wind--negative', 'windnameclass',
'windtextclass', 'buttons buttons--no', 'animate__zoomInDown')

positiveWindow.disappear()
negativeWindow.disappear()





