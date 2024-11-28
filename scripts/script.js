const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//funzione che genera una struttura html per ogni card con i dati necessari
const generateMemberCard = (member) => {
  const {name, role, email, img} = member
  return `<div class="card-col">
               <div class="card">
                  <div class="card-img">
                     <img src="assets/${img}" alt="">
                  </div>
                  <div class="card-text">
                     <h4 id="name">${name}</h4>
                     <p id="role" class="role">${role}</p>
                     <p id="mail" class="mail">${email}</p>
                  </div>
               </div>
            </div>`
}

//funzione per ciclare l'array e ad ogni ciclo concatenare la funzione che general al struttura html
const teamSplitterCards = (teamArray) =>{
  const teamCardsContainer = document.getElementById('team-cards-container');
  let singleCard = '';

  for(let member of teamArray){
    singleCard += generateMemberCard(member); 
  }
  
  teamCardsContainer.innerHTML = singleCard;
}

teamSplitterCards(teamMembers);