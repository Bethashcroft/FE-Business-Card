const queryStr = document.location.search;
const queries = new URLSearchParams(queryStr);
const firstName = queries.get('Firstname');
const lastName = queries.get('Lastname');
const company = queries.get('Company');
const jobTitle = queries.get('Job');
const email = queries.get('Email');
const phoneNumber = queries.get('Phonenumber');

document.getElementById("name").innerText = `${firstName} ${lastName}`;
document.getElementById("job").innerText = jobTitle;
document.getElementById("companyName").innerText = company;
document.getElementById("phoneNumber").innerText = phoneNumber;
document.getElementById("emailAddress").innerText = email;
