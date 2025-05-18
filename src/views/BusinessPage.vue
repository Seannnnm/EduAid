<template>
  <div class="business-page">
    <div class="overlay">
      <div class="content-box">
        <h1>💼 Global Business Leaders Grant</h1>
        <p class="category"><strong>Category:</strong> Business</p>

        <div class="description">
          <p>
            The <strong>Global Business Leaders Grant</strong> is designed to support students who aspire to become influential leaders in the field of international business.
          </p>

          <p>
            This scholarship provides financial aid and access to valuable mentorships and networking opportunities for students committed to careers in global commerce, trade, finance, or entrepreneurship.
          </p>

          <p>
            If you're pursuing a business degree and are passionate about leading in a global economy, this grant is tailored for you.
          </p>
        </div>

        <div class="apply-section">
          <h2>How to Apply</h2>
          <ul>
            <li>Submit your application online through the official portal</li>
            <li>Attach a copy of your academic transcript</li>
            <li>Provide a resume highlighting business or leadership activities</li>
            <li>Write a personal essay describing your global business aspirations</li>
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
  name: 'BusinessScholarship',
  methods: {
    applyNow() {
      this.$router.push('/businessapply'); // Corrected route
    }
  }
};
</script>

<style scoped>
.business-page {
  background-image: url('C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\Businessimg.jpg'); /* Replace with your actual image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background-color: rgba(255, 255, 255, 0.92);
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
