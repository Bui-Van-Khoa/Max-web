<template>
  <div>
    <div class="header">
      <div class="grid-container wide">
        <div class="header-infor">
          <div class="information">
            <div class="phone">
              <p class="icon"><fa :icon="['fas', 'phone']" /></p>
              <p class="number">0912.49.8558</p>
            </div>
            <div class="address">
              <p class="icon"><fa :icon="['fas', 'envelope']" /></p>
              <p class="">pkdnhanbinh@gmail.com</p>
            </div>
          </div>
          <div class="social">
            <p>Kết nối với chúng tôi</p>
            <img src="~/assets/images/homepage03.png" width="25" height="25" />
            <img src="~/assets/images/homepage04.png" width="25" height="25" />
          </div>
        </div>
      </div>
    </div>
    <div class="header_megamenu">
      <div class="grid-container wide">
        <div class="grid grid-flow-col col-span-12 row-span-3">
          <div class="row-span-2 col-span-3">
            <img src="~/assets/images/homepage05.jpg" width="120" height="88" />
          </div>
          <div
            class="row-span-1 col-span-9 flex justify-between text-center items-center"
          >
            <div
              v-for="(item, index) in Max_web_menu"
              :key="index"
              class="item-menu col-span-1 flex flex-1 h-full items-center justify-center uppercase"
            >
              <div v-if="item.name == 'Dự án'" class="popover-item">
                <el-popover placement="bottom" width="200" trigger="hover">
                  <ul class="flex flex-col space-y-4 text-black">
                    <li class="hover:bg-emerald-600 p-2">CHUNG CƯ</li>
                    <li class="hover:bg-emerald-600 p-2">BIỆT THỰ</li>
                    <li class="hover:bg-emerald-600 p-2">ĐẤT NỀN</li>
                  </ul>
                  <el-button class="uppercase" slot="reference">{{
                    item.name
                  }}</el-button>
                </el-popover>
              </div>
              <div v-else-if="item.name == 'Kinh nghiệm'" class="popover-item">
                <el-popover placement="bottom" width="180" trigger="hover">
                  <ul class="flex flex-col space-y-4 text-black">
                    <li class="hover:bg-emerald-600 p-2">Đầu tư BĐS</li>
                    <li class="hover:bg-emerald-600 p-2">Đầu tư BĐS</li>
                  </ul>
                  <el-button class="uppercase" slot="reference">{{
                    item.name
                  }}</el-button>
                </el-popover>
              </div>
              <div v-else>{{ item.name }}</div>
            </div>
          </div>
          <div class="row-span-1 col-span-9 relative">
            <div class="search absolute right-0">
              <el-input placeholder="Tìm kiếm…">
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile">
      <div class="grid grid-cols-6">
        <div class="col-span-1 relative">
          <button class="pt-9 pl-9" @click="drawer = true">
            <fa :icon="['fas', 'bars']" />
          </button>
        </div>
        <div class="col-span-5 flex justify-center">
          <img src="~/assets/images/homepage05.jpg" width="120" height="88" />
        </div>
      </div>

      <!-- <div class="sidebar" id="sidebar">
        <el-drawer
          :visible.sync="drawer"
          :with-header="false"
          direction="ltr"
          :show-close="true"
        >
          <div class="flex justify-end p-4" @click="drawer = false">
            <i class="el-icon-close"></i>
          </div>
          <div class="w-full">
            <el-menu class="border-none">
              <el-menu-item v-for="(item, index) in Max_web_menu" :key="index">
                <span>{{ item.name }}</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-drawer>
      </div> -->
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import menu from "~/apollo/queries/getMenu";

export default defineComponent({
  setup() {
    const drawer = ref(false);

    return { drawer };
  },

  apollo: {
    Max_web_menu: {
      prefetch: true,
      query: menu,
    },
  },
});
</script>

<style lang="scss">
@media screen and (min-width: 850px) {
  .mobile {
    display: none;
  }
}

@media screen and (max-width: 850px) {
  .header,
  .header_megamenu {
    display: none;
  }
}

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

#__layout {
  .header {
    background-color: #047058;
    .grid-container {
      width: 100%;
      display: block;
      padding: 0;
    }
    .grid-container.wide {
      max-width: 1200px;
      margin: 0 auto;
    }

    .header-infor {
      display: flex;
      color: white;
      font-size: 14px;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0px;
      .information {
        display: flex;
        justify-content: space-between;
        .phone,
        .address {
          display: flex;
          justify-content: space-between;
          margin-right: 20px;
          .number {
            border-right: 1px solid white;
            padding-right: 20px;
          }
          .icon {
            padding-right: 10px;
          }
        }
      }

      .social {
        display: grid;
        grid-auto-flow: column;
        grid-column-gap: 10px;
        align-items: center;
      }
    }

    @include responsive_tablet {
      .wide {
        width: 850px;
      }
    }

    @include responsive_large {
      .wide {
        width: 984px;
      }
    }
  }

  .header_megamenu {
    .grid-container {
      width: 100%;
      display: block;
      padding: 0;
    }
    .grid-container.wide {
      max-width: 1200px;
      margin: 0 auto;
    }

    .item-menu {
      color: #047058;
    }

    .item-menu:hover {
      background-color: #047058;
      color: white;
    }

    .popover-item {
      .el-popover__reference-wrapper {
        .el-button {
          border: none;
          font-family: "Times New Roman", Times, serif;
          color: #047058;
          font-size: 17px;
          background-color: transparent;
        }
        .el-button:hover {
          color: white;
          transition: 0s;
        }
      }
    }

    .search {
      background-color: #047058;
      width: 20%;
      border-radius: 10px;
      .el-input {
        padding: 8px 11px;
        .el-input__suffix {
          right: 20px;
        }
        .el-input__inner {
          height: 30px;
        }
      }
    }

    .mobile {
      .sidebar {
        .el-menu {
          border: none;
        }
      }
    }

    @include responsive_tablet {
      .wide {
        width: 850px;
      }
    }

    @include responsive_large {
      .wide {
        width: 984px;
      }
    }
  }
}
</style>
