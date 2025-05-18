<template>
  <div class="arts-application-page">
    <div class="form-box">
      <h1>🎨 Creative Arts Scholarship Application</h1>
      <form @submit.prevent="submitApplication">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>

        <div class="form-group">
          <label for="portfolio">Portfolio or Performance Sample (Link or Upload)</label>
          <input type="url" id="portfolio" v-model="form.portfolioLink" placeholder="Paste a link" />
          <input type="file" @change="handleFileUpload" />
        </div>

        <div class="form-group">
          <label for="recommendation">Letter of Recommendation (Upload)</label>
          <input type="file" id="recommendation" @change="handleRecommendationUpload" required />
        </div>

        <div class="form-group">
          <label for="statement">Personal Statement</label>
          <textarea id="statement" rows="6" v-model="form.statement" placeholder="Describe your artistic goals and inspiration" required></textarea>
        </div>

        <div class="cta">
          <button type="submit">Submit Application</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  portfolioLink: '',
  portfolioFile: null,
  recommendationFile: null,
  statement: ''
})

function handleFileUpload(event) {
  form.portfolioFile = event.target.files[0]
}

function handleRecommendationUpload(event) {
  form.recommendationFile = event.target.files[0]
}

function submitApplication() {
  console.log('Submitting application:', form)
  alert('Your application has been submitted!')
}
</script>

<style scoped>
.arts-application-page {
  background: #fff8f2;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.form-box {
  background: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 20px;
  color: #2c3e50;
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.cta {
  text-align: center;
}

button {
  background-color: #d3760b;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #b36100;
}
</style>
