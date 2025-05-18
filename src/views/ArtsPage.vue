<template>
  <div class="arts-page">
    <div class="content-box">
      <h1>🎨 Creative Arts Scholarship</h1>
      <p class="category"><strong>Category:</strong> Arts</p>

      <div class="description">
        <p>
          The Creative Arts Scholarship is dedicated to supporting students who are passionate
          about the <strong>visual</strong> and <strong>performing arts</strong>. Whether you're
          a painter, dancer, filmmaker, actor, or designer, this scholarship helps foster your
          creative journey.
        </p>

        <p>
          This opportunity is for students pursuing degrees in fields such as fine arts,
          theater, dance, music, graphic design, or media production. Ideal applicants should
          demonstrate artistic talent, commitment to their craft, and a vision for how they
          intend to use their art to impact the world.
        </p>

        <p>
          Let your creativity shine and take the next step toward building a successful artistic
          career with this supportive funding opportunity.
        </p>
      </div>

      <div class="apply-section">
        <h2>How to Apply</h2>
        <ul>
          <li>Complete the online scholarship application form</li>
          <li>Submit a portfolio or performance sample (link or upload)</li>
          <li>Provide a letter of recommendation from an arts instructor or mentor</li>
          <li>Write a personal statement about your artistic goals and inspiration</li>
        </ul>
      </div>

      <div class="cta">
        <button @click="applyNow">Apply Now</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const applyNow = () => {
  window.location.href = '/artsapply';
};
</script>

<style scoped>
.arts-page {
  background-image: url('C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\Artsimg.jpg'); /* Optional background */
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