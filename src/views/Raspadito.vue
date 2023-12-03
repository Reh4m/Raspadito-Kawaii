<template>
  <v-container class="center-container">
    <v-row align="center" justify="center">
      <v-col cols="8">
        <!-- Mensaje de bienvenida al usuario -->
        <v-container>
          <v-card flat class="transparent">
            <v-card-text class="text-center">
              <span class="title-message display-3 font-weight-regular">
                ¡{{ userName }}, selecciona 3 regalos!
              </span>
            </v-card-text>
            <v-card-text class="text-center">
              <span class="instructions-message display-1">
                Debes encontrar 3 gatitos para obtener tu cupón de descuento.
              </span>
            </v-card-text>
          </v-card>
        </v-container>
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="2" v-for="(award, index) in awardsList" :key="index">
              <v-card flat class="transparent" @click="setCardActive(index)">
                <v-img
                  :src="
                    awardsList[index].isActive
                      ? awardsList[index].award.image
                      : defaultImage
                  "
                  class="mx-auto"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Raspadito",
  created() {
    this.assignRandomGifts();
  },
  data() {
    return {
      userName: this.$route.params.userName,
      defaultImage: "https://pngimg.com/uploads/gift/gift_PNG5984.png",
      catGift: {
        name: "Gatito",
        image:
          "https://images.vexels.com/media/users/3/202532/isolated/lists/e992441625624c289e9e3bcddae1e1db-ilustracion-de-gato-negro-sentado.png",
      },
      threeGift: {
        name: "Arbol",
        image:
          "https://i.pinimg.com/originals/23/fb/5b/23fb5b8f0e690a267b9b9dfa049e16c3.png",
      },
      awardsList: [
        { award: {}, isActive: false },
        { award: {}, isActive: false },
        { award: {}, isActive: false },
        { award: {}, isActive: false },
      ],
    };
  },
  methods: {
    assignRandomGifts() {
      const gifts = [];

      // Asignar 3 "Gatitos"
      for (let i = 0; i < 3; i++) {
        gifts.push(this.catGift);
      }

      // Asignar 1 "Arbol"
      gifts.push(this.threeGift);

      const randomNumbers = this.generateRandomNumbers();

      // Asignar los regalos aleatoriamente
      for (let i in randomNumbers) {
        this.awardsList[i].award = gifts[randomNumbers[i]];
      }
    },
    generateRandomNumbers() {
      const numbers = [];

      while (numbers.length < 4) {
        const randomNumber = Math.floor(Math.random() * 4);

        if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
        }
      }

      return numbers;
    },
    setCardActive(award) {
      this.awardsList[award].isActive = true;
    },
  },
};
</script>

<style lang="css" scoped>
.center-container {
  background-image: url("../assets/raspadito.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.title-message {
  /* Color rojo navide;o */
  color: #b71c1c !important;
}

.instructions-message {
  color: #212121 !important;
}
</style>
