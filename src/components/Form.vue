<template>
  <div>
    <GCard title="Product Form">
      <GBox flex :mt="0" :mb="10" justify="space-between">
        <div class="g-size-full g-mr-12">
          <GInput v-model="formData.name" class="g-mb-20" label="Name" />
        </div>
        <div class="g-size-full">
          <GInputPrice v-model="formData.price" class="g-mb-20" label="Price" />
        </div>
      </GBox>
      <GBox flex :mt="0" :mb="10" justify="space-between">
        <div class="g-size-full g-mr-12">
          <GSelect
            v-model="formData.categories"
            class="g-mb-20 g-size-full"
            label="Categories"
            :options="categoryOptions"
            isCheckbox
            isSearch
          />
        </div>
        <div class="g-size-full">
          <GInput
            v-model="formData.stock"
            class="g-mb-20"
            type="number"
            label="Current Stock"
          />
        </div>
      </GBox>
      <GBox>
        <GButton @click="handleSubmit" :disabled="disableSubmit">
          Submit
        </GButton>
        <GButton variant="danger" @click="handleSubmit" outline>
          Reset
        </GButton>
      </GBox>
    </GCard>
  </div>
</template>
<script>
import GCard from '@trendyol-js/grace/core/GCard';
import GInput from '@trendyol-js/grace/core/GInput';
import GInputPrice from '@trendyol-js/grace/core/GInputPrice';
import GBox from '@trendyol-js/grace/core/GBox';
import GButton from '@trendyol-js/grace/core/GButton';
import GSelect from '@trendyol-js/grace/core/GSelect';

export default {
  name: 'Form',
  components: {
    GCard,
    GInput,
    GBox,
    GInputPrice,
    GSelect,
    GButton,
  },
  computed: {
    disableSubmit() {
      // eslint-disable-next-line max-len
      return (
        !this.formData.name ||
        !this.formData.price ||
        this.formData.categories.length === 0 ||
        this.formData.stock === ''
      );
    },
  },
  data() {
    return {
      formData: {
        name: '',
        price: '',
        categories: [],
        stock: '',
      },
      categoryOptions: [
        {
          value: 'Value1',
          text: 'Text Option 1 with i',
        },
        {
          value: 'Value2',
          text: 'Text Option 2 with i',
        },
        {
          value: 'Value3',
          text: 'Text Option 3 with i',
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('onSubmit', this.formData);
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        name: '',
        price: '',
        categories: [],
        stock: '',
      };
    },
  },
};
</script>
<style scoped></style>
