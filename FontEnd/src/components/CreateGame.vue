<template>
  <div class="container fluid">
    <br />
    <center>
      <div class="btn-group" role="group" aria-label="Basic example">
        <router-link :to="{name: 'Admin'}"  class="btn btn-danger">👾HOME ADMIN👾</router-link>
        <router-link :to="{name: 'GameList'}" class="btn btn-light">🎰LIST GAME🎰</router-link>
        <router-link :to="{name: 'CreateGame'}" class="btn btn-info">🕹CREATE GAME🕹</router-link>
      </div><br>
    </center>
    <br />
    <div>
      <div class="card bg-info"  style="color:white;">
        <div class="card-header">
          <h2>เพิ่มรายการเกม</h2>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="addGame()">
            <div class="form-group">
              <label>ชื่อเกม (Name Game)</label>
              <input type="text" class="form-control" placeholder="ชื่อเกม" v-model="name" />
            </div>
            <div class="form-group">
              <label>ราคาเกม (Price)</label>
              <input type="number" class="form-control" placeholder="ราคาเกม" v-model="price" />
            </div>
            <div class="form-group">
              <label>รายละเอียด (Detail)</label>
              <textarea type="text" class="form-control" placeholder="รายละเอียด" v-model="detail" rows="7" ></textarea>
            </div>
            <div class="form-group">
              <label>เครื่องเกมที่รองรับ (System)</label>
              <input type="text" class="form-control" placeholder="เครื่องเกมที่รองรับ" v-model="system" />
            </div>
            <div class="form-group">
              <label>ค่ายพัฒนาเกม (Publisher)</label>
              <input type="text" class="form-control" placeholder="ค่ายพัฒนาเกม" v-model="publisher" />
            </div>
            <div class="form-group">
              <label>ผู้พัฒนาเกม (Developer)</label>
              <input type="text" class="form-control" placeholder="ผู้พัฒนาเกม" v-model="developer" />
            </div>
            <div class="form-group">
              <label>-->Link Download Game</label>
              <input type="text" class="form-control" placeholder="Link Download Game" v-model="downlaod" />
            </div>
            <div class="form-group">
              <label>-->Link ตัวอย่างวิดีโอเกม</label>
              <input type="text" class="form-control" placeholder="ตัวอย่างวิดีโอเกม" v-model="video" />
            </div>
            <div class="form-group">
              <label>-->Link ภาพปกเกม</label>
              <input type="text" class="form-control" placeholder="ภาพปกเกม" v-model="image" />
            </div>
            <div class="form-group">
              <label>-->Link ภาพแนะนำ 1</label>
              <input type="text" class="form-control" placeholder="ภาพแนะนำ 1" v-model="image1" />
            </div>
            <div class="form-group">
              <label>-->Link ภาพแนะนำ 2</label>
              <input type="text" class="form-control" placeholder="ภาพแนะนำ 2" v-model="image2" />
            </div>
            <div class="form-group">
              <label>-->Link ภาพแนะนำ 3</label>
              <input type="text" class="form-control" placeholder="ภาพแนะนำ 3" v-model="image3" />
            </div>
            <div class="form-group">
              <label>-->Link ภาพแนะนำ 4</label>
              <input type="text" class="form-control" placeholder="ภาพแนะนำ 4" v-model="image4"/>
            </div>
            <div class="btn-group">
            <button type="submit" data-toggle="modal" data-target="#myModal" class="btn btn-primary">เพิ่มรายการเกม</button>
            <button type="reset" onclick="window.location.reload()" class="btn btn-danger">ลบทั้งหมด</button>
            </div>
          </form>
        </div>
      </div><br />
    </div>
    <!-- The Modal -->
    <div class="modal fade" id="myModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header bg-info">
            <h4 class="modal-title">ได้ทำการเพิ่มเกม {{name}}</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body bg-light">
            <div>
              <center>
                <img :src="image" class="card-img-top" style="width: 250px;"><br><br>
                  <h4><article style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    <span class="btn btn-success"><b>{{name}}</b></span></article></h4>
                  <h5><span class="badge badge-warning">{{price}} ฿</span></h5>
              </center>
            </div>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer bg-dark">
            <button type="reset" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      image:"",
      image1:"",
      image2:"",
      image3:"",
      image4:"",
      detail:"",
      system:"",
      publisher:"",
      developer:"",
      price: 0,
      downlaod:"",
      video:""
    };
  },
  methods: {
    addGame() {
      if (this.name) {
        let payload = { 
          image: this.image,
          image1: this.image1,
          image2: this.image2,
          image3: this.image3,
          image4: this.image4,
          name: this.name, 
          price: this.price ,
          detail: this.detail,
          system: this.system,
          publisher: this.publisher,
          developer: this.developer,
          downlaod: this.downlaod,
          video: this.video
        };
        this.$store.dispatch("addGame", payload);
      }
    }
  }
};
</script>