document.addEventListener('DOMContentLoaded', function() {
    // 1. 사용할 DOM 선언하기 : getElementById, querySelector
    const chatlog = document.getElementById('chat-log'); // 채팅 로그
    const userInput = document.getElementById('user-input'); // 사용자 입력 필드
    const sendButton = document.getElementById('send-button'); // 전송 버튼
    const info = document.querySelector('.info'); // 추가적인 정보 표시 영역 (선택자 수정 필요 시 사용)

    // 2. #send-button 버튼 클릭 시 이벤트 추가하기 : addEventListener
    sendButton.addEventListener('click', sendMessage);
    
    // Enter 키로 메시지 전송
    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // 3. sendMessage() 함수 정의하기
    function sendMessage() {
        // 사용자가 입력한 메시지 값을 받아오고, 공백만 입력했을 시 전송하지 않음
        const message = userInput.value.trim();
        if (message === '') {
            return;
        } else {
            appendMessage('user', message); // 사용자 메시지를 추가
            userInput.value = ''; // 입력 필드 초기화

            setTimeout(() => {
                appendMessage('bot', 'Made By Myeongjin'); // 봇의 응답 메시지를 추가
            }, 1000);
        }
    }

    // 4. appendMessage() 함수 정의하기
    function appendMessage(sender, message) {
        if (info) {
            info.style.display = 'none'; // 정보 표시 영역 숨김
        }

        const chatElement = document.createElement('div'); // 채팅 요소 생성
        const messageElement = document.createElement('div'); // 메시지 요소 생성
        const iconElement = document.createElement('div'); // 아이콘 요소 생성
        const icon = document.createElement('i'); // 아이콘을 나타낼 i 태그 생성

        // 각 요소에 클래스 추가 및 내용 설정
        chatElement.classList.add('chat-box');
        iconElement.classList.add('icon');
        messageElement.classList.add(sender);
        messageElement.innerText = message;

        // 사용자와 봇에 따라 다른 아이콘 적용
        if (sender === 'user') {
            icon.classList.add('fa-regular', 'fa-user');
            iconElement.setAttribute('id', 'user-icon');
        } else {
            icon.classList.add('fa-solid', 'fa-robot');
            iconElement.setAttribute('id', 'bot-icon');
        }

        // 정의한 Node를 트리에 연결
        iconElement.appendChild(icon); // 아이콘 박스에 아이콘 추가
        chatElement.appendChild(iconElement); // 전체 채팅 박스에 아이콘 박스 추가
        chatElement.appendChild(messageElement); // 전체 채팅 박스에 채팅 텍스트 박스 추가
        chatlog.appendChild(chatElement); // #chat-log에 전체 채팅 박스 추가
    }
});
