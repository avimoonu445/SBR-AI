let btn=document.querySelector("#btn")
let btn=document.querySelector("#content")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    console.log(hours)
    else if(hours>=0 && hours <12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good  Afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load'()=>{
    wishMe()
})
let speechrecognition= window.speechrecognition || window.webkitspeechrecognation
let recognition =new speechrecognition()
recognition.onresult=(event)=>{
   let currentIndex=event.resultIndex
   let transcript=event.results[currentIndex][0].transcript
   content.innerText=transcript
    takeCommand(transcript)
}

btn.addEventListener("click",()=>{
    recognition.start()
})
function takeCommand(message){
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
   else if(message.includes("i neads help")||message.includes("help chaiye")){
        speak("apko kish prakar ka help chaiye sir?")
}
}