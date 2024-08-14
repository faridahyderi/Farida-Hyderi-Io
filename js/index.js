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

