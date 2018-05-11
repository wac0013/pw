<template>
<div id="dashboard">
  <sui-sidebar animation="push" class="inverted vertical menu">
  </sui-sidebar>
  <sui-menu fixed="left" inverted vertical class="mobile tablet or lower hidden">
    <sui-menu-item icon=bars link position="left" onclick="$('.ui.sidebar').sidebar('show')"></sui-menu-item>
  </sui-menu>
  <sui-menu fixed="top" inverted pointing>
    <sui-menu-item icon=bars link position="left" onclick="$('.ui.sidebar').sidebar('show')" class="mobile only"></sui-menu-item>
    <sui-menu-menu position="right">
      <sui-menu-item right>
        <sui-input inverted icon="search" placeholder="Pesquisar..." />
      </sui-menu-item>
    </sui-menu-menu>
  </sui-menu>
</div>
</template>

<script>
  export default {
    methods: {
      abrirSideBar: function(){

      }
    }
  };
</script>

<style lang="scss">
@media only screen and (max-width: 767px) {
  [class*="mobile hidden"],
  [class*="tablet only"]:not(.mobile),
  [class*="computer only"]:not(.mobile),
  [class*="large screen only"]:not(.mobile),
  [class*="widescreen only"]:not(.mobile),
  [class*="or lower hidden"] {
    display: none !important;
  }
}

/* Tablet / iPad Portrait */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  [class*="mobile only"]:not(.tablet),
  [class*="tablet hidden"],
  [class*="computer only"]:not(.tablet),
  [class*="large screen only"]:not(.tablet),
  [class*="widescreen only"]:not(.tablet),
  [class*="or lower hidden"]:not(.mobile) {
    display: none !important;
  }
}

/* Computer / Desktop / iPad Landscape */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  [class*="mobile only"]:not(.computer),
  [class*="tablet only"]:not(.computer),
  [class*="computer hidden"],
  [class*="large screen only"]:not(.computer),
  [class*="widescreen only"]:not(.computer),
  [class*="or lower hidden"]:not(.tablet):not(.mobile) {
    display: none !important;
  }
}

/* Large Monitor */
@media only screen and (min-width: 1200px) and (max-width: 1919px) {
  [class*="mobile only"]:not([class*="large screen"]),
  [class*="tablet only"]:not([class*="large screen"]),
  [class*="computer only"]:not([class*="large screen"]),
  [class*="large screen hidden"],
  [class*="widescreen only"]:not([class*="large screen"]),
  [class*="or lower hidden"]:not(.computer):not(.tablet):not(.mobile) {
    display: none !important;
  }
}

/* Widescreen Monitor */
@media only screen and (min-width: 1920px) {
  [class*="mobile only"]:not([class*="widescreen"]),
  [class*="tablet only"]:not([class*="widescreen"]),
  [class*="computer only"]:not([class*="widescreen"]),
  [class*="large screen only"]:not([class*="widescreen"]),
  [class*="widescreen hidden"],
  [class*="widescreen or lower hidden"] {
    display: none !important;
  }
}
</style>
