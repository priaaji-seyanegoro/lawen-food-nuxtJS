<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand class="text-dark">
          <b>Linov Resto</b>
        </b-navbar-brand>

        <template>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <li class="nav-item">
                <NuxtLink class="nav-link text-dark" to="/">Home</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link text-dark" to="/foods"
                  >Foods</NuxtLink
                >
              </li>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <li class="nav-item">
                <NuxtLink class="nav-link text-dark" to="/cart">
                  Keranjang
                  <b-icon-bag />
                  <span class="badge badge-success ml-2">0</span>
                </NuxtLink>
              </li>
              <!-- <li class="nav-item">
              <b-button variant="outline-success" size="md">
                <b-icon icon="power" aria-hidden="true"></b-icon> Logout
              </b-button>
            </li> -->
            </b-navbar-nav>
          </b-collapse>
        </template>
      </div>
    </b-navbar>
  </div>
</template>

<script>
</script>

<style>
</style>
