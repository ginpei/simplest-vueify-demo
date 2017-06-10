<style scoped>
.titleArea {
	text-align: center;
}
</style>

<template>
	<title-area :title="title" class="titleArea"></title-area>
</template>

<script>
const TitleArea = require('./TitleArea.vue');

module.exports = {
	components: {
		TitleArea,
	},

	data() {
		return {
			title: 'Hello World!',
		};
	},
};
</script>
