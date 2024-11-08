//DOMContentLoaded 이벤트 사용
// => DOM이 완전히 로드된 후에 JS 코드가 실행되도록 보장할 수 있다.

document.addEventListener('DOMContentLoaded',function(){//1. 사용할 DOM 선택하기
    const chatlog = document.getElementById('chat-log'),
        userInput = document.getElementById('user-input'),
        sendButton = document.getElementById('send-button'),
        buttonIcon = document.getElementById('button-icon'),
        info = document.querySelector('info');
    //2. 버튼 클릭 시 이벤트 추가하기
    sendButton.addEventListener('click',sendMessage);
    
    function sendMessage(){
        //1. 받아온 값 저장하기
        const message = userInput.value.trim();
    
        //2. 공백만 입력받았을 때 send하지 않기
        if(message === ''){
            return
        }
        else{
            appendMessage('user',message);
    
            setTimeout (() => {
                appendMessage('bot', 'Made By Myeongjin');
                buttonIcon.classList.add('fa-solid', 'fa-paper-plane')
                buttonIcon.classList.remove('fas', 'fa-spinner', 'fa-pulse');
            },1000)
            return
        }
    
    
        //3. 사용자가 입력한 message 화면에 띄우기(container)
    
    }
    //4. appendMessage 함수 정의하기
    function appendMessage(sender, message){
        info.style.display = 'none';
    
        buttonIcon.classList.add('fas', 'fa-spinner', 'fa-pulse')
        buttonIcon.classList.remove('fa-solid', 'fa-paper-plane');
    
        const chatElement = document.createElement('div');
        const messageElement = document.createElement('div');
        const iconElement = document.createElement('div');
        const icon = document.createElement('i');
    
        chatElement.classList.add('chat-box');
        iconElement.classList.add('icon');
        messageElement.classList.add(sender);
    
        messageElement.innerText = message;
    
        if(sender === 'user'){
            icon.classList.add('fa-regular','fa-user');
            iconElement.setAttribute('id', 'user-icon');
        }else{
            icon.classList.add('fa-solid', 'fa-robot');
            iconElement.setAttribute('id', 'bot-icon');
        }
    
        // 정의한 Node를 트리에 연결
        iconElement.appendChild(icon);                  // 아이콘 박스에 icon추가
        chatElement.appendChild(iconElement);           // 전체 채팅 박스에 아이콘 박스추가
        chatElement.appendChild(messageElement);        // 전체 채팅 박스에 채팅 텍스트 박스 추가
        chatlog.appendChild(chatElement);               // #chat-log에 전체 채티 박스 연결 ... 
    }})



//1. 사용할 DOM 선택하기
const chatlog = document.getElementById('chat-log'),
    userInput = document.getElementById('user-input'),
    sendButton = document.getElementById('send-button'),
    buttonIcon = document.getElementById('button-icon'),
    info = document.querySelector('info');
//2. 버튼 클릭 시 이벤트 추가하기
sendButton.addEventListener('click',sendMessage);

function sendMessage(){
    //1. 받아온 값 저장하기
    const message = userInput.value.trim();

    //2. 공백만 입력받았을 때 send하지 않기
    if(message === ''){
        return
    }
    else{
        appendMessage('user',message);

        setTimeout (() => {
            appendMessage('bot', 'Made By Myeongjin');
            buttonIcon.classList.add('fa-solid', 'fa-paper-plane')
            buttonIcon.classList.remove('fas', 'fa-spinner', 'fa-pulse');
        },1000)
        return
    }


    //3. 사용자가 입력한 message 화면에 띄우기(container)

}
//4. appendMessage 함수 정의하기
function appendMessage(sender, message){
    info.style.display = 'none';

    buttonIcon.classList.add('fas', 'fa-spinner', 'fa-pulse')
    buttonIcon.classList.remove('fa-solid', 'fa-paper-plane');

    const chatElement = document.createElement('div');
    const messageElement = document.createElement('div');
    const iconElement = document.createElement('div');
    const icon = document.createElement('i');

    chatElement.classList.add('chat-box');
    iconElement.classList.add('icon');
    messageElement.classList.add(sender);

    messageElement.innerText = message;

    if(sender === 'user'){
        icon.classList.add('fa-regular','fa-user');
        iconElement.setAttribute('id', 'user-icon');
    }else{
        icon.classList.add('fa-solid', 'fa-robot');
        iconElement.setAttribute('id', 'bot-icon');
    }

    // 정의한 Node를 트리에 연결
    iconElement.appendChild(icon);                  // 아이콘 박스에 icon추가
    chatElement.appendChild(iconElement);           // 전체 채팅 박스에 아이콘 박스추가
    chatElement.appendChild(messageElement);        // 전체 채팅 박스에 채팅 텍스트 박스 추가
    chatlog.appendChild(chatElement);               // #chat-log에 전체 채티 박스 연결 ... 
}

