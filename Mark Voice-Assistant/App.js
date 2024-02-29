const content=document.querySelector('.dynamic1');
const btn=document.querySelector('.btn1');

function speak(text){
    const text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.volume=1;
    text_speak.pitch=1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day=new Date();
    var hours=day.getHours();
    if(hours>=0 &&hours<12){
        speak("Good Morning Boss")
    }
    else if(hours>=12 && hours<17){
        speak("Good Afternoon Master...")
    }
    else {
        speak("Good Night Sir... Sweety Dreams")
    }
}
window.addEventListener('load',()=>{
    speak("Initializing Mark AI-VOICE Assistant Boss.... Initializaton is ready")
    wishMe();
})

const SpeechRecognition= window.SpeechRecognition||window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();

recognition.onresult=(event)=>{
    const currentIndex=event.resultIndex;
    const transcript=event.results[currentIndex][0].transcript;
    content.textContent=transcript;
    takeCommand(transcript.toLowerCase());
}
btn.addEventListener('click',()=>{
    content.style.display="block";
    content.style.color="red"
    content.textContent="Listening..."
    recognition.start();
})


function takeCommand(message){
    if(message.includes('hey')|| message.includes('hello')||message.includes('buddy')){
        speak("Hello Boss, How May I Help You? ");
    }
    else if(message.includes("open google")){
        window.open('https://www.google.com/')
        speak("Opening Google")
    }
    else if(message.toLowerCase().includes("Exit google")){
        window.close();
    }
    else if(message.toLowerCase().includes("open youtube")){
        window.open('https://www.youtube.com/')
        speak("Opening youtube")
    }
    
    else if(message.toLowerCase().includes(" Good Night ")){
        window.open("https://pixabay.com/images/search/mic/",'_blank')
        speak("thank you boss good night sweety dreams");
    }
}