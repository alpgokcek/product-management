<template>
  <div style="margin-top: 30px;">
    <GCard title="Products">
      <GDataTable :headers="headers" :items="tableData" :selectable="false">
        <template v-slot:productName="{ row }">
          <div>{{ row.name }}</div>
        </template>
        <template v-slot:price="{ row }">
          <div>{{ `${row.price} ₺` }}</div>
        </template>
        <template v-slot:categories="{ row }">
          <div v-for="(category, i) in row.categories" :key="i">
            {{ category }}
          </div>
        </template>
        <template v-slot:stock="{ row }">
          <GTag v-if="row.stock > 5" variant="success">
            {{ row.stock }}
          </GTag>
          <GTag v-else-if="row.stock > 0" variant="warning">
            {{ row.stock }}
          </GTag>
          <GTag v-else variant="error">
            Out of Stock
          </GTag>
        </template>
        <template v-slot:actions="{ rowIndex }">
          <div
            style="display: flex; justify-content: center; width: 100%;"
            @click="() => handleDelete(rowIndex)"
          >
            <GIcon
              name="trash-2"
              class="icon"
              size="15px"
              style="color: var(--orange-100)"
            />
          </div>
        </template>
        <template v-slot:not_found style="height: 100%;">
          <div
            style="display: flex; justify-content: center;
              align-items: center; height: 342.5px;"
          >
            No records found.
          </div>
        </template>
      </GDataTable>
    </GCard>
  </div>
</template>

<script>
import GCard from '@trendyol-js/grace/core/GCard';
import GTag from '@trendyol-js/grace/core/GTag';
import GDataTable from '@trendyol-js/grace/core/GDataTable';
import GIcon from '@trendyol-js/grace/core/GIcon';

export default {
  name: 'Table',
  components: {
    GCard,
    GDataTable,
    GTag,
    GIcon,
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    headers() {
      return [
        { text: 'Product Name', key: 'productName' },
        { text: 'Price', key: 'price' },
        { text: 'Categories', key: 'categories' },
        { text: 'Stock', key: 'stock' },
        { text: 'Actions', key: 'actions', width: '100px' },
      ];
    },
  },
  data() {
    return {};
  },
  methods: {
    handleDelete(idx) {
      this.$emit('onDelete', idx);
    },
  },
};
</script>

<style scoped></style>
