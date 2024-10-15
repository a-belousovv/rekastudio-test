<script setup>
import { defineProps } from 'vue';
import { useCatalogStore } from '../stores/catalogStore';
const props = defineProps({});

const catalogStore = useCatalogStore();
</script>

<template>
	<header class="header">
		<div class="row">
			<h3 class="header__title">Ok, let’s change your preferences</h3>
			<button @click="catalogStore.setIsOpenModal()" class="header__button">
				Unsubscribe from all
			</button>
		</div>
		<p class="header__text">
			To unsubscribe, please uncheck the appropriate box(es).
		</p>
	</header>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.header {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	@media (max-width: $tablet) {
		align-items: center;
	}
	gap: 24px;
	.row {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media (max-width: $desktop_large) {
			flex-direction: column;
			align-items: flex-start;
			gap: 16px;
		}
		@media (max-width: $tablet) {
			align-items: center;
		}
	}
	&__title {
		font-size: 24px;
		font-weight: 400;
		line-height: 30px;
		@media (max-width: $tablet) {
			text-align: center;
		}
	}
	&__text {
		font-size: 16px;
		line-height: 24px;
		color: $darker_gray;
		@media (max-width: $tablet) {
			text-align: center;
		}
	}
	&__button {
		border: 1px solid $gray;
		outline: none;
		padding: 10px 16px;
		border-radius: 4px;
		color: $blue;
		font-weight: 500;
		cursor: pointer;
	}
}
</style>
