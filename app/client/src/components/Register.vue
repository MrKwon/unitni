<template>
  <v-app>
    <v-layout row>
      <page-header />
      <v-flex>
        <div>
          <v-toolbar flat dense color="#f7a9a9">
            <v-toolbar-title align="center">회원가입</v-toolbar-title>
          </v-toolbar>
          <div class="pl-3 pr-3 pt-2 pb-2">
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <form
              name="unitni-form"
              autocomplete="off">
                <v-container fluid grid-list-xl>
                  <v-layout wrap align-center>
                    <v-text-field
                      label="이메일"
                      color="#f7a9a9"
                      v-model="email" />
                    <v-text-field
                      label="비밀번호"
                      type="password"
                      color="#f7a9a9"
                      v-model="password"
                      autocomplete="new-password" />
                    <v-text-field
                      label="이름"
                      color="#f7a9a9"
                      v-model="name" />
                    <v-text-field
                      label="닉네임"
                      color="#f7a9a9"
                      v-model="nick" />
                    <v-select
                      :items="school"
                      label="학교"
                      solo
                      v-model="selectedSchool"
                    ></v-select>
                    <v-select
                      :items="college"
                      label="단과대학"
                      solo
                      v-if="selectedSchool"
                      v-model="selectedCollege" />
                    <v-select
                      :items="depart"
                      label="학과"
                      solo
                      v-if="selectedCollege && selectedSchool"
                      v-model="selectedDepart" />
                  </v-layout>
                  <div
                    class="error"
                    v-html="error" />
                  <br>
                  <v-btn
                    round
                    class="register_btn"
                    color="#f7a9a9"
                    @click="register">
                    회원가입
                  </v-btn>
                </v-container>
            </form>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import AuthService from '@/services/AuthService'
import PageHeader from '@/components/PageHeader'

function selector (college) {
  if (college === '공과') {
    return ['도시공학', '토목공학', '전자전기공학', '컴퓨터공학', '산업공학', '신소재공학', '화학공학', '기계시스템디자인공학']
  } else if (college === '경영') {
    return ['경영학']
  } else if (college === '문과') {
    return ['영어영문학', '독어독문학', '불어불문학', '국어국문학']
  } else if (college === '법과') {
    return ['법학']
  } else if (college === '사범') {
    return ['수학교육', '국어교육', '영어교육', '역사교육']
  } else if (college === '미술') {
    return ['동양화', '회화', '판화', '조소', '목조형가구학', '예술', '금속조형디자인', '도예유리', '섬유미술패션디자인', '자율전공', '시각디자인', '산업디자인']
  } else if (college === '경제') {
    return ['경제학']
  } else if (college === '자율전공학부') {
    return ['자율전공']
  } else if (college === '건축') {
    return ['건축학', '실내건축학']
  }
}

export default {
  data () {
    // 최초 렌더링시
    return {
      email: '',
      password: '',
      name: '',
      nick: '',
      error: null,
      selectedSchool: '',
      selectedCollege: '',
      selectedDepart: '',
      school: ['홍익대학교'],
      college: ['공과', '경영', '문과', '법과', '사범', '미술', '경제', '자율전공학부', '건축'],
      depart: selector(this.selectedCollege)
    }
  },
  beforeUpdate () {
    // resource 낭비 심함.. 해결할 필요가 있음
    if (this.selectedCollege) {
      this.depart = selector(this.selectedCollege)
    }
  },
  components: {
    PageHeader
  },
  methods: {
    async register () {
      console.log(this.school, this.college)
      try {
        const response = await AuthService.register({
          email: this.email,
          password: this.password,
          name: this.name,
          nick: this.nick,
          school: this.selectedSchool,
          college: this.selectedCollege,
          depart: this.selectedDepart
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('main')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.child-flex>*, .flex {
  position: relative;
  height: 100%;
  top: -5px;
}

.error {
  color: red;
    background-color: white !important;
    border-color: yellow !important;
}

.register_btn {
  color: white;
}
</style>
