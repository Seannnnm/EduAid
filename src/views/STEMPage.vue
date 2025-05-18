<template>
  <div class="stem-page">
    <div class="content-box">
      <h1>🎓 STEM Excellence Award</h1>
      <p class="category"><strong>Category:</strong> STEM</p>

      <div class="description">
        <p>
          The STEM Excellence Award is designed to recognize and support outstanding students
          who are pursuing studies in <strong>science</strong>, <strong>technology</strong>,
          <strong>engineering</strong>, or <strong>mathematics</strong>. This scholarship aims
          to empower the next generation of innovators, researchers, and problem solvers.
        </p>

        <p>
          Eligible applicants must demonstrate strong academic performance, leadership
          potential, and a passion for STEM-related fields. Preference may be given to those
          involved in extracurricular activities, research projects, or community outreach.
        </p>

        <p>
          Whether you're planning to become a software engineer, physicist, biomedical
          researcher, or data scientist, this award can help you reach your goals.
        </p>
      </div>

      <div class="apply-section">
        <h2>How to Apply</h2>
        <ul>
          <li>Submit an online application form with personal and academic details</li>
          <li>Provide a letter of recommendation from a STEM educator or mentor</li>
          <li>Write a short personal essay (500 words) about your interest in STEM</li>
          <li>Submit transcripts and standardized test scores (optional)</li>
        </ul>
      </div>

      <div class="cta">
        <button @click="applyNow">Apply Now</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const applyNow = () => {
  router.push('/stemapply') // adjust the route path as needed
}
</script>

<style scoped>
.stem-page {
  background-image: url('C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\STEMimg.jpg'); /* Optional */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

.content-box {
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.category {
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #555;
}

.description p {
  margin-bottom: 16px;
  line-height: 1.6;
}

.apply-section h2 {
  margin-top: 30px;
  font-size: 1.5rem;
  color: #2c3e50;
}

ul {
  margin-top: 10px;
  padding-left: 20px;
  list-style-type: disc;
}

.cta {
  margin-top: 30px;
  text-align: center;
}

button {
  padding: 12px 24px;
  background-color: #d3760b;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #b36100;
}
</style>