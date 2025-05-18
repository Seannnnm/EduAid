<template>
  <div class="eduaid-homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to EduAid!</h1>
        <p>Recieve opportunities to persue your academic excellence</p>
        <router-link to="/scholarships">
  <button class="cta-button">Apply for a Scholarship</button>
</router-link>
      </div>
    </section>

    <!-- Featured Section -->
    <section class="featured-section">
      <div class="container">
        <h2 class="section-title">Our Scolarships</h2>
        <div class="featured-items">
          <div class="featured-item">
            <div class="featured-image">
              <img src="C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\seniors.jpg" alt="Highschool Seniors">
            </div>
            <h3>Scholarships for High School Seniors</h3>
            <p>Your senior year in high school is a crucial time for college preparation. Among the many tasks, finding and applying for college scholarships should be a priority. It's important to start this process early.</p>
          </div>
          <div class="featured-item">
            <div class="featured-image">
              <img src="C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\studentsimage1.jpg" alt="Highschool Juniors">
            </div>
            <h3>Scholarships for High School Juniors</h3>
            <p>High school juniors shouldn't wait until senior year to start applying for scholarships. Many scholarship programs are open to juniors, offering them an early opportunity to secure scholarships for college.</p>
          </div>
          <div class="featured-item">
            <div class="featured-image">
              <img src="C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\womeninpower.jpg" alt="Women Empowerment">
            </div>
            <h3>Scholarships for Women</h3>
            <p>Women have surpassed men in achieving college degrees. This can be at least partially attributed to the number of scholarships available exclusively for women, enhancing their educational opportunities.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">Our Story</h2>
            <p>Founded in 2010, EduAid is a government initiative designed to simplify the process of applying for bursaries and free education. We strive to ensure that every eligible citizen has access to financial support for their education.</p>
            <router-link to="/about">
  <button class="secondary-button">Learn More</button>
</router-link>
          </div>
          <div class="about-image">
            <img src="C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\graduants.jpg" alt="Graduants">
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">Frequently asked Questions</h2>
        <div class="testimonials">
          <div class="testimonial">
            <div class="stars">Do I need to create an account to view scholarships on EduAid?</div>
            <p class="quote">"No, you can browse scholarships on Scholarships.com without creating an account by visiting our Scholarship Directory. However, registering allows you to receive personalized scholarship matches based on your background, interests, and eligibility, making it easier to find opportunities that are the best fit for you."</p>
            
          </div>
          <div class="testimonial">
            <div class="stars">Is EduAid completely free?</div>
            <p class="quote">"Yes, Scholarships.com is completely free to use. There are no fees to search for scholarships, create an account, or access any of our resources. Our goal is to help students find and win scholarships without any cost or obligation."</p>
            
          </div>
          <div class="testimonial">
            <div class="stars">What is EduAid?</div>
            <p class="quote">"EduCare is a government initiative designed to simplify the process of applying for bursaries and free education. We strive to ensure that every eligible citizen has access to financial support for their education."</p>
            
          </div>
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="info-section">
      <div class="container">
        <div class="info-container">
          <div class="info-card">
            <h3>Hours</h3>
            <p>Monday - Thursday: 11am - 10pm</p>
            <p>Friday - Saturday: 11am - 11pm</p>
            <p>Sunday: 11am - 9pm</p>
          </div>
          <div class="info-card">
            <h3>Location</h3>
            <p>123 Masomo Drive</p>
            <p>Education District</p>
            <p>Central City, GC 12345</p>
          </div>
          <div class="info-card">
            <h3>Contact</h3>
            <p>Phone: +1 (800) 123-4567</p>
            <p>Email: info@eduaid.gov</p>
            
          </div>
        </div>
      </div>
    </section>

     <!-- Newsletter Section -->
    <section class="newsletter-section">
      <div class="container">
        <div class="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for special announcements!</p>
          <form class="newsletter-form" @submit="handleSubscribe">
            <input v-model="email" type="email" placeholder="Your email address" required>
            <button type="submit">Subscribe</button>
          </form>
          <div v-if="showPopup" class="popup">Successfully Subscribed!</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const showPopup = ref(false);

const handleSubscribe = (e) => {
  e.preventDefault();
  showPopup.value = true;
  setTimeout(() => {
    showPopup.value = false;
    email.value = '';
  }, 3000);
};
</script>

<style scoped>
/* Base Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #9e9999;
}

/* Hero Section */
.hero {
  height: 80vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('C:\Users\seanm\OneDrive\Documents\EduAid\src\assets\homepage1.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-top: 50px;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #d3760b;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #a5672a;
}

/* Featured Section */
.featured-section {
  padding: 5rem 0;
  background-color: hsla(0, 8%, 5%, 0.982);
}

.featured-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.featured-item {
  flex: 1;
  min-width: 300px;
  text-align: center;
}

.featured-image {
  height: 250px;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.featured-image img:hover {
  transform: scale(1.05);
}

.featured-item h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: hsl(0, 0%, 98%);
}

.featured-item p {
  color: #d7d0d0;
}

/* About Section */
.about-section {
  padding: 5rem 0;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
}

.about-text, .about-image {
  flex: 1;
  min-width: 300px;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #555;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.secondary-button {
  background-color: transparent;
  color: #d3760b;
  border: 2px solid #d3760b;
  padding: 10px 25px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
}

.secondary-button:hover {
  background-color: #d3760b;
  color: white;
}

/* Testimonials Section */
.testimonials-section {
  padding: 5rem 0;
  background-color: #f5f5f5;
}

.testimonials {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.testimonial {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 300px;
  max-width: 400px;
}

.stars {
  color: #d3760b;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.quote {
  font-style: italic;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.author {
  font-weight: bold;
  text-align: right;
}

/* Info Section */
.info-section {
  padding: 5rem 0;
}

.info-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.info-card {
  flex: 1;
  background-color: #1e1b1b;
  padding: 2rem;
  border-radius: 8px;
  min-width: 250px;
  text-align: center;
}

.info-card h3 {
  margin-bottom: 1rem;
  color: #333;
}

.info-card p {
  color: #666;
  margin-bottom: 0.5rem;
}

/* Newsletter Section */
.newsletter-section {
  padding: 5rem 0;
  background-color: #333;
  color: white;
}

.newsletter-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-content h2 {
  margin-bottom: 1rem;
}

.newsletter-content p {
  margin-bottom: 2rem;
}

.newsletter-form {
  display: flex;
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-form input {
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 4px 0 0 4px;
}

.newsletter-form button {
  background-color: #d3760b;
  color: white;
  border: none;
  padding: 0 20px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.newsletter-form button:hover {
  background-color: #aa721e;
}

.popup {
  background-color: #28a745;
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  animation: fadeInOut 3s ease;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translateY(20px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(20px); }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  .about-content {
    flex-direction: column-reverse;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-form input {
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .newsletter-form button {
    border-radius: 4px;
  }
}
</style>
