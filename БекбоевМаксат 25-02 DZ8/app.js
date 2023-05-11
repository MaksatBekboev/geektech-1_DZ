const cards = [
    {
      cardNo: "4215789646487894",
      cvcCode: 123,
      ownerName: "Константин Кузнецов",
      expiryDate: "01/2023",
    },
    {
      cardNo: "5465456894648948",
      cvcCode: 954,
      ownerName: "Александра Иванова",
      expiryDate: "05/2025",
    },
    {
      cardNo: "9792857462837462",
      cvcCode: 234,
      ownerName: "Илья Смирнов",
      expiryDate: "12/2024",
    },
    {
      cardNo: "9384759834759834",
      cvcCode: 567,
      ownerName: "Мария Петрова",
      expiryDate: "09/2022",
    },
    {
      cardNo: "5574857394857394",
      cvcCode: 789,
      ownerName: "Дмитрий Федоров",
      expiryDate: "06/2023",
    },
    {
      cardNo: "4273948593847583",
      cvcCode: 345,
      ownerName: "Елена Соколова",
      expiryDate: "03/2026",
    },
    {
      cardNo: "9198207462387634",
      cvcCode: 432,
      ownerName: "Сергей Козлов",
      expiryDate: "08/2022",
    },
    {
      cardNo: "4629384758392837",
      cvcCode: 876,
      ownerName: "Анна Морозова",
      expiryDate: "11/2023",
    },
    {
      cardNo: "4245689732458943",
      cvcCode: 678,
      ownerName: "Михаил Николаев",
      expiryDate: "07/2025",
    },
    {
      cardNo: "5273465968498537",
      cvcCode: 123,
      ownerName: "Наталья Комарова",
      expiryDate: "10/2026",
    },
    {
      cardNo: "5923748957438592",
      cvcCode: 456,
      ownerName: "Павел Медведев",
      expiryDate: "04/2023",
    },
    {
      cardNo: "9746384759834759",
      cvcCode: 789,
      ownerName: "Ольга Васильева",
      expiryDate: "12/2022",
    },
    {
      cardNo: "9374659834759831",
      cvcCode: 234,
      ownerName: "Роман Зайцев",
      expiryDate: "09/2024",
    },
    {
      cardNo: "4326475948573948",
      cvcCode: 567,
      ownerName: "Татьяна Соловьева",
      expiryDate: "06/2023",
    },
];


const newCards = cards.map(card => {
    const maskedCardNo = `${card.cardNo.slice(0, 6)}******${card.cardNo.slice(-4)}`;
    
    const ownerName = card.ownerName.toUpperCase();
    
    let cardType = "";
    switch (card.cardNo[0]) {
      case "4":
        cardType = 'VISA';
        break;
      case "5":
        cardType = 'MasterCard';
        break;
      case "9":
        cardType = 'ElCard';
        break;
      default:
        cardType = 'Unknown';
    }
    
    return {
      cardNo: maskedCardNo,
      ownerName: ownerName,
      expiryDate: card.expiryDate,
      cardType: cardType
    };
});
  
  console.log(newCards);

const visaCards = cards.filter(card => card.cardNo.startsWith("4"));

console.log(visaCards);


const expiredCards = cards.filter(card => {
    const [month, year] = card.expiryDate.split("/");
    const expiryDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    const currentDate = new Date();
    return currentDate > expiryDate;
});
  
  console.log(expiredCards);

const table = `
<table class="table table-dark table-hover">
  <thead>
    <tr>
      <th>#</th>
      <th>Номер карты</th>
      <th>Тип карты</th>
      <th>Имя владельца</th>
      <th>Дата окончания</th>
    </tr>
  </thead>
  <tbody>
    ${newCards
      .map(
        (card, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${card.cardNo}</td>
            <td>${card.cardType}</td>
            <td>${card.ownerName}</td>
            <td>${card.expiryDate}</td>
          </tr>
        `
      )
      .join("")}
  </tbody>
</table>
`;

document.body.innerHTML = table;