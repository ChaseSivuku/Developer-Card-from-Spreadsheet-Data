
class DevCardManager{
    constructor(){
        this.dev = {
    userID: null,
    userName: "",
    yearsXP: null,
    isActive: false,
    pictureURL: "",
    email: "",
    phone: "",
    skills: [],
    bio: ""
        };
    }

    initializeAndReadJSON(fileName){
        const xlsx = require('xlsx');
        const fs = require('fs');

        const file = xlsx.readFile(fileName);
        const sheetName = file.SheetNames[0];
        const sheet = file.Sheets[sheetName];

        const jsonData = xlsx.utils.sheet_to_json(sheet);
        fs.writeFileSync('devData.json', JSON.stringify(data, null, 4));

        return jsonData;

    }
    
    getAllDevs(json){
        const devs = [];
        json.forEach(element => {
            
        });
    }
}

doc = document.getElementsByTagName("body")[0];

//vertical card
vertCard = document.createElement("div");
vertCard.id = "vert-card";

//append
doc.appendChild(vertCard);

picDiv = document.createElement("div");

//image
pic =  document.createElement("img");
pic.style.width = "100px";
pic.style.height = "100px";
pic.src = "media/avatar.svg"
//append
picDiv.appendChild(pic);

vertCard.appendChild(picDiv);

//details
detailsDiv = document.createElement("div");
vertCard.appendChild(detailsDiv);

//heading
nameHeading = document.createElement("h2");
nameHeading.textContent = dev.userName;
detailsDiv.appendChild(nameHeading);

//xp
xp = document.createElement("p");
xp.textContent = "Years Experience: " + dev.yearsXP;
detailsDiv.appendChild(xp);

//status
activeStatus = document.createElement("p");
if(dev.isActive === false){
    activeStatus.textContent = "Active Status: Not active";
}else{
    activeStatus.textContent = "Active status: Active";
}
detailsDiv.appendChild(activeStatus);
//contact
contactsDiv = document.createElement("div");
detailsDiv.appendChild(contactsDiv);

//email
email = document.createElement("p");
email.textContent = "Email: " + dev.email;
contactsDiv.appendChild(email);

//phone
phone = document.createElement("p");
phone.textContent = "Phone: " + dev.phone;
contactsDiv.appendChild(phone);

//skills
skillsDiv = document.createElement("div");
detailsDiv.appendChild(skillsDiv);

skillHead = document.createElement("h3");
skillHead.textContent = "Skills";
skillsDiv.appendChild(skillHead);

//Skill List
skillUL = document.createElement("ul");
skillUL.id = "skill-ul";
skillsDiv.appendChild(skillUL);
for(let i = 0; i < dev.skills.length; i++){
    item = document.createElement("li");
    item.textContent = dev.skills[i];
    skillUL.appendChild(item);
}

//Bio
bio = document.createElement("p");
bio.textContent = dev.bio;
detailsDiv.appendChild(bio);

//horizontal card



