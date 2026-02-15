document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('formValid', function(event) {
        const formData = event.detail;
        console.clear();
        console.log('%cДанные отправленной формы:', 'font-size: 16px; font-weight: bold; color: #4CAF50;');
        console.log('%cИмя:', 'font-weight: bold; color: #2196F3;', formData.fullname);
        console.log('%cEmail:', 'font-weight: bold; color: #2196F3;', formData.email);
        console.log('%cТема:', 'font-weight: bold; color: #2196F3;', formData.topic);
        console.log('%cСообщение:', 'font-weight: bold; color: #2196F3;', formData.message);
        console.log('%cСогласие:', 'font-weight: bold; color: #2196F3;', formData.agreement ? 'Да' : ' Нет');
        
        const timestamp = new Date().toLocaleString('ru-RU');
        console.log('%cВремя:', 'font-weight: bold; color: #FF9800;', timestamp);
        console.log('%cВсе данные:', 'font-weight: bold; color: #9C27B0;', formData);
    });
});