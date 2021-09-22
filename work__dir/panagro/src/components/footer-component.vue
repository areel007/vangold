<template>
  <footer>
    <div class="container">
      <div class="footer__inner">
        <div class="footer__logo">
          <img src="../assets/logo-1.png" alt="footer logo">
        </div>
        <div class="contact-us">
          <p class="contact-us__title">Contact Us</p>
          <div class="contact-us__subtitle">
            <p><b style="color: #A8CF45">E:</b> enquiries@panagro.ng</p>
            <p><b style="color: #A8CF45">T:</b> +234 908 799 1341</p>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; 2021 Panagro</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-component"
}
</script>

<style scoped>
footer {
  padding: 40px 0;
  background-color: #2a2a2a;
}
.footer__inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.footer__logo {
  width: 150px;
}
.footer__logo img {
  width: 150px;
}
.contact-us {
  justify-self: center;
  text-align: center;
}
.contact-us__title {
  font-size: 20px;
  font-weight: bold;
  color: whitesmoke;
  margin-bottom: 10px;
}
.contact-us__subtitle p {
  color: whitesmoke;
  font-size: 14px;
}
.copyright {
  justify-self: right;
}
.copyright p {
  color: var(--primary);
}

@media screen and (max-width: 650px) {
  .footer__inner {
    grid-template-columns: 100%;
    grid-row-gap: 30px;
  }
  .footer__logo {
    width: 100%;
    grid-column: 1/-1;
    display: flex;
  }
  .footer__logo img {
    margin: auto;
  }
  .contact-us__title {
    margin-bottom: 5px;
  }
  .copyright {
    justify-self: center;
  }
}


</style>