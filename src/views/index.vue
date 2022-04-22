<template>
  <div>
    <Form
      @onSubmit="onSubmit"
      />
    <Table
      :table-data="tableData"
      @onDelete="onDelete"
      />
  </div>
</template>

<script>
import Form from '@/components/Form';
import Table from '@/components/Table';

export default {
  name: 'Dashboard',
  components: {
    Form,
    Table,
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    onSubmit(item) {
      this.tableData.push({
        ...item,
        index: this.tableData.length,
      });
    },
    onDelete(idx) {
      this.tableData.splice(idx, 1);
    },
  },
};
</script>

<style scoped>

</style>
