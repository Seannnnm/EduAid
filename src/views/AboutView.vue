<template>
  <section class="about-us-page">
    <div class="hero">
      <div class="overlay">
        <h1 class="title">About EduAid</h1>
      </div>
    </div>

    <div class="content">
      <p class="intro">
        <strong>EduCare</strong> is a government initiative launched in <strong>2010</strong>, designed to simplify the process of applying for bursaries and free education.
        Our mission is to ensure that every eligible citizen has access to financial support for their education.
      </p>

      <h2>Our Partner Universities</h2>
<div class="university-cards">
  <div class="card">
    <img src="C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\uni1.jpg" alt="NIML logo" class="university-image" />
    <h3>National Institute of Modern Learning (NIML)</h3>
    <p>A pioneering institution focused on digital literacy and modern education techniques.</p>
  </div>

  <div class="card">
    <img src="C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\uni2.jpg" alt="Unity State University logo" class="university-image" />
    <h3>Unity State University</h3>
    <p>Known for its inclusive programs and commitment to accessible higher education across regions.</p>
  </div>

  <div class="card">
    <img src="C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\un5.jpg" alt="South Valley Technological Institute logo" class="university-image" />
    <h3>South Valley Technological Institute</h3>
    <p>Specializes in engineering, applied sciences, and industry partnerships.</p>
  </div>

  <div class="card">
    <img src="C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\uni3.jpg" alt="Academy of Future Leaders logo" class="university-image" />
    <h3>Academy of Future Leaders</h3>
    <p>Focused on leadership, governance, and civic education for tomorrow’s policymakers.</p>
  </div>

  <div class="card">
    <img src="C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\uni4.jpg" alt="Metropolitan College of Innovation logo" class="university-image" />
    <h3>Metropolitan College of Innovation</h3>
    <p>A cutting-edge urban campus driving research in AI, sustainability, and entrepreneurship.</p>
  </div>
</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
};
</script>

<style scoped>
.about-us-page {
  font-family: 'Arial', sans-serif;
  color: #333;
}

.hero {
  background-image: url('C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\aboutimg.jpg'); /* Add a background image in assets */
  background-size: cover;
  background-position: center;
  height: 300px;
  position: relative;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
}

.content {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.intro {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.universities {
  list-style: disc;
  padding-left: 1.5rem;
}

.universities li {
  margin-bottom: 0.5rem;
}

.university-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-3px);
}

.card h3 {
  margin-top: 0;
  font-size: 1.1rem;
}

.card p {
  font-size: 0.95rem;
  color: #555;
}
</style>