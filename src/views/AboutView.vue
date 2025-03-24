<template>
  <div class="about-page container mx-auto p-6">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-blue-600">About EduCare</h1>
      <p class="text-gray-600 mt-2">Empowering citizens with access to education through bursaries and free education programs.</p>
    </div>
    
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-gray-800">Our Mission</h2>
      <p class="text-gray-700 mt-2">
        EduCare is a government initiative designed to simplify the process of applying for bursaries and free education.
        We strive to ensure that every eligible citizen has access to financial support for their education.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div class="bg-blue-100 p-4 rounded-lg">
        <h3 class="text-xl font-semibold text-blue-700">Key Features</h3>
        <ul class="list-disc list-inside mt-2 text-gray-700">
          <li>Easy online application for bursaries</li>
          <li>Government-verified financial aid programs</li>
          <li>Transparency and real-time status tracking</li>
          <li>Secure and user-friendly interface</li>
        </ul>
      </div>
      
      <div class="bg-green-100 p-4 rounded-lg">
        <h3 class="text-xl font-semibold text-green-700">Who Can Apply?</h3>
        <p class="text-gray-700 mt-2">
          EduCare is available to all citizens who meet the eligibility criteria for government bursaries and free education programs.
        </p>
      </div>
    </div>
    
    <div class="text-center mt-8">
      <router-link to="/apply" class="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700">
        Apply Now
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage"
};
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: auto;
}
</style>