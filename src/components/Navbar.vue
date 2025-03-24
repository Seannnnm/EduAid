<template>
    <nav class="navbar">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
      <RouterLink to="/apply" class="nav-link">Apply</RouterLink>
      <RouterLink to="/signup" class="nav-link">Sign Up</RouterLink>
      <RouterLink to="/contact" class="nav-link">Contact Us</RouterLink>
      <RouterLink to="/login" class="nav-link">Login</RouterLink>
    </nav>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    gap: 20px;
    background: #333;
    padding: 10px;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  
  .nav-link:hover {
    text-decoration: underline;
  }
  </style>
  