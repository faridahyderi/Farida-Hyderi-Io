/*n your index.js file, using DOM manipulation, add a 'footer' child element to your index.html.*/

const footer1 = document.createElement('footer');
footer1.className ='Footer';
document.body.appendChild(footer1);

/*Creating today variable*/
const today = new Date();

/*create thisYear variable and assign it the current year from your date object*/
const thisYear = today.getFullYear();

/*Create a variable named footer and assign it the footer element by using 
"DOM Selection" to select the <footer> element from the DOM */

const footer = document.querySelector('.Footer');

/*Create a variable named copyright and use it to create a new paragraph (p) element*/
const copyright = document.createElement('p');

/*Set the inner HTML of your copyright element to display your name and the current year*/
copyright.innerHTML = `Farida Hyderi ${thisYear} \u{00A9}`;

/*Append the copyright element to the footer using "DOM Manipulation"*/
footer.append(copyright);

/*List your technical skills by creating an Array of String values and store it in a variable named skills*/
const skills=["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];

/*Create a variable named skillsSection and use "DOM Selection" to select the skills section by id*/
const skillsSection = document.getElementById('Skills');

/*Create a variable named skillsList and use "DOM Selection" to query the skillsSection 
(instead of the entire document) to select the <ul> element you created earlier in this assignment*/
const skillsList = skillsSection.querySelector('ul');

/*Create a for loop to iterate over your skills Array
Inside the loop, create a variable named skill to create a new list item (li) element
Still inside the loop, use the skill variable to set the inner text to the current Array element
The last thing we'll do inside the loop is append the skill element to the skillsList element*/

for(let i=0 ;i< skills.length ; i++ )
    {
      const skill = document.createElement('li')
      skill.innerHTML = skills[i];
      skillsList.appendChild(skill);
    }

    /*Create a variable named messageForm that uses "DOM Selection" to select the 
    "leave_message" form by name attribute*/

    const messageForm = document.querySelector('form');

    /*Add an event listener to the messageForm element that handles the "submit" event
    Inside the callback function for your event listener, create three new variables 
    (one for each of the three form fields) and retrieve the value from the event*/
    
    messageForm.addEventListener('submit',event=>{
        event.preventDefault();                  
        const username = event.target.usersName.value;
        const email= event.target.usersEmail.value;
        const usermessage=event.target.usersMessage.value;
        console.log("username is ", username);
        console.log("Email is ", email);
        console.log("user Message is ", usermessage);
        
        /*Create a variable named messageSection and use "DOM Selection" to select the 
        #messages section by id*/
        const messageSection=document.getElementById('messages');

        /*Create a variable named messageList and use "DOM Selection"
         to query the messageSection (instead of the entire document) to find the <ul> element*/
         const messageList = messageSection.querySelector('ul');

         /*Create a variable named newMessage that makes a new list item (li) element*/
         const newMessage = document.createElement('li');
         

         /*On the next line, set the inner HTML of your newMessage element with the following 
         information:<a> element that displays the "usersName" and is a clickable link to the 
         "usersEmail" (hint: use the mailto: prefix) <span> element that displays the "usersMessage"*/
         const alink =document.createElement('a');
         alink.innerHTML=`${username} `;
         alink.href=`mailto:${email}`;

         const spanElement = document.createElement('span');
         spanElement.innerHTML = ` ${usermessage}`;

         
         messageList.append(newMessage);
         
         newMessage.appendChild(alink);
         newMessage.appendChild(document.createElement('br'));

         newMessage.appendChild(spanElement);
         newMessage.appendChild(document.createElement('br'));

         /*Create a variable named removeButton that makes a new <button> element*/
         const removeButton = document.createElement('button');

         /*Set the inner text to "remove" Set the type attribute to "button"*/
         removeButton.innerHTML = "remove";
         removeButton.type="button" ;

         /*Add an event listener to the removeButton element that handles the "click" event*/
      
          
         removeButton.addEventListener('click',event =>{
          /*Inside the callback function, create a variable named entry that finds the 
          button's parent element using DOM Traversal*/
          const entry = event.target.parentElement;

          /*Remove the entry element from the DOM*/
          entry.remove();

          
         
         });
          /*Append the removeButton to the newMessage element*/
          newMessage.appendChild(removeButton);
         
        messageForm.reset();
    }
    
);

/*Creating fetch, handle JSON data, Handling errors*/
fetch('https://api.github.com/users/faridahyderi/repos')
.then(res => {
  return res.text();
})
.then (text => {
      const data=JSON.parse(text);
      
     
         data.forEach(repo =>{
          const repositories=repo.name;
          console.log(repositories);
     
 })

  //Display Repositories in list
const projectSection = document.getElementById('Projects');
const projectList = projectSection.querySelector('ul');
for(let i=0 ;i< data.length ; i++ )
  {
   
    const projectli = document.createElement('li');
    projectli.innerHTML = data[i].name;
    projectList.appendChild(projectli);
   
  }

 })
.catch(error => {
  console.log(error)});


