<template>
  <div id="footer">
    <div class="footer__container">
      <div class="item1">
        <p class="text-[17px] font-medium">
          NHAN BINH LAND – TƯ VẤN GIẢI PHÁP BẤT ĐỘNG SẢN TOÀN DIỆN
        </p>

        <ul class="leading-9 mt-4 text-sm">
          <li class="flex space-x-2">
            <font-awesome-icon
              icon="fa-solid fa-location-dot"
              class="my-auto"
              style="color: #555"
            />
            <p>
              Tầng 4 tòa nhà hỗn hợp Sông Đà, 131 Trần Phú, Hà Đông, Hà Nội.
            </p>
          </li>
          <li class="flex space-x-2">
            <font-awesome-icon
              icon="fa-solid fa-phone"
              class="my-auto"
              style="color: #555"
            />
            <p>0912.498.558</p>
          </li>
          <li class="flex space-x-2">
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              class="my-auto"
              style="color: #555"
            />
            <p>pkdnhanbinh@gmail.com</p>
          </li>
          <li class="flex space-x-2">
            <font-awesome-icon
              icon="fa-solid fa-earth-oceania"
              class="my-auto"
              style="color: #555"
            />
            <p>nhanbinhinvest.vn</p>
          </li>
        </ul>
      </div>
      <div class="item2">
        <p class="text-[17px] font-medium">ĐIỀU KHOẢN & CHÍNH SÁCH</p>
        <ul class="leading-9 mt-4 text-sm">
          <li>Giới thiệu công ty</li>
          <li>Điều khoản thỏa thuận</li>
          <li>Quy chế hoạt động</li>
          <li>Báo giá và hỗ trợ</li>
          <li>Câu hỏi thường gặp</li>
        </ul>
      </div>
      <div class="item3">
        <p class="text-[17px] font-medium">ĐĂNG KÝ NHẬN BẢN TIN</p>
        <p class="text-sm mt-4 leading-7">
          Nếu bạn không có thời gian duyệt Website xin vui lòng để lại email,
          chúng tôi sẽ gửi cập nhật những tin tức, CSBH ưu đãi của Nhan Binh
          Land - Tư vấn giải pháp Bất Động Sản toàn diện tới quý khách.
        </p>
        <div style="margin-top: 15px">
          <el-input placeholder="Email của bạn" class="input-with-select">
            <el-button slot="append">Gửi</el-button>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss">
$tablet: "only screen and (min-width: 850px) and (max-width: 1023px)";
$large: "only screen and (min-width: 1024px) and (max-width: 1239px)";
$mobile: "only screen and (min-width: 849px)";

@mixin responsive_tablet() {
  @media #{$tablet} {
    @content;
  }
}
@mixin responsive_large() {
  @media #{$large} {
    @content;
  }
}

@mixin responsive_mobile() {
  @media #{$mobile} {
    @content;
  }
}

#footer {
  background: #f4f4f4;
  .footer__container {
    padding: 25px 0px 88px 0px;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    color: #333;
    .item1 {
      grid-column: span 5 / span 5;
    }
    .item2 {
      grid-column: span 3 / span 3;
    }
    .item3 {
      grid-column: span 4 / span 4;
    }
  }

  @include responsive_tablet {
    .footer__container {
      width: 850px;
    }
  }

  @include responsive_large {
    .footer__container {
      width: 984px;
    }
  }
}
</style>
