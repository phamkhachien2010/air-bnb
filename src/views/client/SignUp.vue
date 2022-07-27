<template>
  <div
    class="
      mfp-wrap mfp-close-btn-in mfp-auto-cursor
      my-mfp-zoom-in
      mfp-ready
      login__div
    "
    tabindex="-1"
    style="top: 0px; position: absolute"
  >
    <div class="mfp-container mfp-inline-holder">
      <div class="mfp-content">
        <div id="sign-in-dialog" class="zoom-anim-dialog">
          <div class="small-dialog-header">
            <h3>Sign Up</h3>
          </div>

          <!--Tabs -->
          <div class="sign-in-form style-1">
            <div class="tabs-container alt">
              <!-- Register -->
              <div class="tab-content" id="tab2">
                <form class="register">
                  <p class="form-row-wide">
                    <label for="username2"
                      >Username:
                      <i class="im im-icon-Male"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="username"
                        id="username2"
                        value=""
                      />
                    </label>
                  </p>

                  <p class="form-row-wide">
                    <label for="email2"
                      >Email Address:
                      <i class="im im-icon-Mail"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="email"
                        id="email2"
                        value=""
                      />
                    </label>
                  </p>

                  <p class="form-row-wide">
                    <label for="password1"
                      >Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password1"
                        id="password1"
                      />
                    </label>
                  </p>

                  <p class="form-row-wide">
                    <label for="password2"
                      >Repeat Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password2"
                        id="password2"
                      />
                    </label>
                  </p>

                  <p class="form-row-wide">
                    <label for="phone"
                      >Phone number:
                      <i class="im im-icon-Mail"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="phone"
                        id="phone"
                      />
                    </label>
                  </p>

                  <p class="form-row-wide">
                    <label for="birthday"
                      >Date of birth:
                      <i class="im im-icon-Mail"></i>
                      <input
                        type="date"
                        class="input-text"
                        name="birthday"
                        id="birthday"
                      />
                    </label>
                  </p>

                  <p class="form-row-wide">
                    <label for="birthday"
                      >Gender:
                      <select>
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                    </label>
                  </p>

                  <input
                    type="submit"
                    class="button border fw margin-top-10"
                    name="register"
                    value="Register"
                  />
                </form>
              </div>
            </div>
          </div>
          <button title="Close (Esc)" type="button" class="mfp-close"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login__div {
  background-image: url("../../../public/images/login-background.jpg");
  background-position: center;
  background-size: 100%;
  overflow: scroll;
}
</style>