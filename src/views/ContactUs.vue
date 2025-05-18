<template>
  <div class="page-background">
    <div class="contact-wrapper">
      <div class="contact-container">
        <h1>Contact Us - Edu Aid</h1>
        <p class="description">
          Edu Aid is a government initiative dedicated to helping students across the country access education through bursaries and financial support. If you have questions, need assistance, or would like to learn more, feel free to reach out using the form below.
        </p>

        <div class="contact-content">
          <!-- Contact Form -->
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input id="name" v-model="name" type="text" required />
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input id="email" v-model="email" type="email" required />
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input id="subject" v-model="subject" type="text" required />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="message" rows="5" required></textarea>
            </div>

            <button type="submit">Send Message</button>
            <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
          </form>

          <!-- Social Media Contact Info -->
          <div class="social-info">
            <h2>Connect With Us</h2>
            <ul>
              <li><strong>Email:</strong> info@eduaid.gov</li>
              <li><strong>Phone:</strong> +1 (800) 123-4567</li>
              <li><strong>Facebook:</strong> @EduAidOfficial</li>
              <li><strong>Twitter:</strong> @EduAidGov</li>
              <li><strong>Instagram:</strong> @eduaid.initiative</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const successMessage = ref('')

const submitForm = () => {
  console.log('Form submitted:', {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  })

  successMessage.value = 'Thank you! Your message has been sent.'
  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
}
</script>

<style scoped>
.contact-container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
}

.description {
  text-align: center;
  margin-bottom: 30px;
  font-size: 16px;
  color: #555;
}

.contact-content {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.contact-form {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #d3760b;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #997b36;
}

.success-message {
  color: green;
  text-align: center;
  margin-top: 10px;
}

.social-info {
  flex: 1;
  min-width: 250px;
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 8px;
}

.social-info h2 {
  margin-bottom: 15px;
  color: #2c3e50;
}

.social-info ul {
  list-style: none;
  padding: 0;
}

.social-info li {
  margin-bottom: 10px;
  font-size: 16px;
}

.contact-wrapper {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 40px auto;
  max-width: 1100px;
}

.page-background {
  background-image: url('C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\contactimg.jpg'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 60px 20px;
}
</style>

