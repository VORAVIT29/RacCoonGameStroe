<template>
  <div class="container fluid">
    <br />
    <center>
      <div class="btn-group" role="group" aria-label="Basic example">
        <router-link :to="{name: 'Admin'}" class="btn btn-danger">👾HOME ADMIN👾</router-link>
        <router-link :to="{name: 'GameList'}" class="btn btn-light">🎰LIST GAME🎰</router-link>
        <router-link :to="{name: 'CreateGame'}" class="btn btn-info">🕹CREATE GAME🕹</router-link>
      </div><br>
    </center>
    <br />
    <div>
      <div class="card bg-light">
        <div class="card-header">
          <h2 style="color:black;">รายการเกม</h2>
        </div>
        <div class="card-body">
          <table class="table table-hover"  style="color:black;">
            <thead>
              <tr>
                <th style="width: 8.33%">ลำดับ</th>
                <th style="width: 50%">รายการเกม</th>
                <th style="width: 10%%">ราคา</th>
                <th style="width: 31.66%">การดำเนินการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(game,index) in $store.getters.games" :key="index">
                <td>{{ index + 1 }}</td>
                <td v-if="index !== editIndex">{{ game.name }}</td>
                <td v-if="index !== editIndex">{{ game.price }}</td>
                <td v-if="index !== editIndex">
                  <button
                    type="button"
                    class="btn btn-danger mr-2"
                    v-on:click="deleteGame(index,game._id)"
                  >ลบ</button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    v-on:click="openEdit(index,game)"
                  >แก้ไข</button>
                </td>

                <td v-if="index === editIndex">
                  <input
                    type="text"
                    :value="game.name"
                    class="form-control"
                    v-on:change="name = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    type="number"
                    :value="game.price"
                    class="form-control"
                    v-on:change="price = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <button
                    type="button"
                    class="btn btn-success mr-2"
                    v-on:click="editGame(game._id)"
                  >ยืนยัน</button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    v-on:click="closeEdit()"
                  >ยกเลิก</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      editIndex: -1,
      name: "",
      price: 0
    };
  },
  created() {
    this.fetchGame();
  },
  methods: {
    fetchGame() {
      this.$store.dispatch("fetchGame");
    },
    deleteGame(index, _id) {
      let payload = { index: index, _id: _id };
      this.$store.dispatch("deleteGame", payload);
    },
    openEdit(index, game) {
      this.editIndex = index;
      this.name = game.name;
      this.price = game.price;
    },
    closeEdit() {
      this.editIndex = -1;
      this.name = "";
      this.price = 0;
    },
    editGame(_id) {
      let payload = {
        index: this.editIndex,
        _id: _id,
        name: this.name,
        price: this.price
      };
      this.$store.dispatch("editGame", payload).then(this.closeEdit());
    }
  }
};
</script>