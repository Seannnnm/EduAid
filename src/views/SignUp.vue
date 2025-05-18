<template>
  <div class="background-wrapper"> 
    <div class="signup-container">
      <div class="title">
        <h1>Sign up now with EduAid</h1>
      </div>
      <div class="form-box">
        <h2>Create Your Account</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input v-model="form.name" type="text" id="name" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="form.email" type="email" id="email" required />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input v-model="form.password" type="password" id="password" required />
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input v-model="form.confirmPassword" type="password" id="confirmPassword" required />
          </div>

          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

          <button type="submit">Sign Up</button>

          <!-- Login Prompt -->
          <p class="login-prompt">
            Already a member?
            <router-link to="/login" class="login-link">Log In!</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const errorMessage = ref('');

const handleSubmit = () => {
  if (!form.value.name || !form.value.email || !form.value.password || !form.value.confirmPassword) {
    errorMessage.value = 'Please fill in all fields.';
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errorMessage.value = 'Please enter a valid email.';
    return;
  }

  if (form.value.password !== form.value.confirmPassword) {
    errorMessage.value = 'Passwords do not match.';
    return;
  }

  console.log('Form submitted:', form.value);
  errorMessage.value = '';
  alert('Sign-up successful!');
};
</script>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  min-height: 100vh;
}

.title {
  margin-bottom: 20px;
  text-align: center;
}

.title h1 {
  font-size: 2rem;
  color: #2c3e50;
}

.form-box {
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 25px;
  color: #eee;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  color: #f0f0f0;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #444;
  font-size: 1rem;
  background-color: #1a1a1a; 
  color: #ffffff;            
}

button {
  width: 100%;
  padding: 12px;
  background-color: #d3760b;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #b38900;
}

.error {
  color: red;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.background-wrapper {
  background-image: url('C:\\Users\\seanm\\OneDrive\\Documents\\EduAid\\src\\assets\\contactimg.jpg'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-prompt {
  margin-top: 15px;
  text-align: center;
  color: #f0f0f0;
  font-size: 0.9rem;
}

.login-link {
  color: #d3760b;
  text-decoration: none;
  font-weight: bold;
  margin-left: 5px;
}

.login-link:hover {
  text-decoration: underline;
}
</style>