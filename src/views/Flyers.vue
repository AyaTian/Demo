<template>
  <div>
    <div>
      <el-row :gutter="12">
        <!-- Size Copy -->
        <el-col :md="7">
          <div class="card">
            <p>Size</p>
            <el-radio-group v-model="selectedProduct.size">
              <el-radio v-for="option in sizeOptions"  :label=option.name  class="radio_button">{{option.name?option.name:"custom"}}</el-radio>
            </el-radio-group>
          </div>
        </el-col>


        <!-- MATERIAL -->
        <el-col :md="7">
          <div class="card">
            <p>Material</p>
            <el-radio-group v-model="selectedProduct.material">
              <el-radio v-for="option in materialOptions" :label=option.name  class="radio_button">{{option.name}}</el-radio>
            </el-radio-group>
          </div>
        </el-col>

        <!-- Printing method -->
        <el-col :md="5">
          <div class="card">
            <p>Printing Method</p>
            <el-radio-group v-model="selectedProduct.printingMethod">
              <el-radio v-for="option in printingMethodOptions" :label=option.slug class="radio_button">{{option.description}}</el-radio>
            </el-radio-group>
          </div>
        </el-col>

        <!-- Copies -->
        <el-col :md="5">
          <div class="card">
              <p>Copies</p>
              <el-radio-group v-model=" selectedProduct.copies">
                <el-radio v-for="option in copiesOptions" :label=option.slug class="radio_button">{{option.name}}</el-radio>
              </el-radio-group>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- Add to cart -->
    <SpecificationAddButtonRow v-bind:selectedProduct="selectedProduct"/>
  </div>
</template>

<script>
  import flyers from "../assets/data/flyers.json"
  import SpecificationAddButtonRow from "../components/SpecificationAddButtonRow.vue"

  export default {
    name:"Flyers",
    components: {SpecificationAddButtonRow },
    data() {
      return {
        sizeOptions: flyers.properties[0].options,
        printTypeOptions: flyers.properties[1].options,
        materialOptions: flyers.properties[2].options,
        finishOptions:flyers.properties[3].options,
        copiesOptions: flyers.properties[5].options,
        printingMethodOptions: flyers.properties[18].options,
        selectedProduct:{
          "size":"",
          "printType":"",
          "material":"",
          "finish":"",
          "copies":"",
          "pringtingMethod":"",
          "name":flyers["titlePlural"]
        },
        order:this.$store.state.order,
      }
    },
    methods: {
      addItemToSelectedProduct(selectedProduct) {
        if(selectedProduct.size!=="" && selectedProduct.printingMethod!=="" && selectedProduct.material!=="" && selectedProduct.copies!==""){
          this.$store.commit("addItem",selectedProduct)
        } else {
          this.$alert('Please select all inforamtion', '', {
          confirmButtonText: 'OK',
        });
        }

        this.selectedProduct={
            "size":"",
            "printType":"",
            "material":"",
            "finish":"",
            "copies":"",
            "pringtingMethod":"",
            "name":flyers["titlePlural"]
          }
      },
      deleteItem (index){
          this.$store.commit('deleteItem',index)
      },
      activateReadMore(){
        this.showMoreActivated = true;
      },
    },
  }
</script>

<style scoped lang="scss">
.el-radio {
display: block;
}
</style>