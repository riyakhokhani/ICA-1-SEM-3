<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color="white" dark fixed app>
      <v-toolbar-title></v-toolbar-title>
       <!-- Component Example -->
      <arrow/>
      <!--Logo-->
      <shopclueslogo/>
    </v-app-bar>

    <!-- Body -->
    <v-content light>
       <!--Copy Shipping-->
     <shipping/>
    </v-content>
  
   

  </v-app>
</template>

<script>
export default {}
</script>

<style> 
  .white--text {
    border: 1px solid;
  }

   #inspire {
    background-color: white;
  }
</style>