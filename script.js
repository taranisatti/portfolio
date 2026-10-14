const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');

    const fields = [name, email, subject, message];
    let valid = true;

    fields.forEach((field) => {
      field.classList.remove('is-invalid');
      const feedback = field.nextElementSibling;
      if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.style.display = 'none';
      }
    });

    if (!name.value.trim()) {
      name.classList.add('is-invalid');
      name.nextElementSibling.style.display = 'block';
      valid = false;
    }

    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('is-invalid');
      email.nextElementSibling.style.display = 'block';
      valid = false;
    }

    if (!subject.value.trim()) {
      subject.classList.add('is-invalid');
      subject.nextElementSibling.style.display = 'block';
      valid = false;
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      message.classList.add('is-invalid');
      message.nextElementSibling.style.display = 'block';
      valid = false;
    }

    if (!valid) {
      formMessage.textContent = 'Please fix the highlighted fields and try again.';
      formMessage.className = 'form-message error';
      return;
    }

    formMessage.textContent = 'Your message has been sent successfully!';
    formMessage.className = 'form-message success';
    contactForm.reset();
  });
}
