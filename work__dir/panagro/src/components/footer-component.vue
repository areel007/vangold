<template>
  <footer>
    <div class="container">
      <div class="footer__inner">
        <div class="footer__logo">
          <img src="../assets/jb-farms-logo.png" alt="footer logo">
        </div>
        <div class="contact-us">
          <p class="contact-us__title">Contact Us</p>
          <div class="contact-us__subtitle">
            <p style="margin-bottom: 10px"> 8, Okuwa Avenue <br>  off Okun Owa Road, Odogbolu, <br> Ogun State</p>
            <p style="margin-bottom: 10px"><b style="color: #A8CF45">E:</b> info@jbfarms.com </p>
            <p><b style="color: #A8CF45">T:</b>+234 815 590 1666</p>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; 2021 JBFarms</p>
        </div>
      </div>
    </div>
    <p style="text-align: center; margin-top: 10px; font-size: 16px; color: var(--white); font-weight: 200">Powered by <b style="color: #A8CF45">Ahead By Design</b></p>
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
  background-color: var(--primary);
  position: relative;
  top: 100px;
}
.footer__inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-bottom: 40px;
}
.footer__logo {
  width: 100px;
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
  color: var(--white);
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