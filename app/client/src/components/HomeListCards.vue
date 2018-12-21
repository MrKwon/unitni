<template>
  <v-layout justify-center>
    <v-flex>
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title"
            >
              <v-card flat>
                <v-toolbar height= "55px">
                  <v-layout height= "50px">
                    <v-avatar class= "icon-avatar" size= "40px"
                    >
                      <img
                        :src="card.icon"
                        class= "avatar"
                        alt="avatar">
                    </v-avatar>
                    <v-flex xs12 align-end flexbox>
                      <v-layout class="toolbar-container" column>
                        <span class="headline black--text" v-text="card.title"></span>
                        <span class="desc black--text" v-text="card.desc"></span>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-toolbar>
                <v-img
                  class= "img-box"
                  height="350px"
                  :src="card.src"
                >
                </v-img>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat small fab>
                    <img
                      src="../assets/icon_white_star.png"
                      width="30"
                      height="30" />
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: '학사정보',
        desc: '학교 일정을 전부 모아모아',
        flex: 12,
        src: 'https://raw.githubusercontent.com/MrKwon/unitni/master/img/management_cardnews.png',
        icon: 'https://raw.githubusercontent.com/MrKwon/unitni/master/img/logo/test.png'
      },
      {
        title: 'School Maps',
        desc: '학교에서 길을 잃지 않기 위한 꿀팁 저장소',
        flex: 12,
        src: 'https://raw.githubusercontent.com/MrKwon/unitni/master/img/logo/campusmap.jpg',
        icon: 'https://raw.githubusercontent.com/MrKwon/unitni/master/img/logo/placeholder.png'
      },
      {
        title: '경영대 정보',
        desc: '경영대생을 위한 필수 정보',
        flex: 12,
        src: 'https://raw.githubusercontent.com/MrKwon/unitni/master/ceos.png',
        icon: 'https://raw.githubusercontent.com/MrKwon/unitni/master/img/logo/management_logo.png'
      },
      {
        title: '우리학교',
        desc: '우리학교 학생이라면 모두가 봐야한다!',
        flex: 12,
        src: 'https://raw.githubusercontent.com/MrKwon/unitni/master/img/hongik_card.jpg',
        icon: 'https://raw.githubusercontent.com/MrKwon/unitni/master/img/logo/hongik_logo.png'
      }
    ]
  })
}

</script>

<style scoped>
.container.grid-list-md .layout .flex {
  padding: 0;
}

.toolbar-container {
  position: relative;
  text-align: left;
  padding-left: 16px;
  line-height: 4px;
}

.icon-avatar {
  background-color: #f59597;
}

.headline {
  font-size: small!important;
  font-weight: bold;
}

.desc {
  font-size: small!important;
  padding-bottom: 8px;
}

.v-card__actions {
  height: 50px;
  background-color: #fae1e3;
}

.v-toolbar__content {
  height: 50px;
}

.img-wrapper {
  width: 100%;
}

.img-box {
  border: 1px solid #f59597;
  max-width: 100%;
  height: auto;
}
</style>
