<template>
  <div class="bg-image">
    <div class="form-login">
      <img class="bg-logo" src="../../Icon/bg-logo.png" alt="1" />
      <p class="text-sales">SALES FORCE ID</p>
      <div class="form-lg">
        <p class="text-login">LOGIN</p>
        <div>
          <b-form>
            <b-form-input
              class="form-email mb-3"
              type="email"
              id="email"
              placeholder="email@mail.com"
            ></b-form-input>
            <b-form-input
              class="form-password mb-3"
              type="password"
              id="password"
              placeholder="password"
            ></b-form-input>
            <b-button type="submit" class="btn-login btn" block>SIGN IN</b-button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-image {
  background-image: url("../../Icon/bg-image.jpg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.form-login {
  height: 70%;
  width: 30%;
  background: rgba(1, 202, 185, 0.64);
  box-shadow: 0px 4px 15px rgba(1, 202, 185, 0.15);
  border-radius: 20px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  display: block;
  padding: 25px;
}
.bg-logo {
  height: 30%;
}
.text-sales {
  font-weight: bold;
  font-size: 20px;
  color: #ca0111;
}
.text-login {
  color: white;
  font-weight: bold;
  font-size: 25px;
}
.btn-login {
  background-color: #ca0111;
  font-weight: 700;
}
</style>