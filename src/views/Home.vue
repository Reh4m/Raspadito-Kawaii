<template lang="html">
  <v-container fluid class="center-container">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card flat class="text-center">
          <v-card-text>
            <span class="display-1 brown--text">
                ¡INGRESA TU NOMBRE!
            </span>
          </v-card-text>

          <v-card-text>
            <v-form
              v-model="isFormValid"
              lazy-validation
              ref="form"
              @submit.prevent="goToNextPage"
            >
              <!-- Nombre del cliente -->
              <v-text-field
                filled
                label="Escribe aquí tu nombre"
                required
                v-model="userName"
                :rules="userNameRules"
              ></v-text-field>

              <!-- Ir a la siguiente página -->
              <v-btn
                x-large
                depressed
                color="primary"
                @click="goToNextPage"
                :disabled="!isFormValid"
              >
                INICIAR
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    isFormValid: true,
    userName: "",
    userNameRules: [(userName) => !!userName || "Username is required"],
  }),
  methods: {
    goToNextPage() {
      if (this.$refs.form.validate()) {
        this.$router.push({
          name: "Raspadito",
          params: { userName: this.userName },
        });
      }
    },
  },
};
</script>

<style lang="css" scoped>
.center-container {
  background-image: url("../assets/home.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
