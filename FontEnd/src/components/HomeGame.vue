<template>
<div class="container">
    <!-- รูปภาพเลื่อน -->
        <div id="demo" class="carousel slide" data-ride="carousel">

        <!-- Indicators -->
        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <!-- The slideshow -->
        
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://cdn.80.lv/api/upload/post/5945/images/5d2d21447493d/widen_1220x0.png" height="500" style="opacity: 0.9; ">
            <div class="carousel-caption text-warning">
                <h3><b>สุดยอดเกมระดับตำนาน</b></h3>
                <p><b>ดีกว่านี่ไม่มีอีกแล้วต้องเกมนี้เท่านั้น ตามล่าหาสมบัติ</b></p>
            </div>
            </div>
            <div class="carousel-item">
            <img src="https://pbs.twimg.com/media/CB2OBnJWgAAVn36.png" height="500" style="opacity: 0.9; ">
            <div class="carousel-caption text-warning">
                <h3>My Boy Advance</h3>
                <p>All game the best in earth!!!!!</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src="https://www.wallpaperflare.com/static/546/704/62/cyberpunk-the-last-nigh-video-games-pixel-art-wallpaper.jpg" height="500" style="opacity: 0.9; ">
            <div class="carousel-caption text-warning">
                <h3>I am Sleepy game!</h3>
                <p>Race games, make projects and see who is sleepy first!! ZZZZZ</p>
            </div>
            </div>
        </div>

        <!-- Left and right controls -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>

        </div>
    <!-- รูปภาพเลื่อน -->
        <br>
        <div class="row">
            <div v-for="(game,index) in $store.getters.games" :key="index" class="col-md-4" >
                <!-- Card -->
                <div class="card bg-dark" style="width: 18rem;">
                    <img :src="game.image" class="card-img-top" height="300px">
                    <div class="card-body text-secondary">
                        <h5 class="card-name"><article style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{game.name}}</article></h5>
                        <div class="btn-group">
                        <button class="btn btn-outline-warning" ><b>{{game.price}} ฿</b></button>
                        <button class="btn btn-danger" v-on:click="detailGame(game)" data-toggle="modal" data-target="#exampleModalCenter">👁</button>
                        </div>
                    </div>
                </div><br>
                <!-- Card -->
                <!--Modal-->
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                        <div class="modal-content bg-dark">
                        <!--modal-header-->
                        <div class="modal-header bg-danger">
                            <h5 class="modal-title" id="exampleModalCenterTitle"><h3><b><font color="white">{{name}}</font></b></h3></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <!--modal-body-->
                        <div class="modal-body bg-secondary">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="jumbotron">
                                            <div style="width: 170; height: 350px; overflow-y: scroll; scrollbar-arrow-color:blue; scrollbar-face-color: #e7e7e7; scrollbar-3dlight-color: #a0a0a0; scrollbar-darkshadow-color:#888888">  
                                                <center>
                                                    <img :src="image" class="card-img-top" style="width: 250px;"><br>
                                                    <img :src="image1" class="card-img-top" style="width: 250px;"><br>
                                                    <img :src="image2" class="card-img-top" style="width: 250px;"><br>
                                                    <img :src="image3" class="card-img-top" style="width: 250px;"><br>
                                                    <img :src="image4" class="card-img-top" style="width: 250px;"><br>
                                                    <div class="embed-responsive embed-responsive-16by9">
                                                        <iframe class="embed-responsive-item" :src="video" allowfullscreen></iframe>
                                                    </div>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="jumbotron">
                                            <div style="width: 600; height: 350px; overflow-y: scroll; scrollbar-arrow-color:blue; scrollbar-face-color: #e7e7e7; scrollbar-3dlight-color: #a0a0a0; scrollbar-darkshadow-color:#888888">
                                                <span class="badge badge-pill badge-secondary">Detail:</span>{{detail}}<br>
                                                <span class="badge badge-pill badge-danger">System:</span>{{system}}<br>
                                                <span class="badge badge-pill badge-primary">Publisher:</span>{{publisher}}<br>
                                                <span class="badge badge-pill badge-info">Developer:</span>{{developer}}<br>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--modal-footer-->
                        <div class="modal-footer bg-dark">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <router-link class="btn btn-outline-warning" onclick="window.location.reload()" :to="`code_game/${id}`" >Buy Game</router-link>
                        </div>
                        </div>
                    </div>
                </div>
                <!--Modal-->
            </div>
        </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            id:"",
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
    created() {
        this.fetchGame();
    },
    methods: {
        fetchGame() {
            this.$store.dispatch("fetchGame");
        },
       detailGame(game) {
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
        }
    }
}
</script>