<script setup>
import { ref, computed } from 'vue'
const player = ref('X')
const board = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])
const CalculateWinner = (board) => {
  const lines = [
  /*calculating if theres 3 of the same symbol in the same row*/[0, 1, 2],[3, 4, 5],[6, 7, 8],
  /*calculating if theres 3 of the same symbol in the same column*/[0, 3, 6],[1, 4, 7],[2, 5, 8],
  /*calculating if theres 3 of the same symbol in the diagonals*/[0, 4, 8],[2, 4, 6]]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}
const winner = computed(() => CalculateWinner(board.value.flat()))
const playerMove = (x, y) => {
	if (winner.value) return
	if (board.value[x][y]) return
	board.value[x][y] = player.value
	player.value = player.value === 'X' ? 'O' : 'X'
}
const boardClear = () => {
	board.value = [
		['', '', ''],
		['', '', ''],
		['', '', '']
	]
	player.value = 'X'
}
</script>

<template>
	<main class="pt-8 text-center">
		<h1 class="mb-8 text-3xl font-bold uppercase">Tic Tac Toe</h1>

		<h3 class="text-xl mb-4">Player {{ player }}'s turn</h3>

		<div class="flex flex-col items-center mb-8">
			<div 
				v-for="(row, x) in board" 
				:key="x"
				class="flex">
				<div 
					v-for="(cell, y) in row" 
					:key="y" 
					@click="playerMove(x, y)" 
					:class="`border border-white w-24 h-24 hover:animate-wiggle flex items-center justify-center material-icons-outlined text-4xl cursor-pointer ${cell === 'X' ? 'text-yellow-500' : 'text-orange-600'}`">
					{{ cell === 'X' ? 'close' : cell === 'O' ? 'circle' : '' }}
				</div>
			</div>
		</div>

		<div class="text-center">
			<h2 v-if="winner" class="text-6xl font-bold mb-8">{{ winner }} wins! Good Game!</h2>
			<button @click="boardClear" class="px-4 py-2 text-white bg-green-500 rounded uppercase font-bold hover:bg-red-600 hover:text-black duration-300">Reset</button>
		</div>
	</main>
</template>

<style>
body {
	@apply  bg-gradient-to-r from-purple-500 to-pink-500 text-white;
}
</style>