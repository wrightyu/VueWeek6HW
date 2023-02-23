<template>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${item.id}`"
                v-model="item.is_paid"
                @change="updatePaid(item)"
              />
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="openModal(item)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openDelOrderModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal
    :order="tempOrder"
    ref="orderModal"
    @update-paid="updatePaid"
  ></OrderModal>
  <DelOrderModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelOrderModal>
  <Pagination :pages="pagination" @emitPages="getOrders"></Pagination>
</template>

<script>
import Pagination from '../../components/PaginationOrder.vue'
import DelOrderModal from '../../components/DelOrderModal.vue'
import OrderModal from '../../components/OrderModal.vue'
export default {
  data () {
    return {
      orders: {},
      isNew: false,
      pagination: {},
      tempOrder: {},
      currentPage: 1
    }
  },
  components: {
    Pagination,
    DelOrderModal,
    OrderModal
  },
  methods: {
    getOrders (currentPage = 1) {
      this.currentPage = currentPage
      const url = `${import.meta.env.VITE_APP_URL}/v2/api/${import.meta.env.VITE_APP_PATH}/admin/orders?page=${currentPage}`
      this.$http.get(url, this.tempProduct).then((res) => {
        this.orders = res.data.orders
        this.pagination = res.data.pagination
      }).catch((err) => {
        console.log(err)
      })
    },
    openModal (item) {
      this.tempOrder = { ...item }
      this.isNew = false
      const orderComponent = this.$refs.orderModal
      orderComponent.openModal()
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.openModal()
    },
    updatePaid (item) {
      const api = `${import.meta.env.VITE_APP_URL}/v2/api/${import.meta.env.VITE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(api, { data: paid }).then((res) => {
        const orderComponent = this.$refs.orderModal
        orderComponent.hideModal()
        this.getOrders(this.currentPage)
      }).catch((err) => {
        console.log(err)
      })
    },
    delOrder () {
      const url = `${import.meta.env.VITE_APP_URL}/v2/api/${import.meta.env.VITE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(url).then(() => {
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getOrders(this.currentPage)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
