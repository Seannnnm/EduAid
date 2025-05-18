<template>
  <div class="application-page">
    <div class="form-box">
      <h1>Apply for the Study Abroad Scholarship</h1>
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
          <label for="records">Upload Academic Records</label>
          <input type="file" id="records" @change="handleFileUpload('records', $event)" />
        </div>

        <div class="form-group">
          <label for="admissionProof">Upload Proof of Admission</label>
          <input type="file" id="admissionProof" @change="handleFileUpload('admissionProof', $event)" />
        </div>

        <div class="form-group">
          <label for="personalStatement">Personal Statement: Goals for Studying Abroad</label>
          <textarea id="personalStatement" v-model="form.personalStatement" rows="6" required></textarea>
        </div>

        <div class="form-group">
          <label for="recommendation">Upload Letter of Recommendation</label>
          <input type="file" id="recommendation" @change="handleFileUpload('recommendation', $event)" />
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
  name: 'StudyAbroadApplication',
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        records: null,
        admissionProof: null,
        personalStatement: '',
        recommendation: null
      }
    };
  },
  methods: {
    handleFileUpload(field, event) {
      this.form[field] = event.target.files[0];
    },
    submitApplication() {
      console.log('Study Abroad application submitted:', this.form);
      alert('Your Study Abroad Scholarship application has been submitted!');
    }
  }
};
</script>

<style scoped>
.application-page {
  background-color: #e6f2ff;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: #1a3c6b;
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
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #155ab6;
}
</style>
