<template>
  <div class="international-page">
    <div class="overlay">
      <div class="content-box">
        <h1>🌍 International Scholars Program</h1>
        <p class="category"><strong>Category:</strong> International</p>

        <div class="description">
          <p>
            The <strong>International Scholars Program</strong> is dedicated to helping international students achieve their dream of studying abroad. This scholarship provides financial assistance to outstanding students from around the globe who wish to pursue higher education in a new country.
          </p>
          <p>
            We believe that education knows no borders. This program is designed to promote diversity, cross-cultural exchange, and academic excellence across institutions worldwide.
          </p>
          <p>
            Whether you're planning to study science, arts, business, or any other discipline, this opportunity can help bring your global academic aspirations to life.
          </p>
        </div>

        <div class="apply-section">
          <h2>How to Apply</h2>
          <ul>
            <li>Complete the online application form</li>
            <li>Upload your academic records and proof of admission</li>
            <li>Provide a personal statement about your goals for studying abroad</li>
            <li>Include a letter of recommendation from a teacher or advisor</li>
          </ul>
        </div>

        <div class="cta">
          <button @click="applyNow">Apply Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InternationalScholarship',
  methods: {
    applyNow() {
      this.$router.push('/internationalapply'); // Updated route
    }
  }
};
</script>

<style scoped>
.international-page {
  background-image: url('C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\Internationalimg.jpg'); /* Replace with your actual image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.overlay {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 12px;
  width: 100%;
  max-width: 850px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.content-box {
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
  color: #333;
}

.apply-section h2 {
  margin-top: 30px;
  font-size: 1.4rem;
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