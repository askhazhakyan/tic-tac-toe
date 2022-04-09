<script setup>
  import {ref,computed} from 'vue'

  const player = ref("X");
  const gameBoard = ref([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ])

  const calculateWinner = (squares) => {
    const lines = [
      //calculating if theres 3 of the same symbol in the same row
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //calculating if theres 3 of the same symbol in the same columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      //calculating if theres 3 of the same symbol in the diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = computed(() => calculateWinner(gameBoard.value.flat()))

  const playerMove = (x,y) => {
    if (winner.value){
      return
    }

    if (gameBoard.value[x][y] !== ""){
      return
    }

    gameBoard.value[x][y] == player.value

    player.value = player.value === 'X' ? 'O' : 'X'
  }

  const boardClear = () => {
    gameBoard.value = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]

    player.value = 'X'
  }
</script>

<template>
  <h1>Hello, World</h1>
</template>

<style>

</style>
