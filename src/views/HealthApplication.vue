<template>
  <div class="application-page">
    <div class="form-box">
      <h1>🩺 Apply for the Healthcare Heroes Scholarship</h1>
      <form @submit.prevent="submitApplication">
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" v-model="form.fullName" required />
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>

        <div class="form-group">
          <label for="transcripts">Upload Academic Transcripts</label>
          <input type="file" id="transcripts" @change="handleFileUpload('transcripts', $event)" />
        </div>

        <div class="form-group">
          <label for="recommendation">Upload Recommendation Letter</label>
          <input type="file" id="recommendation" @change="handleFileUpload('recommendation', $event)" />
        </div>

        <div class="form-group">
          <label for="essay">500-Word Essay: “Why I Want to Work in Healthcare”</label>
          <textarea id="essay" v-model="form.essay" rows="8" required></textarea>
        </div>

        <div class="submit-button">
          <button type="submit">Submit Application</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HealthcareApplication',
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        transcripts: null,
        recommendation: null,
        essay: ''
      }
    };
  },
  methods: {
    handleFileUpload(field, event) {
      this.form[field] = event.target.files[0];
    },
    submitApplication() {
      console.log('Application submitted:', this.form);
      alert('Your Healthcare Heroes Scholarship application has been submitted!');
    }
  }
};
</script>

<style scoped>
.application-page {
  background-color: #f2f9f7;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.form-box {
  background: white;
  padding: 40px;
  border-radius: 12px;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 24px;
  color: #2c3e50;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

input[type="text"],
input[type="email"],
input[type="file"],
textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
}

.submit-button {
  text-align: center;
  margin-top: 30px;
}

button {
  padding: 12px 24px;
  background-color: #218c74;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #176857;
}
</style>
