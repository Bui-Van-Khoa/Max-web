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
        <Flickity :options="flickityOptions1">
          <div
            v-for="(item, index) in Max_web_service"
            :key="index"
            class="service__cell"
          >
            <div class="hover-change-image">
              <img
                :src="require(`@/assets/images/service/${item.src_hover}`)"
              />
              <img
                :src="require(`@/assets/images/service/${item.src}`)"
                class="hidden-img"
              />
            </div>
            <h3 class="text-emerald-700 pb-4 pt-12 text-center font-bold">
              {{ item.title }}
            </h3>
            <p class="text-justify px-2 text-slate-500 text-sm">
              {{ item.description }}
            </p>
          </div>
        </Flickity>
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
        <div class="relative mt-14 pb-14 container__grid">
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

      <el-button class="text-lg mt-10">XEM TẤT CẢ CÁC DỰ ÁN</el-button>
    </section>

    <section class="open-project">
      <div class="open-project__item">
        <p class="text-center text-white text-4xl uppercase py-8">
          BĐS MỞ BÁN TẠI NHAN BINH LAND
        </p>
        <client-only>
          <Flickity
            pageDots:false
            :options="flickityOptions"
            style="height: 535px"
          >
            <div
              style="height: 535px"
              class="grid grid-rows-3 grid-col-2 px-12 fixed w-96"
              v-for="index in 4"
            >
              <div
                class="border border-2 border-yellow-500"
                style="height: 395px"
              >
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
              <div class="button flex mt-4 space-x-4 h-9">
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
        </client-only>
      </div>
    </section>

    <section class="video">
      <p class="text-center text-emerald-700 text-4xl uppercase font-bold py-8">
        NHAN BINH LAND TV
      </p>

      <div class="video__item bg-white">
        <div class="col-span-3">
          <video-player :src="urlInitial" :autoplay="true" />
        </div>
        <div>
          <div
            class="flex pb-2"
            v-for="index in videoList"
            @click="changeUrl(index.urlVideo, index.id)"
            :class="currentIdVideo == index.id ? 'bg-red-100' : 'bg-white'"
          >
            <img
              :src="index.urlImage"
              alt=""
              style="max-width: 25%; max-height: 25%"
            />
            <p class="pl-4 text-red-600">{{ index.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <div>
      <section class="news">
        <p class="text-center text-emerald-700 text-4xl uppercase py-8">
          TIN TỨC BĐS NHAN BINH
        </p>
        <div class="grid grid-cols-3 gap-8 auto-cols-max desktop-only">
          <div v-for="item in news" class="news__item">
            <img :src="item.urlImage" alt="" class="news__item--image" />
            <div class="news__item--description">
              <p
                class="py-5 px-3.5"
                style="border-left: 2px solid #6ebd3e; min-height: 112px"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="newsMobile">
        <client-only>
          <Flickity :options="flickityOptions">
            <div v-for="item in news" class="newsMobile__cell">
              <img
                :src="item.urlImage"
                class="newsMobile__cell--image"
                style="min-width: 100%"
              />
              <div class="newsMobile__cell--description">
                <p
                  class="pb-6 px-4 text-slate-500"
                  style="border-left: 2px solid #6ebd3e"
                >
                  {{ item.description }}
                </p>
              </div>
            </div>
          </Flickity>
        </client-only>
      </section>
      <el-button
        class="text-lg text-white w-fit flex m-auto"
        style="background-color: #047058"
        >XEM TẤT CẢ CÁC BÀI VIẾT</el-button
      >
    </div>

    <section class="customer">
      <div class="customer__content">
        <p class="text-center text-4xl uppercase py-8">
          1000+ khách hàng nói về NhanbinhLand
        </p>
        <p class="text-center text-xl text-slate-500 pb-10">
          Sự hài lòng của khách hàng chính là thành công lớn nhất của chúng tôi
        </p>
        <client-only>
          <Flickity :options="flickityOptions">
            <div class="slide flex space-x-5 px-4 py-4" v-for="item in 4">
              <div class="col-span-2">
                <el-avatar
                  :size="100"
                  src="https://bookland.vn/images/bds/1/files/khach-hang-bookland(1).jpg"
                ></el-avatar>
              </div>
              <div class="col-span-6">
                <p>Anh Vũ Ngọc Hải</p>
                <p class="text-sm text-slate-500 mt-4">
                  Tôi rất hài lòng với NhanbinhLand. Đặc biệt là đội ngũ tư vấn
                  chuyên nghiệp và nhiệt tình. Nhờ có NhanbinhLand mà tôi đang
                  có nguồn thu nhập chính từ BĐS nghỉ dưỡng mà trước đó tôi hoàn
                  toàn chưa biết gì về cơ hội đầu tư như vậy.
                </p>
              </div>
            </div>
          </Flickity>
        </client-only>
      </div>
    </section>

    <section class="mailbox">
      <div class="mailbox__content">
        <p
          class="text-center text-emerald-700 text-4xl uppercase font-bold py-8"
        >
          HÒM THƯ NHAN BINH LAND
        </p>
        <p class="text-center text-slate-500">
          Chúng tôi đã giúp hàng nghìn khách hàng tìm được dự án ưng ý. Với quỹ
          hàng đa dạng nhất thị trường, chúng tôi tự tin sẽ giúp bạn thực hiện
          giấc mơ sơ hữu BĐS và tối ưu hiệu quả đầu tư.
        </p>

        <div class="grid grid-cols-8 gap-4 mt-12 pb-10">
          <div class="col-span-5">
            <p
              class="bg-green-700 text-center text-white py-2 font-medium"
              style="background-color: green"
            >
              THÔNG TIN CHUYÊN VIÊN TƯ VẤN DỰ ÁN
            </p>
            <div class="mailbox__content--detail flex mt-4 space-x-4">
              <div class="w-2/5 space-y-4 text-center">
                <img
                  src="https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/12.jpg"
                  alt=""
                />
                <p class="text-red-600 italic font-bold">Hotline</p>
                <p style="color: green">
                  <font-awesome-icon icon="fa-solid fa-square-phone" />
                  <span clas> 0912 49 8558</span>
                </p>
              </div>
              <div class="w-full">
                <p class="text-slate-800 text-sm">
                  QUẢN LÝ PHÒNG KINH DOANH BÁN HÀNG TẠI NHAN BINH LAND
                </p>

                <div
                  v-for="item in adviseList"
                  class="flex space-x-2 space-y-3"
                >
                  <div class="text-red-600 mt-3">
                    <font-awesome-icon icon="fa-solid fa-hand-point-right" />
                  </div>
                  <p class="text-gray-500 text-xs">{{ item.description }}</p>
                </div>
                <p class="mt-6 text-slate-800">
                  ĐĂNG KÝ NGAY ĐỂ NHẬN TƯ VẤN ĐẦU TƯ TỪ CÁC CHUYÊN GIA BĐS
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-3 form_register">
            <p
              class="bg-green-700 text-center text-white py-2 font-medium"
              style="background-color: green"
            >
              ĐĂNG KÝ TƯ VẤN
            </p>
            <div class="form">
              <el-form
                ref="form"
                :model="form"
                class="pl-4 py-2"
                label-position="top"
              >
                <el-form-item label="Họ tên của bạn">
                  <el-input
                    v-model="form.name"
                    placeholder="Họ và tên"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Số điện thoại của bạn">
                  <el-input
                    v-model="form.name"
                    placeholder="Số điện thoại"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Địa chỉ email của bạn">
                  <el-input
                    v-model="form.name"
                    placeholder="Địa chỉ email"
                  ></el-input>
                </el-form-item>

                <el-form-item label=" Bạn muốn mua dự án ở khu vực nào?">
                  <el-select v-model="valueSelect" placeholder="Chọn khu vực">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button
                    class="bg-amber-500 text-lg border-none"
                    type="primary"
                    >Hoàn tất</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="partner">
      <p class="text-center text-emerald-700 text-4xl uppercase font-bold py-8">
        ĐỐI TÁC CỦA NHAN BINH LAND
      </p>
      <client-only>
        <Flickity :options="flickityOptions1">
          <div
            v-for="(item, key) in listPartner"
            :key="key"
            class="partner__cell"
          >
            <div class="px-2">
              <img
                :src="require(`@/assets/images/partner/${item.src}`)"
                class="m-auto"
              />
            </div>
          </div>
        </Flickity>
      </client-only>
    </section>
  </div>
</template>
<script>
import {
  defineComponent,
  watch,
  ref,
  onMounted,
} from "@nuxtjs/composition-api";
import VideoPlayer from "nuxt-video-player";
import getMenu from "~/apollo/queries/getService";

require("nuxt-video-player/src/assets/css/main.css");

export default defineComponent({
  name: "ContentHome",
  components: { VideoPlayer },
  setup() {
    const valueSelect = ref("");
    const flickityOptions = {
      prevNextButtons: false,
      pageDots: true,
      wrapAround: true,
      cellAlign: "left",
      draggable: true,
    };

    const flickityOptions1 = {
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
      cellAlign: "left",
      draggable: true,
      autoPlay: true,
    };

    const urlInitial = ref("https://www.youtube.com/watch?v=G2z1JJ78DK0");
    const currentIdVideo = ref(1);

    const listPartner = [
      {
        id: 1,
        src: "home-001.png",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
      {
        id: 2,
        src: "home-002.png",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
      {
        id: 3,
        src: "home-003.jpg",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
      {
        id: 4,
        src: "cong-ty-cp-beegreen.png",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
      {
        id: 5,
        src: "home-005.jpg",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
      {
        id: 6,
        src: "home-006.png",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
      {
        id: 7,
        src: "home-007.jpg",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
      {
        id: 8,
        src: "home-008.jpg",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
      {
        id: 9,
        src: "home-009.png",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
      {
        id: 10,
        src: "home-10.png",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
      {
        id: 11,
        src: "home-11.png",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
      {
        id: 12,
        src: "home-12.png",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
      {
        id: 13,
        src: "home-13.png",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
      {
        id: 14,
        src: "home-14.png",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
      {
        id: 15,
        src: "home-15.png",
        url: "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/home-001.png",
      },
    ];

    const videoList = [
      {
        id: 1,
        urlVideo: "https://www.youtube.com/watch?v=G2z1JJ78DK0",
        description: "Bán Liền kề Biệt Thự HD Mon City Mỹ Đinh",
        urlImage:
          "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/anh-phoi-canh-mon-city-300x300-1.jpg",
      },
      {
        id: 2,
        urlVideo: "https://www.youtube.com/watch?v=uVU1WfMRniA",
        description: "Chung cư An Bình Plaza – 97 Trần Bình",
        urlImage:
          "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/pc3-1500x630-300x300-1.jpg",
      },
      {
        id: 3,
        urlVideo: "https://www.youtube.com/watch?v=HT5ANDdRBy4",
        description: "THE ZEI – MỸ ĐÌNH",
        urlImage:
          "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/0044-1-600x349-1.jpg",
      },
    ];

    const news = [
      {
        id: 1,
        urlImage:
          "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/khu-do-thi-sinh-thai-nhon-hoi-1-1.jpg",
        description:
          "Khu đô thị sinh thái Nhơn Hội đích ngắm mới của các nhà đầu tư",
      },
      {
        id: 2,
        urlImage:
          "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/an-binh-plaza-3-1.jpg",
        description:
          "Lý do chọn dự án An Bình Plaza – thuyết phục từ những chi tiết nhỏ nhất",
      },
      {
        id: 3,
        urlImage:
          "https://bds107.maxwebsite.vn/wp-content/uploads/2019/09/chung-cu-muong-thanh-go-vap-2-1.png",
        description: "Tiện ích dự án Mường Thanh Gò Vấp",
      },
    ];

    const adviseList = [
      {
        id: 1,
        description: "Quản lý kinh doanh suất sắc tại Nhan Binh Land",
      },
      {
        id: 2,
        description:
          "Trên 5 năm kinh nghiệm trong ngành bất động sản nghỉ dưỡng.",
      },
      {
        id: 3,
        description: " Am hiểu sâu sắc về giá trị đầu tư BĐS giúp khách hàng.",
      },
      {
        id: 4,
        description:
          " Đối tác tin cậy, uy tín của hàng trăm khách hàng và công ty.",
      },
      {
        id: 5,
        description:
          " Tư vấn thông tin chính xác, chuyên nghiệp, đầy đủ và nhanh nhất.",
      },
      {
        id: 6,
        description:
          " Hỗ trợ 24/7 khách hàng giải quyết mọi vấn đề về thủ tục mua bán, vay vốn ngân hàng… từ khi ký hợp đồng mua nhà đến khi khách hàng nhận nhà.",
      },
    ];
    const Max_web_service = [
      {
        id: 1,
        title: "Sản phẩm Nhanbinhland",
        src: "1.png",
        src_hover: "icon1-white.png",
        description:
          "Bất động sản tại Nhanbinhland được chọn lọc kỹ càng, đem đến nhiều lợi nhuận cao và phù hợp nhất đến khách hàng.",
      },
      {
        id: 2,
        title: "Sản phẩm Nhanbinhland",
        src: "icon2.png",
        src_hover: "icon2-white.png",
        description:
          "Bất động sản tại Nhanbinhland được chọn lọc kỹ càng, đem đến nhiều lợi nhuận cao và phù hợp nhất đến khách hàng.",
      },
      {
        id: 3,
        title: "Sản phẩm Nhanbinhland",
        src: "icon3.png",
        src_hover: "icon3-white.png",
        description:
          "Bất động sản tại Nhanbinhland được chọn lọc kỹ càng, đem đến nhiều lợi nhuận cao và phù hợp nhất đến khách hàng.",
      },
      {
        id: 4,
        title: "Sản phẩm Nhanbinhland",
        src: "icon4.png",
        src_hover: "icon4-white.png",
        description:
          "Bất động sản tại Nhanbinhland được chọn lọc kỹ càng, đem đến nhiều lợi nhuận cao và phù hợp nhất đến khách hàng.",
      },
      {
        id: 5,
        title: "Sản phẩm Nhanbinhland",
        src: "icon5.png",
        src_hover: "icon5-white.png",
        description:
          "Bất động sản tại Nhanbinhland được chọn lọc kỹ càng, đem đến nhiều lợi nhuận cao và phù hợp nhất đến khách hàng.",
      },
    ];

    const form = {
      name: "",
    };

    const options = [
      {
        value: "Option1",
        label: "Option1",
      },
    ];

    const changeUrl = (url, id) => {
      urlInitial.value = url;
      currentIdVideo.value = id;
    };

    watch(urlInitial, () => {});

    return {
      flickityOptions,
      changeUrl,
      urlInitial,
      videoList,
      currentIdVideo,
      news,
      adviseList,
      form,
      options,
      flickityOptions1,
      listPartner,
      valueSelect,
      Max_web_service,
    };
  },

  // apollo: {
  //   Max_web_service: {
  //     prefetch: true,
  //     query: getMenu,
  //   },
  // },
});
</script>

<style lang="scss">
#homepage-content {
  .information {
    margin-top: 30px;
    .el-button {
      background-color: #047058;
      color: white;
      display: flex;
      margin: 0 auto;
      width: fit-content;
      margin-top: 70px;
    }

    .service__cell {
      @media screen and (min-width: 980px) {
        width: 25%;
      }
      @media screen and (max-width: 979px) {
        width: 50%;
      }
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

  .project {
    background-color: rgb(244, 244, 244);
    margin-top: 80px;
    padding-bottom: 78px;
    .project__items {
      .container__grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 40px;
      }
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
      .flickity-viewport {
        height: 535px;
      }
    }
  }

  .video {
    background-color: white;
    padding-bottom: 60px;

    &__item {
      @media screen and (min-width: 850px) {
        display: grid;
        grid-template-columns: repeat(4, minmax(auto, 1fr));
        gap: 12px;
      }
    }
  }

  .news {
    &__item {
      &--description {
        border: 1px solid #e1e1e1;
        border-top: 2px solid #6ebd3e;
        padding: 16px 12px 17px 0px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
      &--image {
        width: 100%;
        height: 50%;
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

  .newsMobile {
    padding-bottom: 40px;
    .flickity-viewport {
      height: 600px;
    }
    &__cell {
      width: 100%;
      &--image {
        height: 350px;
      }
      &--description {
        padding: 32px 0px;
        border: 1px solid #e1e1e1;
        border-top: 3px solid #6ebd3e;
      }
    }
  }

  .customer {
    margin-top: 45px;
    background-color: rgb(249, 249, 249);
    padding-bottom: 120px;
    &__content {
      .slide {
        width: 50%;
      }
    }
    @media screen and (max-width: 850px) {
      .customer {
        &__content {
          .slide {
            width: 100%;
          }
        }
      }
    }
  }

  .mailbox {
    background-color: rgb(244, 244, 244);
    &__content {
      .form_register {
        .el-form-item__label {
          display: flex;
          color: #edab21;
        }
      }
    }
  }

  .partner {
    padding-bottom: 40px;
    &__cell {
      @media screen and (min-width: 980px) {
        width: 12.5%;
      }
      @media screen and (max-width: 979px) {
        width: 25%;
      }
    }
  }
}
</style>
