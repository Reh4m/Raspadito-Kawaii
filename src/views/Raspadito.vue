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
            <v-col cols="2" v-for="(gift, index) in hiddenGifts" :key="index">
              <v-card
                flat
                class="transparent"
                :disabled="gift.isDisable"
                @click="onCardClicked(index)"
              >
                <v-img
                  :src="gift.isActive ? gift.content.image : defaultImage"
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
      catImage: {
        name: "Gatito",
        image:
          "https://images.vexels.com/media/users/3/202532/isolated/lists/e992441625624c289e9e3bcddae1e1db-ilustracion-de-gato-negro-sentado.png",
      },
      treeImage: {
        name: "Arbol",
        image:
          "https://i.pinimg.com/originals/23/fb/5b/23fb5b8f0e690a267b9b9dfa049e16c3.png",
      },
      hiddenGifts: [
        { content: {}, isActive: false, isDisable: false },
        { content: {}, isActive: false, isDisable: false },
        { content: {}, isActive: false, isDisable: false },
        { content: {}, isActive: false, isDisable: false },
      ],
      activeCards: 0,
    };
  },
  watch: {
    activeCards() {
      if (this.isLimitReached()) {
        this.disableLastCard();
      }
    },
  },
  methods: {
    assignRandomGifts() {
      const gifts = [];

      // Asignar 3 "Gatitos"
      for (let i = 0; i < 3; i++) {
        gifts.push(this.catImage);
      }

      // Asignar 1 "Arbol"
      gifts.push(this.treeImage);

      const randomNumbers = this.generateRandomNumbers();

      // Asignar los regalos aleatorios
      for (let i in randomNumbers) {
        this.hiddenGifts[i].content = gifts[randomNumbers[i]];
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
    // Método que se ejecuta cuando se hace click en una tarjeta
    onCardClicked(index) {
      if (this.hiddenGifts[index].isActive) {
        return;
      }

      this.hiddenGifts[index].isActive = true;

      this.activeCards++;
    },
    // Método que verifica si se han seleccionado 3 tarjetas
    isLimitReached() {
      return this.activeCards === 3;
    },
    // Método que deshabilita la última tarjeta
    disableLastCard() {
      for (let i in this.hiddenGifts) {
        if (!this.hiddenGifts[i].isActive) {
          this.hiddenGifts[i].isDisable = true;
        }
      }
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
