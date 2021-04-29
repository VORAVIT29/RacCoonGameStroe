<template>
    <div class="container">
      <br/>
        <center>
          <div class="btn-group" role="group" aria-label="Basic example">
            <router-link :to="{name: 'Admin'}" class="btn btn-danger">👾HOME ADMIN👾</router-link>
            <router-link :to="{name: 'GameList'}" class="btn btn-light">🎰LIST GAME🎰</router-link>
            <router-link :to="{name: 'CreateGame'}" class="btn btn-info">🕹CREATE GAME🕹</router-link>
          </div>
        </center><br />
        <div class="row">
            <div v-for="(game,index) in $store.getters.games" :key="index"  class="col-md-4">
                <div class="card bg-dark" style="width: 18rem;">
                    <div v-if="index !== editIndex">
                        <img :src="game.image" class="card-img-top" height="300px">
                        <div class="card-body text-secondary">
                        <span class="badge badge-secondary">ชื่อเกม (Name Game)</span><br><article style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color:white;">{{ game.name }}</article>
                        <span class="badge badge-warning">ราคาเกม (Price)</span><br><article style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color:white;">{{ game.price }}</article>
                        <span class="badge badge-danger">เครื่องเกมที่รองรับ (System)</span><br><article style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color:white;">{{ game.system }}</article>
                        <span class="badge badge-primary">ค่ายพัฒนาเกม (Publisher)</span><br><article style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color:white;">{{ game.publisher }}</article>
                        <span class="badge badge-info">ผู้พัฒนาเกม (Developer)</span><br><article style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color:white;">{{ game.developer }}</article>
                        <div class="btn-group">
                        <button
                            type="button"
                            class="btn btn-danger"
                            v-on:click="deleteGame(index,game._id)"
                        >ลบ</button>
                        <button
                            type="button"
                            class="btn btn-warning"
                            v-on:click="openEdit(index,game)"
                        >แก้ไข</button>
                        </div>
                        </div>
                        
                    </div>
                    <div v-if="index === editIndex">
                        <div class="card-body text-secondary">
                        <span class="badge badge-dark">ชื่อเกม (Name Game)</span><br>
                        <input type="text" :value="game.name" class="form-control" v-on:change="name = $event.target.value" /><br>
                        <span class="badge badge-warning">ราคาเกม (Price)</span><br>
                        <input type="number" :value="game.price" class="form-control" v-on:change="price = $event.target.value" /><br>
                        <span class="badge badge-secondary">รายละเอียด (Detail)</span><br>
                        <textarea type="text" :value="game.detail" class="form-control" v-on:change="detail = $event.target.value" rows="6"></textarea><br>
                        <span class="badge badge-danger">เครื่องเกมที่รองรับ (System)</span><br>
                        <input type="text" :value="game.system" class="form-control" v-on:change="system = $event.target.value" /><br>
                        <span class="badge badge-primary">ค่ายพัฒนาเกม (Publisher)</span><br>
                        <input type="text" :value="game.publisher" class="form-control" v-on:change="publisher = $event.target.value" /><br>
                        <span class="badge badge-info">ผู้พัฒนาเกม (Developer)</span><br>
                        <input type="text" :value="game.developer" class="form-control" v-on:change="developer = $event.target.value" /><br>
                        <span class="badge badge-success">-->Link Download Game</span><br>
                        <input type="text" :value="game.downlaod" class="form-control" v-on:change="downlaod = $event.target.value" /><br>
                        <span class="badge badge-primary">-->Link ตัวอย่างวิดีโอเกม</span><br>
                        <input type="text" :value="game.video" class="form-control" v-on:change="video = $event.target.value" /><br>
                        <span class="badge badge-primary">-->Link ภาพปกเกม</span><br>
                        <input type="text" :value="game.image" class="form-control" v-on:change="image = $event.target.value" /><br>
                        <span class="badge badge-primary">-->Link ภาพแนะนำ 1</span><br>
                        <input type="text" :value="game.image1" class="form-control" v-on:change="image1 = $event.target.value" /><br>
                        <span class="badge badge-primary">-->Link ภาพแนะนำ 2</span><br>
                        <input type="text" :value="game.image2" class="form-control" v-on:change="image2 = $event.target.value" /><br>
                        <span class="badge badge-primary">-->Link ภาพแนะนำ 3</span><br>
                        <input type="text" :value="game.image3" class="form-control" v-on:change="image3 = $event.target.value" /><br>
                        <span class="badge badge-primary">-->Link ภาพแนะนำ 4</span><br>
                        <input type="text" :value="game.image4" class="form-control" v-on:change="image4 = $event.target.value" /><br>
                        <div class="btn-group">
                            <button
                                type="button"
                                class="btn btn-success"
                                v-on:click="editGame(game._id)"
                            >ยืนยัน</button>
                            <button
                                type="button"
                                class="btn btn-secondary"
                                v-on:click="closeEdit()"
                            >ยกเลิก</button>
                        </div>
                        </div>
                        
                    </div>
                </div><br>
            </div>
        </div>
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
        this.image = game.image;
        this.image1 = game.image1;
        this.image2 = game.image2;
        this.image3 = game.image3;
        this.image4 = game.image4;
        this.detail = game.detail;
        this.price = game.price;
        this.system = game.system;
        this.publisher = game.publisher;
        this.developer = game.developer;
        this.downlaod = game.downlaod;
        this.id = game._id;
        this.video = game.video;
    },
    closeEdit() {
      this.editIndex = -1;
      this.name = "";
      this.price = 0;
      this.detail = "",
      this.system = "",
      this.publisher = "",
      this.developer = "",
      this.downlaod = "",
      this.video = "",
      this.image = "",
      this.image1 = "",
      this.image2 = "",
      this.image3 = "",
      this.image4 = ""
    },
    editGame(_id) {
      let payload = {
        index: this.editIndex,
        _id: _id,
        name: this.name,
        price: this.price,
        detail: this.detail,
        system: this.system,
        publisher: this.publisher,
        developer: this.developer,
        downlaod: this.downlaod,
        video: this.video,
        image: this.image,
        image1: this.image1,
        image2: this.image2,
        image3: this.image3,
        image4: this.image4
      };
      this.$store.dispatch("editGame", payload).then(this.closeEdit());
    }
  }
};
</script>