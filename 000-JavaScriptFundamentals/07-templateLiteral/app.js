const name = "John";
const age = 20;
const job = "Web Developer";
const city = "Miami";

let html;

//! Without template literals
html = '<ul><li>Name: '+name+'</li><li>Age: '+age+'</li><li>Job: '+job+'</ul>';

//! With template literals
html = `<ul>
          <li>Name: ${name}</li>
          <li>Age: ${age}</li>
          <li>Job: ${job}</li>
          <li>City: ${city}</li>
        </ul>`;

document.body.innerHTML = html;