<template>
  <nav class="navbar">
    <RouterLink to="/" class="website-title">
      <svg xmlns="http://www.w3.org/2000/svg" class="cap-icon" viewBox="0 0 640 512" fill="white">
        <path d="M622.3 271.1c9.2 5.4 9.2 18.5 0 23.9L336 447.8c-4.9 2.9-11 2.9-15.9 0L17.7 295c-9.2-5.4-9.2-18.5 0-23.9L320.1 64.2c4.9-2.9 11-2.9 15.9 0l286.3 206.9zM64 327.8v79.3c0 35.4 86 64 192 64s192-28.6 192-64v-79.3l-173.7 100c-12.3 7.1-27.3 7.1-39.6 0L64 327.8z"/>
      </svg>
      EduAid
    </RouterLink>
    <div class="nav-links">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
      <RouterLink to="/scholarships" class="nav-link">Scholarships</RouterLink>
      <RouterLink to="/contact" class="nav-link">Contact Us</RouterLink>
      <RouterLink to="/login" class="nav-link">Login</RouterLink>
      <RouterLink to="/signup" class="nav-link">Sign Up</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d3760b;
  padding: 10px 20px;
  flex-wrap: wrap;
}

.website-title {
  color: white;
  font-weight: bold;
  font-size: 50px;
  margin-right: 20px;
}

.nav-links {
  display: flex;
  gap: 35px;
  flex-wrap: wrap;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 20px;
}

.nav-link:hover {
  text-decoration: underline;
}
.nav-link::after {
  content: "⬇";
  margin-left: 5px;
  color: inherit;
  transition: transform 0.2s ease;
}

.nav-link:hover::after {
  transform: translateX(3px);
}

.cap-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
}
.website-title {
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 50px;
  margin-right: 20px;
  text-decoration: none;
}
</style>