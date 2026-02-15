document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        document.querySelectorAll('.input.is-danger, .textarea.is-danger, .select.is-danger').forEach(el => {
            el.classList.remove('is-danger');
        });
        document.querySelectorAll('.help.is-danger').forEach(el => el.remove());

        let isValid = true;

        const fullname = document.getElementById('fullname');
        const fullnameValue = fullname.value.trim();
        if (fullnameValue === '') {
            showError(fullname, 'Введите ваше имя');
            isValid = false;
        }

        const email = document.getElementById('email');
        const emailValue = email.value.trim();
        if (emailValue === '') {
            showError(email, 'Введите email');
            isValid = false;
        } else if (!emailValue.includes('@') || !emailValue.includes('.')) {
            showError(email, 'Введите корректный email (пример: name@mail.ru)');
            isValid = false;
        }

        const topic = document.getElementById('topic');
        const topicValue = topic.value;
        if (!topicValue) {
            showError(topic, 'Выберите тему обращения');
            isValid = false;
        }

        const message = document.getElementById('message');
        const messageValue = message.value.trim();
        if (messageValue === '') {
            showError(message, 'Введите сообщение');
            isValid = false;
        }

        const agreement = document.getElementById('agreement');
        if (!agreement.checked) {
            const agreementField = agreement.closest('.field');
            const help = document.createElement('p');
            help.classList.add('help', 'is-danger');
            help.textContent = 'Необходимо согласие на обработку данных';
            agreementField.appendChild(help);
            isValid = false;
        }

        if (isValid) {
            const formData = {
                fullname: fullnameValue,
                email: emailValue,
                topic: topicValue,
                message: messageValue,
                agreement: agreement.checked
            };

            const customEvent = new CustomEvent('formValid', { 
                detail: formData 
            });
            document.dispatchEvent(customEvent);
            alert('Форма успешно отправлена! Данные в консоли.');
        }
    });

    function showError(input, message) {
        input.classList.add('is-danger');
        const help = document.createElement('p');
        help.classList.add('help', 'is-danger');
        help.textContent = message;
        const controlDiv = input.closest('.control');
        if (controlDiv) {
            controlDiv.parentNode.appendChild(help);
        } else {
            input.parentNode.appendChild(help);
        }
    }

    document.querySelectorAll('.input, .textarea, select').forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('is-danger');
            const parent = this.closest('.field');
            if (parent) {
                const errors = parent.querySelectorAll('.help.is-danger');
                errors.forEach(el => el.remove());
            }
        });
    });

    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', function() {
            this.classList.remove('is-danger');
            const parent = this.closest('.field');
            if (parent) {
                const errors = parent.querySelectorAll('.help.is-danger');
                errors.forEach(el => el.remove());
            }
        });
    });
});