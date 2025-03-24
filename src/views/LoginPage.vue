<!-- <template>
    <div><h1> login</h1></div>
</template> -->

<template>
  <v-main>
    <v-row justify="center" align="center" class="login-container">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="pa-4 elevation-6">
          <v-card-title class="text-center text-h4 teal--text text--darken-2 pt-4 pb-2">
            Welcome Back
          </v-card-title>
          <v-card-subtitle class="text-center pb-4">
            Login in to your  account
          </v-card-subtitle>

          <v-card-text>
            <v-form ref="loginForm" v-model="valid" lazy-validation @submit.prevent="handleLogin">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                prepend-inner-icon="mdi-email"
                required
                variant="outlined"
                class="mb-4"
              ></v-text-field>

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
                required
                variant="outlined"
                class="mb-2"
              ></v-text-field>

              <!-- Display error message if any -->
              <v-alert
                v-if="errorMessage"
                type="error"
                class="mb-4"
                density="compact"
                variant="tonal"
              >
                {{ errorMessage }}
              </v-alert>

              <div class="d-flex justify-space-between mb-6">
                <v-checkbox
                  v-model="rememberMe"
                  label="Remember me"
                  color="teal darken-1"
                  hide-details
                ></v-checkbox>
                <v-btn
                  variant="text"
                  color="teal darken-1"
                  class="text-caption"
                  to="/forgot-password"
                >
                  Forgot Password?
                </v-btn>
              </div>

              <v-btn
                type="submit"
                block
                size="large"
                color="teal darken-1"
                :disabled="!valid || loading"
                :loading="loading"
                class="white--text"
              >
                LogIn
              </v-btn>

              <div class="mt-6 text-center">
                <span class="text-body-2">Don't have an account? </span>
                <v-btn variant="text" color="teal darken-1" to="/signuppage" class="text-none px-1">
                  Sign Up
                </v-btn>
              </div>
            </v-form>
          </v-card-text>

          <v-divider class="my-3"></v-divider>

          <v-card-text class="text-center">
            <p class="text-caption text-medium-emphasis mb-2">Or continue with</p>
            <v-row justify="center" class="px-4">
              <v-col cols="auto">
                <v-btn icon color="blue darken-3">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn icon color="red darken-1">
                  <v-icon>mdi-google</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn icon color="black">
                  <v-icon>mdi-apple</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/stores/services/auth.service'

const router = useRouter()
const { login, loading, error } = useAuth()

// const { loading, error, jsonRequest } = useApi()

// Form state
const valid = ref(false)
const loginForm = ref(null)
const email = ref('')
const password = ref('')

// Validation rules
const emailRules = [
  (v) => !!v || 'Email is required',
  (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
]

const passwordRules = [
  (v) => !!v || 'Password is required',
  (v) => v.length >= 6 || 'Password must be at least 6 characters',
]

// Form submission handler
// const handleLogin = async () => {
async function handleLogin() {
  // if (!loginForm.value.validate()) return

  try {
    await login({
      email: email.value,
      password: password.value,
    })
    // Redirect to dashboard or home page
    router.push('/welcome')
  } catch (err) {
    console.error('Login error:', err)
  }
}
</script>

<style scoped>
.login-container {
  background-image: url('../public/Farm2.jpg');
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
}
</style>
