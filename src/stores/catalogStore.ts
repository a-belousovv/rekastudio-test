import { defineStore } from 'pinia';

export const useCatalogStore = defineStore('catalog', {
	state: () => ({
		catalog: [
			{
				id: 'item-1',
				title: 'Test your world geography skills',
				imageUrl: '/images/quiz-1.png',
				isSubscribed: false,
			},
			{
				id: 'item-2',
				title:
					'Test your knowledge with our fun and challenging quiz game! Compete, learn, and improve with a wide range of topics.',
				imageUrl: '/images/quiz-2.png',
				isSubscribed: false,
			},
			{
				id: 'item-3',
				title: 'Guess the song from short clips',
				imageUrl: '/images/quiz-3.png',
				isSubscribed: false,
			},
			{
				id: 'item-4',
				title: 'Identify films from iconic scenes',
				imageUrl: '/images/quiz-4.png',
				isSubscribed: false,
			},
			{
				id: 'item-5',
				title: 'Challenge your historical knowledge',
				imageUrl: '/images/quiz-5.png',
				isSubscribed: false,
			},
			{
				id: 'item-6',
				title: 'Answer questions on various sports',
				imageUrl: '/images/quiz-6.png',
				isSubscribed: false,
			},
			{
				id: 'item-7',
				title: 'Prove your science smarts',
				imageUrl: '/images/quiz-7.png',
				isSubscribed: false,
			},
		],
		subscribedPercents: 0,
		isOpenModal: false,
	}),
	actions: {
		setIsSubscribed(key: string) {
			const findItem = this.catalog.find((item) => item.id === key);
			if (findItem) {
				findItem.isSubscribed = !findItem.isSubscribed;
			}
		},
		clearSubscribed() {
			this.catalog.forEach((item) => {
				item.isSubscribed = false;
			});
		},
		setIsOpenModal() {
			this.isOpenModal = !this.isOpenModal;
		},
		setSubscribedPercents(value: number) {
			this.subscribedPercents = value;
		},
	},
});
