let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => links.classList.remove('active'));
      document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
    
    sec.classList.add('show-animate');
    }
    else {
      sec.classList.remove('show-animate');
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const mailtoLink = `mailto:kanishkjakhmola@gmail.com?subject=${subject}&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0APhone:%20${phone}%0D%0AMessage:%20${message}`;

  window.location.href = mailtoLink;
});