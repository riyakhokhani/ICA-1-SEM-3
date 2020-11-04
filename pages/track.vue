<template>
<v-app class="blue lighten-5">
  <v-container>
    
    <v-card
      elevation="13"
      color="white"
      
      class="mx-auto"
      height="700"
      max-width="1000"
      
    >
    <p id="card-title-text">
     Tracking details
    </p>
    <v-progress-linear value="100" color="grey"></v-progress-linear>
    <v-row>
      <v-col md="6" sm="6" cols="6">
        <!--Display order status -->
        <p><div id="order-status-text">Out For Delivery</div>
        <font color='black' style="margin-left:5mm; font-size:10pt;">Expected Delivery:</font><br><font color='green' style="margin-left:5mm;font-size:10pt;">Monday, September 8, by 8:00pm</font>
      </v-col>
      <v-col md="6" sm="6" cols="6">
        <p><div id="current-status-text">Your package is out for delivery and will arrive today. <font color='grey'>(Updated 0 mins ago)</font></div></p>
      </v-col>
    </v-row>
    <br>
    <br>
    <!--Current Status-->
    <v-row>
      <v-col md="12" sm="8" cols="12">
        
     <img src="status_bar.png" width='850' class="center">
      </v-col>
      </v-row>
    <br>
    <br>
    <br>
    <!--TRacking DEtails -->
    <!--scroll css class enables scrolling-->
      <v-card
        elevation="-1"
        color="#DCDCDC"
        class="mx-auto"
        height="50"
        max-width="1000"
        md='8'
        sm='8'
        cols='6'
        >
        <p><font id='tracking-details-text'>Tracking Details</font></p>
      <v-card
      elevation="13"
      color="white" 
      class="mx-auto scroll"
      height="300"
      max-width="1000"
      md='8'
      sm='8'
      cols='6'>
      
        
        <v-row>
          <v-col>
            <p id="tracking-details-tittle">Monday, September 8, 6:00 PM, Mumbai </p>
          </v-col>
            
          <v-col>
            <p id="tracking-details-timestamp">Out for delivery</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <p id="tracking-details-tittle">Monday, September 8, 4:30 PM, Mumbai </p>
          </v-col>
            
          <v-col>
            <p id="tracking-details-timestamp">Out for delivery</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <p id="tracking-details-tittle">Monday, September 8, 3:30 PM, Mumbai </p>
          </v-col>
            
          <v-col>
            <p id="tracking-details-timestamp">Package arrived at a carrier facility</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <p id="tracking-details-tittle">Monday, September 8, 2:35 PM, Delhi </p>
          </v-col>
            
          <v-col>
            <p id="tracking-details-timestamp">Package has left seller facility and is in transit to carrier </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <p id="tracking-details-tittle">Monday, September 8, 2:00 PM, Delhi  </p>
          </v-col>
            
          <v-col>
            <p id="tracking-details-timestamp">Order details shared with the courier </p>
          </v-col>
        </v-row>
        </v-card>
      </v-card>
    </v-card>
  </v-container>
</v-app>
</template>

<style scoped>

#card-title-text {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif';
  color: rgb(66,64,63);
  font-size:20pt;
  margin-left: 5mm;
  margin-top: 5mm;
}
#order-status-text {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif';
  color: rgb(0, 0, 0);
  font-size:15pt;
  margin-left: 5mm;
}
#current-status-text {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif';
  color: rgb(0,0,0);
  font-size:8pt;
}

#tracking-details-text {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif';
  color: rgb(0,0,0);
  font-size:20pt;
  margin-left: 15mm;
  margin-top: 5mm;
}

#tracking-details-tittle {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif';
  color: rgb(0, 0, 0);
  font-size:10pt;
  margin-left: 5mm;
}

#tracking-details-timestamp {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif';
  color: rgb(0, 0, 0);
  font-size:10pt;
}

.scroll {
      overflow-y: auto;
    }

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>

