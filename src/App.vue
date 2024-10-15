<script setup>
import SideBar from './components/SideBar.vue';
import Header from './components/Header.vue';
import Catalog from './components/Catalog.vue';
import Modal from './components/Modal.vue';
import { computed } from 'vue';
import { useCatalogStore } from './stores/catalogStore';
import { defineProps } from 'vue';
const props = defineProps({});

const catalogStore = useCatalogStore();

const isBlur = computed(() => {
	return catalogStore.isOpenModal;
});
</script>

<template>
	<modal />
	<main :class="`main ${isBlur ? 'blur' : ''}`">
		<side-bar />
		<section class="content">
			<Header />
			<catalog />
		</section>
	</main>
</template>

<style lang="scss" scoped>
@import './styles/variables.scss';

.main {
	width: 100%;
	height: 100%;
	min-height: 1080px;
	display: flex;
	align-items: flex-start;
	@media (max-width: $tablet) {
		flex-direction: column;
	}
	&.blur {
		filter: blur(10px);
	}
}

.content {
	width: 100%;
	height: 100%;
	max-width: 1600px;
	padding: 128px 128px 172px 128px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 24px;
	background-color: #f1f1f1;
	@media (max-width: $desktop_large) {
		padding: 48px 48px 96px 48px;
	}
}
</style>
