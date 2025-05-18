<template>
  <div class="background-wrapper">
    <div class="login-container">
      <div class="title">
        <h1>Welcome Back to EduAid</h1>
      </div>
      <div class="form-box">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" v-model="email" required />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" v-model="password" required />
          </div>

          <p v-if="error" class="error">{{ error }}</p>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')
const error = ref('')

// Make sure axios sends cookies with requests
axios.defaults.withCredentials = true

const handleLogin = async () => {
  error.value = ''

  try {
    // Step 1: Get CSRF cookie from Laravel Sanctum
    await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')

    // Step 2: Send login request with user input
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      email: email.value,
      password: password.value
    })

    // On success, response.data contains user info or token
    console.log('Login successful:', response.data)
    alert('Login successful!')

    // TODO:
    // - Save token or user info (e.g. in Pinia or localStorage)
    // - Redirect to dashboard or home page
    // For example:
    // router.push('/dashboard')

  } catch (err) {
    console.error('Login error:', err.response?.data || err.message)
    error.value = err.response?.data?.message || 'Login failed. Please try again.'
  }
}
</script>
<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  min-height: 100vh;
  color: white;
  background-color: transparent; /* Remove black bar */
}

.title {
  margin-bottom: 20px;
  text-align: center;
}

.title h1 {
  font-size: 2rem;
  color: #ffffff;
}

.form-box {
  background: rgba(0, 0, 0, 0.5); /* Optional: semi-transparent background */
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  margin-bottom: 25px;
  color: #ffffff;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  color: #ffffff;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.9); /* Make inputs readable */
  color: #000;
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
  background-color: #b38300;
}

.error {
  color: red;
  font-size: 0.9rem;
  margin-bottom: 10px;
  text-align: center;
}

.background-wrapper {
  background-image: url('/src/assets/contactimg.jpg'); /* Use a web-friendly path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
