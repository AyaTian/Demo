<template>
    <el-row
    v-if="selectedProduct.size!==''&& selectedProduct.material!=='' && selectedProduct.printingMethod!=='' && selectedProduct.copies!==''"
    style="margin-top: 60px;">
    <el-col :span="8">  &nbsp</el-col>
    <el-col :span="16">
      <div class="card" >
        <div style="display:flex; justify-content:space-between">
          <p> {{selectedProduct.copies}} x {{selectedProduct.name}} {{selectedProduct.size}}  </p>
          <el-button type="primary" plain v-on:click="addItemToSelectedProduct(selectedProduct)">Add to cart</el-button>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
    methods: {
        addItemToSelectedProduct(selectedProduct) {
            this.$parent.addItemToSelectedProduct(selectedProduct)
        },
    },
  name: "SpecificationAddButtonRow",
  props:["selectedProduct"]
};
</script>