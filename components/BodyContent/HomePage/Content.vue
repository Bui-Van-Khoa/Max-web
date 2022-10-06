<template lang="">
  <div id="homepage-content">
    <section class="information">
      <p class="text-center text-emerald-700 text-4xl uppercase pb-8 font-bold">
        NHAN BINH LAND
      </p>
      <p class="text-center text-2xl text-slate-500 pb-12">
        CUNG CẤP GIẢI PHÁP BẤT ĐỘNG SẢN TOÀN DIỆN CHO KHÁCH HÀNG
      </p>
      <client-only>
        <carousel
          :nav="false"
          :loop="true"
          :responsive="{
            0: { items: 1, nav: false },
            450: { items: 2, nav: false },
            850: { items: 3, nav: false },
            1024: { items: 4, nav: false },
            1240: { items: 5, nav: false },
          }"
        >
          <div v-for="(item, index) in Max_web_service">
            <div class="hover-change-image">
              <img :src="`${item.src_hover}`" />
              <img :src="`${item.src}`" class="hidden-img" />
            </div>
            <h3 class="text-emerald-700 pb-4 pt-12 text-center font-bold">
              {{ item.title }}
            </h3>
            <p class="text-justify px-2 text-slate-500 text-sm">
              {{ item.description }}
            </p>
          </div>
        </carousel>
      </client-only>
      <el-button class="text-lg mt-10"
        >TÌM HIỂU THÊM VỀ NHAN BINH LAND</el-button
      >
    </section>

    <section class="project">
      <div class="project__items">
        <p
          class="text-center text-emerald-700 text-4xl uppercase font-bold py-8"
        >
          DỰ ÁN NHAN BINH LAND NỔI BẬT
        </p>
        <p class="text-center text-slate-500">
          Những dự án BĐS đang được phân phối bởi NhanbinhLand. <br />Bạn đã lựa
          chọn được dự án riêng cho mình?
        </p>
        <div class="grid grid-cols-4 gap-7 relative mt-14 pb-14">
          <div class="project__items--image" v-for="index in 4">
            <div class="overflow-hidden">
              <img src="~/assets/images/homepage06.jpg" />
              <div
                class="title bg-red-600 text-white -ml-4 absolute py-2.5 px-6 top-4"
              >
                BIỆT THỰ
              </div>
            </div>
            <div class="bg-white pt-8 px-8 pb-20 text-center">
              <p class="text-sky-900 hover:text-black">
                Biệt thự liền kề HD Mon City Mỹ Đình
              </p>
              <p class="text-sm text-slate-500 mt-4">
                Lê Đức Thọ, Mỹ Đình, Hà Nội
              </p>
            </div>
          </div>
        </div>
      </div>

      <el-button class="text-lg mt-10"
        >TÌM HIỂU THÊM VỀ NHAN BINH LAND</el-button
      >
    </section>

    <section class="open-project">
      <div class="open-project__item">
        <p class="text-center text-white text-4xl uppercase py-8">
          BĐS MỞ BÁN TẠI NHAN BINH LAND
        </p>
        <no-ssr>
          <Flickity :options="flickityOptions" style="height:535px">
            <div
              class="grid grid-rows-3 grid-col-2 px-12 fixed w-96"
              v-for="index in 4"
            >
              <div class="border border-2 border-yellow-500">
                <div
                  class="col-span-2 row-span-1 text-xl text-center p-3 open-project__item--name"
                >
                  Biệt thự liền kề HD Mon City Mỹ Đình
                </div>
                <div class="col-span-2 row-span-1 bg-green-200">
                  <img
                    src="~/assets/images/homepage06.jpg"
                    width="300"
                    height="300"
                  />
                </div>
                <div class="col-span-2 row-span-1 flex">
                  <div
                    class="text-center w-1/2 border-r-2 border-yellow-500 my-4"
                  >
                    <div class="font-semibold" style="color: #edab21">
                      <p>9h00- 12h00</p>
                      <p>Thứ 7</p>
                    </div>
                    <p class="text-white">04/09/2019</p>
                  </div>
                  <div class="w-1/2 text-white text-sm mt-4 pl-2">
                    <p>Cầu Giấy - Hà Nội</p>
                  </div>
                </div>
              </div>
              <div class="button flex mt-4 space-x-4">
                <div>
                  <button class="bg-blue-900 py-2 px-4 text-white text-sm">
                    Xem chi tiết
                  </button>
                </div>
                <div>
                  <button class="bg-yellow-500 py-2 px-4 text-white text-sm">
                    ĐĂNG KÝ THAM DỰ
                  </button>
                </div>
              </div>
            </div>
          </Flickity>
        </no-ssr>
      </div>
    </section>
  </div>
</template>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
import service from "~/apollo/queries/getService";

export default defineComponent({
  components: {},
  setup() {
    const flickityOptions = {
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
    };
    return { flickityOptions };
  },
  apollo: {
    Max_web_service: {
      prefetch: true,
      query: service,
    },
  },
});
</script>

<style lang="scss">
#homepage-content {
  .information {
    .el-button {
      background-color: #047058;
      color: white;
      display: flex;
      margin: 0 auto;
      width: fit-content;
      margin-top: 70px;
    }
  }
  .owl-carousel {
    .owl-stage-outer {
      .owl-item {
        .hover-change-image {
          border: 1px solid #edab21;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          position: relative;
          cursor: pointer;
          margin: auto;
          img {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            width: 55px;
            height: 70px;
          }
        }
        .hover-change-image:hover {
          border: none;
          background-color: #edab21;
          .hidden-img {
            display: none;
          }
        }
      }
    }
  }

  .project {
    background-color: rgb(244, 244, 244);
    margin-top: 80px;
    padding-bottom: 78px;
    .project__items {
      &--image {
        width: fit-content;
        overflow: hidden;
        margin: 0 auto;
        img {
          width: 100%;
          transition: 0.5s all ease-in-out;
          height: 200px;
          object-fit: fill;
          overflow: hidden;
        }
        .title::after {
          content: "";
          top: 44px;
          position: absolute;
          width: 0;
          height: 0;
          border: 15px solid transparent;
          border-top: 0px solid transparent;
          border-bottom: 7px solid transparent;
          border-right-color: #a80a02;
          left: -15px;
        }
      }
      &--image:hover img {
        transform: scale(1.5);
      }
      &--image:hover {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      }
    }

    .el-button {
      background-color: #047058;
      color: white;
      width: fit-content;
      display: flex;
      margin: 0 auto;
    }
  }

  .open-project {
    background-color: rgb(10, 36, 83);

    
    &__item {
      &--name {
        background-color: #edab21;
      }
    }
  }
}
</style>
