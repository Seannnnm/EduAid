<template>
  <div class="application-page">
    <div class="form-container">
      <h1>🎓 STEM Excellence Award Application</h1>
      <p><strong>Category:</strong> STEM</p>
      <p class="instructions">
        Please fill out the application form below. All fields marked with * are required unless otherwise stated.
      </p>

      <form @submit.prevent="submitForm">
        <!-- Personal Details -->
        <div class="form-section">
          <h2>Personal Details</h2>
          <label>
            Full Name*:
            <input type="text" v-model="form.fullName" required />
          </label>

          <label>
            Email*:
            <input type="email" v-model="form.email" required />
          </label>

          <label>
            Phone Number:
            <input type="tel" v-model="form.phone" />
          </label>
        </div>

        <!-- Academic Details -->
        <div class="form-section">
          <h2>Academic Details</h2>
          <label>
            Current School / Institution*:
            <input type="text" v-model="form.school" required />
          </label>

          <label>
            Degree Program / Major*:
            <input type="text" v-model="form.major" required />
          </label>

          <label>
            Upload Transcripts (optional):
            <input type="file" @change="handleFileUpload('transcripts', $event)" />
          </label>

          <label>
            Upload Test Scores (optional):
            <input type="file" @change="handleFileUpload('testScores', $event)" />
          </label>
        </div>

        <!-- Recommendation & Essay -->
        <div class="form-section">
          <h2>Supporting Materials</h2>
          <label>
            Letter of Recommendation (from STEM educator or mentor)*:
            <input type="file" @change="handleFileUpload('recommendation', $event)" required />
          </label>

          <label>
            Personal Essay (500 words about your interest in STEM)*:
            <textarea v-model="form.essay" rows="8" maxlength="3000" required></textarea>
          </label>
        </div>
        <!-- Success Popup -->
        <div v-if="showPopup" class="popup-overlay">
            <div class="popup">
             <h2>✅ Application Submitted</h2>
    <p>Please check your email for confirmation.</p>
    <button @click="goHome">Go to Home</button>
  </div>
</div>

        <!-- Submit -->
        <div class="submit-section">
          <button type="submit">Submit Application</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StemScholarshipApplication',
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        phone: '',
        school: '',
        major: '',
        essay: '',
        transcripts: null,
        testScores: null,
        recommendation: null
      },
      showPopup: false
    };
  },
  methods: {
    handleFileUpload(field, event) {
      this.form[field] = event.target.files[0];
    },
    submitForm() {
      // Normally send to a server. Simulate success for now.
      console.log("Submitting application with data:", this.form);
      this.showPopup = true;
    },
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>
<style scoped>
.application-page {
  background: #eef4fa;
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: Arial, sans-serif;
}

.form-container {
  background: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  margin-bottom: 5px;
  color: #2c3e50;
}

.instructions {
  margin-bottom: 20px;
  font-size: 0.95rem;
  color: #555;
}

.form-section {
  margin-bottom: 30px;
}

label {
  display: block;
  margin-bottom: 15px;
  font-weight: bold;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
}

button {
  background-color: #0077cc;
  color: white;
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #005fa3;
}
.popup-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
}

.popup h2 {
  margin-bottom: 10px;
  color: #2c3e50;
}

.popup p {
  margin-bottom: 20px;
  font-size: 1rem;
  color: #333;
}

.popup button {
  background-color: #0077cc;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.popup button:hover {
  background-color: #005fa3;
}
</style>