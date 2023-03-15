<template>
  <div class="row py-5 main-col d-flex justify-content-center align-content-center">
    <div class="col-11 col-sm-10 col-md-9 form-box">

      <form class="row d-flex justify-content-center" method="POST" action="https://formspree.io/f/xpzeljnj">
        <div class="col-11 col-sm-10 col-md-9 text-center">
          <div class="title text-center mt-5" style="position: relative">
            <router-link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
            </router-link>
            Get In Touch
          </div>

          <input required type="text" class="px-4 mt-5" placeholder="Your name" name="name">

          <input required type="email" class="px-4 mt-5" placeholder="Email" name="email">

          <textarea required placeholder="message" class="mt-5 p-4" name="message"></textarea>

          <button type="submit" class="px-5 my-5">
            Send
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.main-col {
  background: url("../assets/bg.jpeg") no-repeat center;
  background-size: cover;
  height: 100vh;
}

.form-box {
  background-color: rgba(72,72,72,0.9);
  border-radius: 10px;
}

.title {
  font-size: 2.5rem;
  color: #C0C0C0;
}

.bi-arrow-left {
  left: -20px;
  top: -11px;
  position: absolute;
  cursor: pointer;
}

.bi-arrow-right {
  margin-bottom: 3px;
}

input {
  width: 100%;
  height: 50px;
  background-color: rgb(226,226,226);
  border: none;
  border-radius: 20px;
  font-family: monospace;
  outline: none;
  font-size: 2rem;
}

textarea {
  outline: none;
  border: none;
  background-color: rgb(226,226,226);
  width: 100%;
  height: 150px;
  border-radius: 20px 20px 0 20px;
  font-family: monospace;
  font-size: 2rem;
}

button {
  height: 50px;
  color: white;
  font-size: 2rem;
  border-radius: 25px;
  border: none;
  background-color: rgb(94, 174, 69);
}

button:hover {
  background-color: rgb(123, 228, 85);
}
</style>
