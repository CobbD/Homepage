document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 导航栏高亮
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // AI助手功能
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatOutput = document.getElementById('chat-output');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            appendMessage('user', message);
            chatInput.value = '';
            // 模拟AI响应
            setTimeout(() => {
                const aiResponse = getAIResponse(message);
                appendMessage('ai', aiResponse);
            }, 1000);
        }
    });

    function appendMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender);
        messageElement.textContent = text;
        chatOutput.appendChild(messageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    function getAIResponse(message) {
        // 这里可以根据不同的问题返回不同的回答
        if (message.toLowerCase().includes('你好')) {
            return '你好！很高兴认识你。我是一个AI助手，有什么我可以帮助你的吗？';
        } else if (message.toLowerCase().includes('能力')) {
            return '我可以回答问题、提供建议，以及进行简单的对话。你可以问我关于各种主题的问题，我会尽力回答。';
        } else if (message.toLowerCase().includes('创造者')) {
            return '我是由一个热爱技术和创新的开发者创造的。很抱歉，我不能透露更多关于我创造者的信息。';
        } else {
            return '抱歉，我不太理解您的问题。您可以尝试问我一些关于我的能力或者其他一般性的问题。';
        }
    }

    // 联系表单提交
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('感谢您的消息！我会尽快回复您。');
        contactForm.reset();
    });
});