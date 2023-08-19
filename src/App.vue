<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ImageViewer from './components/ImageViewer.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit, nibh eleifend interdum volutpat, nisi justo accumsan nunc, non pharetra ligula risus ac ligula. Donec lacinia, quam id faucibus interdum, magna purus bibendum nisi, eget aliquet erat est hendrerit odio. Pellentesque id sapien in eros condimentum ornare. Nunc semper feugiat auctor. Aenean quis suscipit risus, eu auctor sem. Nam sed imperdiet mauris. Aliquam finibus libero in ullamcorper elementum. Aliquam imperdiet nulla at egestas sagittis. Aenean vehicula commodo maximus.

          Nunc ac sem ligula. Curabitur lacus turpis, viverra a elit vitae, lacinia iaculis mi. Morbi tristique odio nec tempus efficitur. Ut in enim tempor, scelerisque quam vel, sodales augue. Fusce maximus consequat dui id ultrices. Donec magna sem, mattis eu feugiat ut, varius at erat. Pellentesque bibendum libero vitae consequat tincidunt. Integer interdum ut lacus id iaculis. Vestibulum sit amet est eget leo congue finibus at eget velit. Suspendisse a sapien orci. Duis sodales scelerisque ullamcorper. Duis nibh diam, pretium in gravida id, cursus vel eros. Nulla at est nec arcu commodo mollis scelerisque eget sapien. Duis iaculis lacinia diam non vestibulum. Sed dui felis, scelerisque vel maximus vel, consectetur vitae sapien. Cras nisi odio, lacinia eu elementum non, lobortis eu sem.

          Cras luctus, dui quis finibus convallis, massa turpis vulputate purus, a tempor purus est a mauris. Cras ultrices ligula vitae ante placerat congue. Nulla vitae vulputate felis. Donec quis justo convallis, pharetra urna ac, interdum magna. Donec suscipit efficitur enim sit amet pellentesque. Cras cursus venenatis suscipit. Fusce in mauris justo.

          Suspendisse sollicitudin porta malesuada. Nunc tristique placerat nibh, et congue ligula. Vestibulum massa massa, porta quis velit ac, tincidunt lobortis ex. Donec eget purus nunc. Mauris finibus sed enim a malesuada. Aliquam eget volutpat ante. Aenean et sodales nunc. Cras dignissim risus et rutrum auctor. Phasellus ultrices, elit eget tincidunt imperdiet, mi odio rhoncus nibh, et ultrices orci sapien non nisi. Integer elementum ipsum tortor, ut aliquam metus efficitur id. Donec a nisl maximus, porttitor orci ut, laoreet massa. Quisque quis nunc risus. Maecenas vehicula, enim ac hendrerit tincidunt, urna leo molestie ligula, eu convallis neque purus quis ex. Fusce elit metus, pulvinar vitae condimentum vel, condimentum quis diam. Pellentesque fringilla augue massa, quis feugiat risus blandit ut.

          Nam maximus nisi sit amet massa vestibulum ultrices. Sed in quam sem. Suspendisse ornare volutpat urna. In leo velit, lacinia at orci at, fringilla consequat orci. Vivamus varius arcu sit amet ligula egestas, sit amet volutpat nisl dapibus. Vestibulum ac magna in tortor facilisis egestas. Nunc mattis mauris vel turpis mollis, sed feugiat neque consectetur. Mauris orci est, tincidunt non rutrum non, ultricies ac libero. Vestibulum nec accumsan dolor. Nulla posuere sapien odio, id sagittis nisi sodales a. Curabitur at dui malesuada, dapibus ante eget, fermentum sem. Suspendisse a tincidunt est, dignissim elementum massa. Aenean dictum tortor nec magna viverra, a vulputate sem vehicula.
      </p>


      <ImageViewer />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
