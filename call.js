
       let myContacts = JSON.parse(localStorage.getItem("phoneBook")) || [];
       let selectedContactIndex = null;
       let recentCallsArr = JSON.parse(localStorage.getItem('recentCalls'))|| [];
        console.log(recentCallsArr);
        

console.log(myContacts);


function recents() {
    console.log(recentCallsArr);
    
    main.innerHTML = `
      <button class="bond" onclick="myWay()">
                <span class="material-symbols-outlined">
                    arrow_back
                </span>
               
            </button>
            
              <div class="sortButtons">
               <button class="shift">Edit</button>  
   <button onclick='sortCalls("all")' >All</button>
  <button onclick='sortCalls("missed")'>Missed</button>
  </div>
        
   
    <h1>Recents</h1>
               <div class="wrapper">
            <input type="text" id="search-btn" placeholder="Search">
            <div class="point">
                <span class="material-symbols-outlined">
                    search
                    </span>
                    <span class="material-symbols-outlined">
                        mic
                        </span>
            </div>
        </div>
     <div class="fan">
      <div id="contacts-list">
  

    
    </div></div>
    `;

    const contactsList = document.getElementById('contacts-list');
    const searchInput = document.getElementById('search-btn');

    contactsList.innerHTML = '';

  
    recentCallsArr.forEach((recentCall, index) => {
        console.log(recentCall.name);
        
    contactsList.innerHTML += `<div class="contact">
        <span class="recentCaller"></span>
        <button onclick='showContact(${JSON.stringify(recentCall)}, ${index})' class="contact-btn">${recentCall.name}</button>
        <div class="tote">
          <span class="time">Yesterday</span>
         <p class="under">Mobile</p>
   
      </div>
            
        <div>`;
    });
    
    document.querySelectorAll(".recentCaller").forEach((span, index) => {
        span.innerHTML = recentCallsArr[index].name[0];
    })
    

    searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredContacts = recentCallsArr.filter(contact => 
        contact.name.toLowerCase().includes(query)
    );
    
    console.log(filteredContacts);
    
    // Clear the existing contacts before appending new ones
    contactsList.innerHTML = ""; 

    filteredContacts.forEach((filtered, index) => {
        contactsList.innerHTML += `
            <div class="contact">
                <button onclick='showContact(${JSON.stringify(filtered)}, ${index})' class="contact-btn">
                    ${filtered.name}
                </button>
            </div>`;
    });
});


}







function sortCalls(callType) {
    // alert("missed calls")
    const contactsList = document.getElementById('contacts-list');
    console.log(callType);

    if (callType === 'missed') {
    let missedCallsArray = myContacts.slice(2, 7);

    console.log(missedCallsArray);

        contactsList.innerHTML = '';

        
        missedCallsArray.forEach((missedCall, index) => {
            contactsList.innerHTML += `<div class="contact">
                <button onclick='showContact(${JSON.stringify(missedCall)}, ${index})' class="contact-btn missed">${missedCall.name}</button><div>`;
        });
    } else {
    
    contactsList.innerHTML = '';

    
    recentCallsArr.forEach((recentCall, index) => {
        contactsList.innerHTML += `<div class="contact">
            <button onclick='showContact(${JSON.stringify(contact)}, ${index})' class="contact-btn">${recentCall.name}</button><div>`;
    });
    }
}




contact()
  
function contact() {
    main.innerHTML = `
      <button class="bond" onclick="myWay()">
                <span class="material-symbols-outlined">
                    arrow_back
                </span>
            </button>
    <h1>Contacts</h1>
  
    
    <input type="text" id="search-btn" placeholder="Search">
      <div class="my-card">
        <div class="my-pic">OA</div>
        <span>Olawoyin Fathia<br>
        <small>My Card</small></span>
    </div>
    <div id="contacts-list"></div>
    `;

    const contactsList = document.getElementById('contacts-list');
    const searchInput = document.getElementById('search-btn');

    function displayContacts(list) {
        contactsList.innerHTML = '';

        myContacts.sort((a, b) => a.name.localeCompare(b.name))
        list.forEach((contact, index) => {
            contactsList.innerHTML += `<div class="contact">
                <button onclick='showContact(${JSON.stringify(contact)}, ${index})' class="contact-btn">${contact.name}</button><div>`;
        });
    }



    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredContacts = myContacts.filter(contact => contact.name.toLowerCase().includes(query));
        console.log(filteredContacts);
        
        displayContacts(filteredContacts);
    });

    // Initial display
    displayContacts(myContacts);


}


function openEdit(index) {
            selectedContactIndex = index;
            let contact = myContacts[index];

            // Fill inputs with existing data
            document.getElementById("editName").value = contact.name;
            document.getElementById("editPhone").value = contact.phone;

            // Show popup
            document.getElementById("editPopup").style.display = "block";
            document.getElementById("overlay").style.display = "block";
        }

function saveEdit() {
            let newName = document.getElementById("editName").value.trim();
            let newPhone = document.getElementById("editPhone").value.trim();

            if (newName && newPhone) {
                myContacts[selectedContactIndex].name = newName;
                myContacts[selectedContactIndex].phone = newPhone;
                localStorage.setItem("phoneBook", JSON.stringify(myContacts));
                closePopup();
                contact();
            } else {
                alert("Both fields are required!");
            }
        }

function closePopup() {
            document.getElementById("editPopup").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        }

function showContact(contact, index) {
    console.log(contact);
    let name = contact.name;
    console.log(name);
    
    // alert(Name: ${contact.name}\nPhone: ${contact.phone});
    console.log(index);
    

    main.innerHTML = `
     <!-- Top bar -->
       <button class="bond" onclick="myWay()">
                <span class="material-symbols-outlined">
                    arrow_back
                </span>
            </button>
    <div class="top-bar">
        <button onclick="contact()">&larr;</button>
        <button onclick="openEdit(${index})">Edit</button>
    </div>

    <!-- Contact header -->
    <div class="contact-header">
        <div id="avatar">A</div>
        <div id="theContactName">A Alpho</div>
    </div>

    <!-- Action buttons -->
    <div class="actions">
        <div class="action">
           <span class="material-symbols-outlined">
chat
</span>
            message
        </div>
        <div id="secondCallBtn" onclick='call2(${JSON.stringify(contact)})' class="action">
           <span class="material-symbols-outlined">
call
</span>
            call
        </div>
        <div class="action">
           <span class="material-symbols-outlined">
videocam
</span>
            video
        </div>
        <div class="action disabled">
          <span class="material-symbols-outlined">
mail
</span>
            mail
        </div>
    </div>

     <div class="operate">
     <p>Today</p>
    <p>3:22pm Incoming Call</p>
    <p>17 Minutes</p>
    <p>2:16pm Canceled Call</p>
    <p>2:14pm Canceled Call</p>
    
     </div>
    <div class="info-section">
        <h4>mobile</h4>
        <a href="#" id="phoneNumber">071 083 2193</a>
    </div>
       
    <div class="list-options">
       <p>Send Message</p>
       <p>Share Contact</p>
       <p>Add to Favorite</p>
       <p>Add to Emergency Contacts</p>
               <div  class="" onclick="deleteContact(${index})">Block Contact</div>
    </div>

</body>
    `
    avatar.innerHTML = contact.name[0];
    theContactName.innerHTML = contact.name
    phoneNumber.innerHTML = contact.phone


}

function deleteContact(index) {
    // let contactTodelete = myContacts[index];
    myContacts.splice(index, 1);
    localStorage.setItem("phoneBook", JSON.stringify(myContacts));
    contact();
}


function call2(contact) {
    console.log(contact);

    recentCallsArr.unshift(contact)
    console.log(recentCallsArr);
    localStorage.setItem('recentCalls', JSON.stringify(recentCallsArr))
    
    main.innerHTML = `
      <button class="bond" onclick="myWay()">
                <span class="material-symbols-outlined">
                    arrow_back
                </span>
            </button>
    <div class="call-screen">
        <div class="top-info">
            <span class="time">00:48</span>
            
        </div>
        <div class="calling-info">
            <p>Calling...</p>
            <h1>${contact.name}</h1>
        </div>
        <div class="buttons demos">
            <button class="speaker demo"><span  class="material-symbols-outlined demo">
          volume_up
            </span>
        <span id="icon-label"> Speaker </span></button>
            <button class="facetime  demo">
            <span class="material-symbols-outlined">
          videocam
          </span>
            <span id="icon-label"> FaceTime </span></button>
            <button class="mute demo">
            <span class="material-symbols-outlined">
         mic_off
        </span>
            <span id="icon-label"> Mute </span></button>
            <button class="add demo">
            <span class="material-symbols-outlined">
            person_add
            </span>
            <span id="icon-label"> Add </span></button>
            <button class="end  demo" onclick="keypad()">
            <span class="material-symbols-outlined">
            call_end
           </span>
            <span id="icon-label"> End </span></button>
            <button class="keypadd  demo"">
            <span class="material-symbols-outlined">
             apps
            </span>
            <span id="icon-label"> Keypad </span></button>
        </div>
    </div>`
}




// let contacts = JSON.parse(localStorage.getItem("phoneBook")) || [];

function keypad() {
    main.innerHTML = `
       <button class="bond" onclick="myWay()">
                <span class="material-symbols-outlined">
                    arrow_back
                </span>
            </button>
        <button id="add">Add to Contact</button>

        <div id="contactForm">
            <input type="text" id="name" placeholder="Name">
            <div id="phoneNumber"></div>
            <button id="saveContact">Save Contact</button>
        </div>

        <div id="display"></div>

        <div class="grid">
            <button id ="number"  data-num="1">1</button>
            <button id ="number" data-num="2">2<br><small>ABC</small></button>
            <button id ="number" data-num="3">3<br><small>DEF</small></button>
 
            <button id ="number" data-num="4">4<br><small>GHI</small></button>
            <button id ="number" data-num="5">5<br><small>JKL</small></button>
            <button id ="number" data-num="6">6<br><small>MNO</small></button>

            <button id ="number" data-num="7">7<br><small>PQRS</small></button>
            <button id ="number" data-num="8">8<br><small>TUV</small></button>
            <button id ="number" data-num="9">9<br><small>WXYZ</small></button>

            <button id ="number" data-num=""></button>
            <button id ="number" data-num="0">0<br><small>+</small></button>
            <button id ="number" data-num="#">#</button>
        </div>
       <div style="width:100%; display: flex; justify-content: center;"> <button id="call">&#128222;</button> </div>

    `;

    // Elements
    const display = document.getElementById('display');
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const phoneNumber = document.getElementById('phoneNumber');
    const saveContactBtn = document.getElementById('saveContact');
    const callBtn = document.getElementById('call');
    const addBtn = document.getElementById('add');
    addBtn.style.display = 'none'

    // Hide form initially
    contactForm.style.display = 'none';

    // Append number
    document.querySelectorAll('.grid button').forEach(btn => {
        btn.addEventListener('click', () => {
            addBtn.style.display = 'block'
            const num = btn.getAttribute('data-num');
            display.innerText += num;
        });
    });

    // Call




    callBtn.addEventListener('click', () => {
        if (display.innerText === '') {
            return
        } else {
            let container = document.querySelector(".container")
            container.style.backgroundColor = "background: radial-gradient(circle, #2a3b26 30%, #0d0d0d 80%)"


            let whoToCall = myContacts.filter(who => who.phone === display.innerText)
         
            

            if (whoToCall.length === 0) {
                console.log('no contact found');

                let noContactObj = {
                    name: display.innerText,
                    phone: display.innerText
                }
                recentCallsArr.unshift(noContactObj)

            console.log(recentCallsArr);
            localStorage.setItem('recentCalls', JSON.stringify(recentCallsArr))
                main.innerHTML = `
                  <button class="bond" onclick="myWay()">
                <span class="material-symbols-outlined">
                    arrow_back
                </span>
            </button>
    <div class="call-screen">
        <div class="top-info">
            <span class="time">00:48</span>
            // <span class="signal">📶 4G</span>
        </div>
        <div class="calling-info">
            <p>Calling...</p>
            <h1>${display.innerText}</h1>
        </div>
        <div class="buttons demos">
                 <button class="speaker demo"><span  class="material-symbols-outlined demo">
          volume_up
            </span>
        <span id="icon-label"> Speaker </span></button>
            <button class="facetime  demo">
            <span class="material-symbols-outlined">
          videocam
          </span>
            <span id="icon-label"> FaceTime </span></button>
            <button class="mute demo">
            <span class="material-symbols-outlined">
         mic_off
        </span>
            <span id="icon-label"> Mute </span></button>
            <button class="add demo">
            <span class="material-symbols-outlined">
            person_add
            </span>
            <span id="icon-label"> Add </span></button>
            <button class="end  demo" onclick="keypad()">
            <span class="material-symbols-outlined">
            call_end
           </span>
            <span id="icon-label"> End </span></button>
            <button class="keypadd  demo"">
            <span class="material-symbols-outlined">
             apps
            </span>
            <span id="icon-label"> Keypad </span></button>
        </div>
    </div>`
            } else{
                recentCallsArr.push(whoToCall[0])
            console.log(recentCallsArr);
            localStorage.setItem('recentCalls', JSON.stringify(recentCallsArr))
                console.log(whoToCall[0].name);
            
            // alert('Calling ' + whoToCall[0].name);

            main.innerHTML = `
    <div class="call-screen">
        <div class="top-info">
            <span class="time">00:48</span>
            <span class="signal">📶 4G</span>
        </div>
        <div class="calling-info">
            <p>Calling...</p>
            <h1>${whoToCall[0].name}</h1>
        </div>
        <div class="buttons demos">
            <span class="material-symbols-outlined">
volume_up
</span>
            <button class="facetime  demo">FaceTime</button>
            <button class="mute  demo">Mute</button>
            <button class="add  demo">Add</button>
            <button class="end  demo" onclick="keypad()">End</button>
            <button class="keypad  demo"">Keypad</button>
        </div>
    </div>`
            }
          
        }
    });

    // Add to Contact
    addBtn.addEventListener('click', () => {
        if (display.innerText === '') {
            alert('Enter a number first');
        } else {
            contactForm.style.display = 'block';
            phoneNumber.innerText = display.innerText;
        }
    });

    // Save Contact
    saveContactBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name === "") {
            alert("Kindly enter a name");
        } else {
            const newContact = {
                name: name,
                phone: phoneNumber.innerText
            };

            myContacts.push(newContact);
            localStorage.setItem("phoneBook", JSON.stringify(myContacts));

            alert("Contact Saved!");

            // Reset form
            nameInput.value = '';
            display.innerText = '';
            contactForm.style.display = 'none';
        }
    });
}

