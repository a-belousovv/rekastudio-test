<script setup>
import { defineProps, computed } from 'vue';
import { useCatalogStore } from '../stores/catalogStore';
const props = defineProps({});

const catalogStore = useCatalogStore();

const isOpenModal = computed(() => {
	return catalogStore.isOpenModal;
});

const percents = computed(() => {
	return catalogStore.subscribedPercents;
});

const handleSubmitButton = () => {
	catalogStore.setIsOpenModal();
	catalogStore.clearSubscribed();
};
</script>

<template>
	<div :class="`modal ${isOpenModal ? 'active' : ''}`">
		<div class="modal__shadow"></div>
		<div class="modal__content">
			<div class="modal__content-header">
				<p class="modal__text">Are you sure?</p>
				<div class="modal__close" @click="catalogStore.setIsOpenModal()">
					<img src="/icons/modal-close-icon.svg" alt="" />
				</div>
			</div>
			<h4 class="modal__subtitle">
				Please confirm that you want to unsubscribe from all and lose
				{{ percents }} % fun.
			</h4>
			<button class="modal__button" @click="handleSubmitButton()">
				Affirmative
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.modal {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 20;
	opacity: 0;
	pointer-events: none;
	transition: 0.4s ease;

	&.active {
		opacity: 1;
		pointer-events: all;
	}
	&__shadow {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(#0c1c604d, 0.3);
		z-index: 15;
	}
	&__content {
		width: 100%;
		max-width: 512px;
		padding: 24px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 24px;
		background-color: $white;
		border-radius: 8px;
		z-index: 20;
		@media (max-width: $tablet) {
			max-width: 90%;
			padding: 16px;
		}
	}
	&__content-header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__text {
		font-size: 16px;
		font-weight: 500;
		color: $dark_blue;
		@media (max-width: $tablet) {
			font-size: 14px;
		}
	}
	&__subtitle {
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		color: $darker_gray;
		@media (max-width: $tablet) {
			font-size: 12px;
		}
	}
	&__close {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: $white;
		border-radius: 50%;
		cursor: pointer;
		@media (max-width: $tablet) {
			width: 16px;
			height: 16px;
		}
		&:hover {
			cursor: pointer;
		}
	}
	&__button {
		margin-left: auto;
		background-color: $blue;
		border-radius: 4px;
		padding: 10px 16px;
		color: $white;
		border: none;
		outline: none;
		font-weight: 500;
		font-size: 16px;
		cursor: pointer;
	}
}
</style>
