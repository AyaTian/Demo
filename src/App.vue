<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <!-- Side BAR -->
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-menu-item></el-menu-item>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>Products</template>
          <el-menu-item-group>
            <el-menu-item index="1-1" ><router-link to="/products/flyers"> Flyers </router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/products/posters" >Posters</router-link></el-menu-item>
            <el-menu-item index="1-3"><router-link to="/products/businessCards">Business Cards</router-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2"><router-link to="/products/cart" style="color:#303133;"><i class="el-icon-shopping-bag-1"></i>Order</router-link></el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 18px ;padding:0 40px" >
        <router-link to="/products/cart">
        <i class="el-icon-shopping-cart-full" style="margin-right: 15px; color: white;"></i>
        <span style="color: white">{{order.length}}</span>
      </router-link>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    computed: {
      order () {
        return this.$store.state.order

      }
    }
  }
</script>

<style>
  .el-header {
    background-color: #2a79a9;
    color: rgb(51, 51, 51);
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  a:link {
  text-decoration: none;
  color:#565d60
  }

  a {
    display: block;
    width:100%;
    color:darkgrey
  }

  .el-radio__label {
    font-size: 14px;
    padding-left: 10px;
    white-space: normal;
  }

  .card {
  max-height:500px;
  margin-top: 20px;
  overflow-y: scroll;
  border:1px solid #DCDFE6;
  padding:20px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2)
  }

  .radio_button {
    margin-bottom: 10px;
    border:1px solid #DCDFE6;
    padding:10px;
    width:90%
  }

</style>