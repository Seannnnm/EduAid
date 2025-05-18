<template>
  <div class="page-background">
    <div class="directory-wrapper">
      <div class="scholarship-directory">
        <header class="intro">
          <h1>🎓 Scholarship Directory</h1>
          <p>
            Explore a curated list of scholarships to support your educational journey.
            Use the search bar or select a category to find opportunities that match your profile.
          </p>
        </header>

        <section class="search-section">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search scholarships..."
            class="search-input"
          />
        </section>

        <section class="categories">
          <h2>Categories</h2>
          <ul class="category-list">
            <li
              v-for="category in categories"
              :key="category"
              :class="{ active: selectedCategory === category }"
              @click="selectCategory(category)"
            >
              {{ category }}
            </li>
          </ul>
        </section>

        <section class="scholarship-list">
          <h2>Available Scholarships</h2>
          <div v-if="filteredScholarships.length">
            <div
              v-for="scholarship in filteredScholarships"
              :key="scholarship.id"
              class="scholarship-card"
            >
              <h3>{{ scholarship.name }}</h3>
              <p><strong>Category:</strong> {{ scholarship.category }}</p>
              <p>{{ scholarship.description }}</p>
              <router-link :to="scholarship.link" class="learn-more-link">Learn More</router-link>
            </div>
          </div>
          <p v-else>No scholarships found for the selected criteria.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchQuery = ref('');
const selectedCategory = ref('All');

const categories = ['All', 'STEM', 'Arts', 'Business', 'Health', 'International'];

const scholarships = ref([
  {
    id: 1,
    name: 'STEM Excellence Award',
    category: 'STEM',
    description: 'For outstanding students in science, technology, engineering, or mathematics.',
    link: '/stem',
  },
  {
    id: 2,
    name: 'Creative Arts Scholarship',
    category: 'Arts',
    description: 'Supporting students pursuing degrees in visual or performing arts.',
    link: '/arts',
  },
  {
    id: 3,
    name: 'Global Business Leaders Grant',
    category: 'Business',
    description: 'For students aiming for a career in international business.',
    link: '/business',
  },
  {
    id: 4,
    name: 'Healthcare Heroes Scholarship',
    category: 'Health',
    description: 'Assisting future healthcare professionals in their studies.',
    link: '/health',
  },
  {
    id: 5,
    name: 'International Scholars Program',
    category: 'International',
    description: 'For international students pursuing higher education abroad.',
    link: '/international',
  },
]);

const selectCategory = (category) => {
  selectedCategory.value = category;
};

const filteredScholarships = computed(() => {
  return scholarships.value.filter((scholarship) => {
    const matchesCategory =
      selectedCategory.value === 'All' || scholarship.category === selectedCategory.value;
    const matchesSearch =
      scholarship.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      scholarship.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});
</script>

<style scoped>
.scholarship-directory {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.intro {
  text-align: center;
  margin-bottom: 30px;
}

.search-section {
  text-align: center;
  margin-bottom: 20px;
}

.search-input {
  width: 60%;
  padding: 10px;
  font-size: 1rem;
}

.categories {
  margin-bottom: 30px;
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  justify-content: center;
}

.category-list li {
  padding: 8px 16px;
  background-color: #f0f0f0;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s;
}

.category-list li.active,
.category-list li:hover {
  background-color: #d3760b;
  color: #fff;
}

.scholarship-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.scholarship-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
}

.scholarship-card h3 {
  margin-top: 0;
}

.scholarship-card a {
  color: #d3760b;
  text-decoration: none;
}

.scholarship-card a:hover {
  text-decoration: underline;
}
.page-background {
  position: relative;
  min-height: 100vh;
  background-image: url('@/assets/contactimg.jpg'); /* Adjust path as needed */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.directory-wrapper {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin: 40px auto;
  max-width: 900px;
}
</style>