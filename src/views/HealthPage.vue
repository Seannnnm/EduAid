<template>
  <div class="health-page">
    <div class="overlay">
      <div class="content-box">
        <h1>🩺 Healthcare Heroes Scholarship</h1>
        <p class="category"><strong>Category:</strong> Health</p>

        <div class="description">
          <p>
            The <strong>Healthcare Heroes Scholarship</strong> supports aspiring healthcare professionals on their educational journey. Whether you’re pursuing a career as a doctor, nurse, medical researcher, or public health advocate, this scholarship is designed to help ease the financial burden of your studies.
          </p>

          <p>
            We are looking for students who are passionate about improving health outcomes in their communities and around the world. If you are driven by compassion, curiosity, and commitment to care, you may be the ideal candidate.
          </p>

          <p>
            Your journey to becoming a healthcare hero begins here. Make a difference—one patient, one breakthrough, one community at a time.
          </p>
        </div>

        <div class="apply-section">
          <h2>How to Apply</h2>
          <ul>
            <li>Fill out the online scholarship application form</li>
            <li>Provide academic transcripts</li>
            <li>Submit one recommendation letter from a healthcare mentor or teacher</li>
            <li>Write a 500-word essay: “Why I Want to Work in Healthcare”</li>
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
  name: 'HealthScholarship',
  methods: {
    applyNow() {
      this.$router.push('/healthapply'); // Updated route
    }
  }
};
</script>

<style scoped>
.health-page {
  background-image: url('C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\Healthcareimg.jpg'); /* Update path as needed */
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
