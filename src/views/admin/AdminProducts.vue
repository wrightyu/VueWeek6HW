<template>
  後台產品列表
  <div class="container">
        <div class="text-end mt-4">
          <button class="btn btn-primary" @click="showModal('new')">建立新的產品</button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">分類</th>
              <th>產品名稱</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="100">是否啟用</th>
              <th width="120">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{item.category}}</td>
              <td>{{item.title}}</td>
              <td class="text-end">{{item.origin_price}}</td>
              <td class="text-end">{{item.price}}</td>
              <td>
                <span class="text-success" v-if="item.is_enabled">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm" @click="showModal('edit', item)">
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="showModal('del', item)">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination :pages="page"
        :get-product="getProducts"
        @change-page="getProducts"></pagination>
      </div>
  <!-- Modal -->
  <div
        id="productModal"
        ref="productModal"
        class="modal fade"
        tabindex="-1"
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <product-modal :temp-product="tempProduct"
        :update-product="updateProduct"
        :is-new="isNew"
        :create-images="createImages"></product-modal>
      </div>
      <div
        id="delProductModal"
        ref="delProductModal"
        class="modal fade"
        tabindex="-1"
        aria-labelledby="delProductModalLabel"
        aria-hidden="true"
      >

      <del-product-modal :del-product="delProduct"
      :temp-product="tempProduct"></del-product-modal>
      </div>
      <!-- Modal -->
</template>

<script>
import { Modal } from 'bootstrap'
import pagination from '../../components/PaginationProduct.vue'
import productModal from '../../components/ProductModal.vue'
import delProductModal from '../../components/DelProductModal.vue'
export default {
  data () {
    return {
      productModal: '',
      delProductModal: '',
      baseUrl: 'https://vue3-course-api.hexschool.io/v2',
      userPath: 'wrightyu',
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      isNew: false,
      page: {}
    }
  },
  methods: {
    checkAdmin () {
      this.$http.post(`${this.baseUrl}/api/user/check`)
        .then(res => {
          alert('successfully checked!')
          this.getProducts()
        })
        .catch(err => {
          alert(err.data.message)
          window.location = 'index.html'
        })
    },
    getProducts (page = 1) { // 預設為第一頁
      this.$http.get(`${this.baseUrl}/api/${this.userPath}/admin/products/?page=${page}`)
        .then(res => {
          this.products = res.data.products
          this.page = res.data.pagination
        })
        .catch(err => {
          alert(err.data.message)
        })
    },
    showModal (isNew, item) {
      if (isNew === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        this.productModal.show()
      } else if (isNew === 'edit') {
        this.tempProduct = JSON.parse(JSON.stringify(item))
        this.isNew = false
        this.productModal.show()
      } else if (isNew === 'del') {
        this.tempProduct = { ...item }
        this.delProductModal.show()
      }
    },
    createImages () {
      this.tempProduct.imagesUrl = []
      this.tempProduct.imagesUrl.push('')
    },
    updateProduct () {
      let url = `${this.baseUrl}/api/${this.userPath}/admin/product`
      let apiMethod = 'post'
      if (!this.isNew) {
        url = `${this.baseUrl}/api/${this.userPath}/admin/product/${this.tempProduct.id}`
        apiMethod = 'put'
      }
      this.$http[apiMethod](url, { data: this.tempProduct })
        .then(res => {
          alert(res.data.message)
          this.productModal.hide()
          this.getProducts()
        })
        .catch(err => {
          alert(err.data.message)
        })
    },
    delProduct () {
      this.$http.delete(`${this.baseUrl}/api/${this.userPath}/admin/product/${this.tempProduct.id}`)
        .then(res => {
          alert(res.data.message)
          this.delProductModal.hide()
          this.getProducts()
        })
        .catch(err => {
          alert(err.data.message)
        })
    }
  },
  components: {
    pagination,
    productModal,
    delProductModal
  },
  mounted () {
    this.$http.defaults.headers.common.Authorization = document.cookie.replace(/(?:(?:^|.*;\s*)wrightyuVueHW3Token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.checkAdmin()

    this.productModal = new Modal(document.getElementById('productModal'))

    this.delProductModal = new Modal(document.getElementById('delProductModal'))
  }
}
</script>
