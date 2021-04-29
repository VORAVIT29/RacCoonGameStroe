<template>
  <div style="background-image: url('https://prettyinpixel.files.wordpress.com/2015/05/gamerwallpapersmall.jpg'); 
  background-repeat: no-repeat; 
  background-attachment:fixed;
  background-size: cover;
  ">
    <!-- ปุ่มสำหรับกำหนดค่า Router ตอนนี้เป็น header เรียบร้อย -->
    <nav class="navbar navbar-expand-lg" style="background:rgb(24, 23, 23);">
      <a class="navbar-brand mr-auto"><h2><span class="badge" style="color:green; background:black;">RaccoonGame</span></h2></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navContent"
        aria-controls="navContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navContent">
        <ul class="navbar-nav ml-auto">
          <!-- ส่วนเรียก Router -->
          <li class="nav-item">
            <router-link :to="{name: 'HomeGame'}" onclick="window.location.reload()" class="btn btn-outline-success"><b>HOME</b></router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- ส่วนแสดงผลของ Router ที่เลือก หรือก็คือ body นั้นเอง -->
    <router-view></router-view>
    <div style="display: block; background-color: green;">
      <div style="display: block; background-color: rgb(24, 23, 23);">
        <p align="center"><font size="25pt" color="green"><a href="admin" onclick="window.location.reload()" style="color:green;">RaccoonGame</a></font></p></div>
        <p align="center"><font size="4pt" color="black"><b>Copyright © RaccoonGame Industry. All rights reserved</b></font></p></div>
  </div>
</template>

//ทำการประกาศ store โดยต้องประกาศ path ให้ตรงกับ store.js
<script>
import { store } from "./store/store";
export default {
  store
};
</script>