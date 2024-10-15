<script setup>
import { defineProps } from 'vue';
const props = defineProps({
	id: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	isSubscribed: {
		type: Boolean,
		default: false,
	},
	setIsSubscribed: {
		type: Function,
		required: true,
	},
});
</script>

<template>
	<div class="catalog__item">
		<div class="catalog__item-image">
			<img :src="props.imageUrl" alt="" />
		</div>
		<h3 class="catalog__item-title">{{ props.title }}</h3>
		<button
			@click="props.setIsSubscribed(props.id)"
			v-if="!props.isSubscribed"
			class="catalog__item-button"
		>
			Subscribe
		</button>
		<button
			@click="props.setIsSubscribed(props.id)"
			v-else
			class="catalog__item-button subscribed"
		>
			<img src="/icons/subscribed.svg" alt="" /> Subscribe
		</button>
	</div>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.catalog__item {
	width: 100%;
	max-width: 318px;
	height: 327px;
	padding: 24px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background-color: $white;
	gap: 16px;
	border-radius: 8px;
	@media (max-width: $tablet) {
		max-width: 90%;
		height: auto;
	}
	@media (max-width: $mobile) {
		max-width: 100%;
	}
	&-image {
		width: 100%;
	}
	&-title {
		font-size: 16px;
		color: $almost_black;
		font-weight: 400;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
		height: 40px;
	}
	&-button {
		padding: 0px 12px;
		height: 32px;
		background-color: $blue;
		border-radius: 16px;
		color: $white;
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;
		border: none;
		outline: none;
		cursor: pointer;
	}
	&-button.subscribed {
		background-color: $lighter_white;
		display: flex;
		align-items: center;
		color: $blue;
		gap: 8px;
		padding: 0px 12px 0px 0px;
	}
}
</style>
