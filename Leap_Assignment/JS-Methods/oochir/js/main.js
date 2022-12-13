queueLine = ["Бат","Дорж", "Пунцаг","Готов","Баяраа", "Болд", "Навчаа", "Гончигсумлай", "Цэцгээ", "Нэргүй", "Бальбийгомбо", "Баатар" ];

if (queueLine.length > 10) {
    const splicedLine = queueLine.splice(10);
    console.log(queueLine);
}