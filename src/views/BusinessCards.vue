
<template>
  <div>
    <div>
      <el-row :gutter="12">
        <!-- Size Copy -->
        <el-col :md="7">
          <div class="card">
            <p>Size</p>
            <el-radio-group v-model="selectedProduct.size">
              <el-radio v-for="option in sizeOptions" :label=option.name class="radio_button">{{option.name?option.name:"custom"}}</el-radio>
            </el-radio-group>
          </div>
        </el-col>


        <!-- MATERIAL -->
        <el-col :md="7">
            <div class="card">
              <p>Material</p>
              <el-radio-group v-model="selectedProduct.material">
                <el-radio v-for="option in materialOptions" :label=option.name class="radio_button">{{option.name}}</el-radio>
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
  import businessCards from "../assets/data/businesscards.json"
  import SpecificationAddButtonRow from "../components/SpecificationAddButtonRow.vue"

  export default {
    name:"businessCards",
    components: {SpecificationAddButtonRow },
    data() {
      return {
        sizeOptions: businessCards.properties[1].options,
        printTypeOptions: businessCards.properties[2].options,
        materialOptions: businessCards.properties[4].options,
        finishOptions:businessCards.properties[5].options,
        copiesOptions: businessCards.properties[8].options,
        printingMethodOptions: businessCards.properties[20].options,
        selectedProduct:{
          "size":"",
          "printType":"",
          "material":"",
          "finish":"",
          "copies":"",
          "pringtingMethod":"",
          "name":businessCards["titlePlural"]
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
            "name":businessCards["titlePlural"]
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

<style scoped >
.el-radio {
display: block;
}
</style>