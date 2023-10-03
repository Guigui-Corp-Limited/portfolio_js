<script setup>
import Nav from './components/nav.vue'
import Footer from './components/Footer.vue'
import PrimaryButton from './components/PrimaryButton.vue'
import Layout from './components/Layout.vue'
</script>


<template>
 <Layout>
    <template v-slot:title>
      <h1 class="mt-5">Sticky footer with fixed navbar</h1>
    </template>

    <template v-slot:content>
      <p class="lead">
        Pin a footer to the bottom of the viewport in desktop browsers with this
        custom HTML and CSS. A fixed navbar has been added with
        <code class="small">padding-top: 60px;</code> on the
        <code class="small">main &gt; .container</code>.
      </p>
      <p>
        Back to
        <a href="/docs/5.3/examples/sticky-footer/"
          >the default sticky footer</a
        >
        minus the navbar.
      </p>
    </template>
  </Layout>
  <div class="d-flex flex-column h-100">
    <header>
      <!-- Fixed navbar -->
      <Nav />
    </header>

    <!-- Begin page content -->
    <main class="flex-shrink-0 py-5">
      <div class="container">
        <h1 class="mt-5">Sticky footer with fixed navbar</h1>
        <p class="lead">
          Pin a footer to the bottom of the viewport in desktop browsers with
          this custom HTML and CSS. A fixed navbar has been added with
          <code class="small">padding-top: 60px;</code> on the
          <code class="small">main &gt; .container</code>.
        </p>
        <p>
          Back to
          <a href="/docs/5.3/examples/sticky-footer/"
            >the default sticky footer</a
          >
          minus the navbar.
        </p>
        
      </div>
      <div>
    <PrimaryButton>
      Cliquez ici <!-- slot -->
    </PrimaryButton>
  </div>
      
    </main>

    <Footer />
  </div>
</template>

<style>
#app {
  height: 100vh;
}
</style>

