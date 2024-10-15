<script setup>
import { computed, defineProps, watch, ref, onMounted } from 'vue';
import { useCatalogStore } from '../stores/catalogStore';
const props = defineProps({});

const catalogStore = useCatalogStore();

const catalogLength = computed(() => {
	return catalogStore.catalog.length;
});

const beforeBar = computed(() => {
	return catalogStore.catalog.filter((item) => item.isSubscribed).length;
});

const percents = computed(() => {
	return Math.round((beforeBar.value / catalogLength.value) * 100);
});

const isSubscribed = computed(() => {
	return catalogStore.catalog.map((item) => item.isSubscribed);
});

onMounted(() => {
	catalogStore.setSubscribedPercents(percents);
});
</script>

<template>
	<section class="sidebar">
		<div class="sidebar__top">
			<div class="sidebar__logo">
				<img src="/icons/sidebar-logo.svg" alt="" />
			</div>
			<h3 class="sidebar__title">
				How much <br />
				fun do you want in your life?
			</h3>

			<h4 class="sidebar__subtitle">harry.simon@yahoo.com</h4>

			<div class="sidebar__bar">
				<p class="sidebar__bar-title">FUN YOU GET</p>
				<div class="row">
					<div class="sidebar__bar-lines">
						<div
							:style="`width: ${percents}%`"
							:class="`sidebar__bar-line before ${
								beforeBar == catalogLength ? 'full' : ''
							}`"
						></div>
						<div class="sidebar__bar-line after"></div>
					</div>
					<p class="sidebar__bar-percent">{{ Math.round(percents) }}%</p>
				</div>
			</div>

			<p class="sidebar__text">
				<span>Subscribe</span>
				to all our fun sites to upgrade your fun progress
			</p>
		</div>

		<div class="sidebar__bottom">
			<p class="sidebar__bottom-text">
				EntertainMeMore <br />
				11807 Westheimer 550 PMB617 <br />
				Houston, TX 77077
			</p>
			<a href="" class="sidebar__bottom-text link">contact@mail.com</a>
			<a href="" class="sidebar__bottom-text link">Privace Policy</a>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';
.sidebar {
	width: 100%;
	max-width: 320px;
	padding: 128px 48px 48px 48px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 346px;
	padding: relative;

	@media (max-width: $tablet) {
		max-width: 100%;
		align-items: center;
		gap: 132px;
		padding: 64px 24px 24px 24px;
	}
	//TOP
	&__top {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	&__logo {
		width: 100%;
		@media (max-width: $tablet) {
			width: 60%;
		}
		@media (max-width: $mobile) {
			width: 100%;
		}
	}
	&__title {
		margin: 64px 0px;
		font-size: 16px;
		font-weight: 400;

		color: $almost_black;
	}
	&__subtitle {
		font-size: 14px;
		margin-bottom: 16px;
		font-weight: 400;

		color: $almost_black;
	}

	&__bar {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 16px;
		&-title {
			font-size: 12px;

			font-weight: 400;
			color: $darker_gray;
		}

		.row {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			@media (max-width: $tablet) {
				justify-content: flex-start;
				gap: 16px;
			}
		}

		&-lines {
			width: 100%;
			max-width: 176px;
			height: 16px;
			position: relative;
		}
		&-line {
			width: 100%;
			height: 100%;
			position: absolute;
			border-radius: 8px;
			top: 0;
			left: 0;
			&.before {
				background-color: $orange;
				width: 0%;
				z-index: 15;
				border-radius: 8px 0px 0px 8px;
			}
			&.full {
				border-radius: 8px;
			}
			&.after {
				background-color: $almost_black;
				z-index: 10;
			}
		}

		&-percent {
			color: $orange;

			font-size: 16px;
		}
	}

	&__text {
		font-size: 14px;

		line-height: 20px;
		color: $darker_gray;
		span {
			color: $blue;
		}
	}

	//BOTTOM

	&__bottom {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 24px;
		&-text {
			font-size: 12px;

			color: $darker_gray;
			line-height: 18px;
		}
	}
}
</style>
