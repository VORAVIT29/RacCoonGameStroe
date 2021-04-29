<template>
    <div class="container">
        <br><br>
        <h2><span class="badge badge-warning">หน้าชำระเงิน 💸</span></h2>
        <div class="jumbotron bg-white">
                <div class="form-group">
                    <label for="pay">เลือกวิธีการชำระ</label>
                    <select class="form-control" id="pay" required>
                    <option>MasterCard</option>
                    <option>VISA</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="code1" class="form-label">หมายเลขบัตร</label>
                    <input type="text" class="form-control" id="code1" required>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="month">เดือนหมดอายุของบัตร</label>
                        <select class="form-control" id="month" required>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="year">ปีหมดอายุของบัตร</label>
                        <select class="form-control" id="year" required>
                            <option>2564</option>
                            <option>2565</option>
                            <option>2566</option>
                            <option>2567</option>
                            <option>2568</option>
                            <option>2569</option>
                            <option>2570</option>
                            <option>2571</option>
                            <option>2572</option>
                            <option>2573</option>
                            <option>2574</option>
                            <option>2575</option>
                            <option>2576</option>
                            <option>2577</option>
                            <option>2578</option>
                            <option>2579</option>
                            <option>2580</option>
                            <option>2581</option>
                            <option>2582</option>
                            <option>2583</option>
                            <option>2584</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="code2">รหัสรักษาความปลอดภัย (3 หลัก)</label>
                        <input type="text" class="form-control" id="code2" max="3" min="3" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="firstname">ชื่อ</label>
                        <input type="text" class="form-control" id="firstname" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastname">นามสกุล</label>
                        <input type="text" class="form-control" id="lastname" required>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="city" class="form-label">เมือง</label>
                    <input type="text" class="form-control" id="city" required>
                </div>
                <div class="mb-3">
                    <label for="email1" class="form-label">ที่อยู่ (e-mail)</label>
                    <input type="email" class="form-control" id="email1"  aria-describedby="emailHelp" required>
                    <small id="emailHelp" class="form-text text-muted">พวกเราจะไม่แชร์ e-mail ให้คนอื่น</small>
                </div>
                <div class="mb-3">
                    <label for="email2" class="form-label">ที่อยู่  (e-mail สำรอง)</label>
                    <input type="email" class="form-control" id="email2"  aria-describedby="emailHelp">
                    <small id="emailHelp" class="form-text text-muted">พวกเราจะไม่แชร์ e-mail ให้คนอื่น</small>
                </div>
                <div class="mb-3">
                    <label for="phonenumber" class="form-label">หมายเลขโทรศัพท์</label>
                    <input type="text" class="form-control" id="phonenumber" required>
                </div>
                <button type="submit" class="btn btn-success" data-toggle="modal" data-target="#myModal">ดำเนินการ</button>
                <button onclick="window.location.reload()" type="reset" class="btn btn-danger">ลบทั้งหมด</button>
        </div>
        
        <!-- The Modal -->
        <div class="modal  fade" id="myModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header bg-warning">
                <h4 class="modal-title">ยืนยันการซื้อ</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body bg-light">
                <div>
                    <center>
                        <img :src="game.image" class="card-img-top" style="width: 250px;"><br><br>
                        <h4><article style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                            <span class="btn btn-success"><b>{{game.name}}</b></span></article></h4>
                        <h5><span class="badge badge-warning">{{game.price}} ฿</span></h5>
                    </center>
                </div>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer bg-dark">
                <button type="button" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                <a :href="game.downlaod" class="btn btn-success">ยืนยัน</a>
            </div>

            </div>
        </div>
        </div>
        <br>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return{
            game:{}
        }
    },
    created(){
        const apiURL = `http://apivue.app.ruk-com.cloud/api/game/find/${this.$route.params.id}`
        axios.get(apiURL).then((res)=>{
            this.game = res.data
        })
    },
    method:{
        downloadz(){
            window.location.href=this.game.downlaod;
        }
    }
}
</script>