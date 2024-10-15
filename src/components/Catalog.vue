<script setup>
import { defineProps } from 'vue';
import CatalogItem from './CatalogItem.vue';
import { useCatalogStore } from '../stores/catalogStore';

const props = defineProps({});

const catalogStore = useCatalogStore();

const catalog = catalogStore.catalog;
</script>

<template>
	<section class="catalog">
		<catalog-item
			v-for="item in catalog"
			:key="item.id"
			:id="item.id"
			:title="item.title"
			:imageUrl="item.imageUrl"
			:isSubscribed="item.isSubscribed"
			:setIsSubscribed="catalogStore.setIsSubscribed"
		/>
	</section>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.catalog {
	width: 100%;
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 24px;
	@media (max-width: $tablet) {
		flex-direction: column;
		align-items: center;
	}
}
</style>
