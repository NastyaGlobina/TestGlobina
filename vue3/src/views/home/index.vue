<template>
  <div class="home">
    <aside>
      <div class="wrap">
        <h3>Пользователи</h3>
        <input v-model="filterUsers" type="text" placeholder="найти пользователя" />
        <b-list-group>
          <b-list-group-item v-for="item in fUsers" :key="item.id">
            <div class="user" @click="onClick(item)">
              <b-avatar :src="item.avatar_url"></b-avatar>
              <div class="login">{{ item.login }}</div>
              <div class="select-user">
                <input :id="`chk-${item.id}`" type="checkbox" @click="onCheckClick(item, $event)" />
              </div>
            </div>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div class="wrap">
        <h3>Выбранные Пользователи</h3>
        <input v-model="filterSelected" type="text" placeholder="найти пользователя" />
        <b-list-group>
          <b-list-group-item v-for="item in fSelectedUsers" :key="item.id">
            <div class="user" @click="onClick(item)">
              <b-avatar :src="item.avatar_url"> </b-avatar>
              <div class="login">{{ item.login }}</div>
            </div>
          </b-list-group-item>
        </b-list-group>
      </div>
    </aside>
    <main>
      <img v-show="showWelcome" src="./images/laphie.gif" />
      <HelloWorld v-show="showWelcome" msg="Добро пожаловать!" />
      <b-container>
        <div v-show="!showWelcome" class="user-info">
          <b-list-group>
            <b-list-group-item>Логин: {{ activeUser.login }}</b-list-group-item>
            <b-list-group-item>Имя: {{ activeUser.name }}</b-list-group-item>
            <b-list-group-item>id: {{ activeUser.id }}</b-list-group-item>
            <b-list-group-item>Подписчики: {{ activeUser.followers }}</b-list-group-item>
            <b-list-group-item>Подписки: {{ activeUser.following }}</b-list-group-item>
            <b-list-group-item>Компания: {{ activeUser.company }}</b-list-group-item>
            <b-list-group-item>Локация: {{ activeUser.location }}</b-list-group-item>
          </b-list-group>
        </div>
      </b-container>
    </main>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
import HelloWorld from './components/hello-world.vue'

export default defineComponent({
  name: 'HomePage',
  components: { HelloWorld },
  data() {
    return {
      users: [],
      activeUser: {},
      showWelcome: true,
      selectedUsers: [],
      filterUsers: '',
      filterSelected: '',
    }
  },
  computed: {
    fUsers() {
      console.log(this.filterUsers)
      return this.users.filter(
        (x) =>
          x.login.indexOf(this.filterUsers) >= 0 || x.id.toString().indexOf(this.filterUsers) >= 0
      )
    },
    fSelectedUsers() {
      console.log(this.filterUsers)
      return this.selectedUsers.filter(
        (x) =>
          x.login.indexOf(this.filterSelected) >= 0 ||
          x.id.toString().indexOf(this.filterSelected) >= 0
      )
    },
  },
  mounted() {
    let su = localStorage.getItem('su')
    if (su != null) {
      this.selectedUsers = JSON.parse(su)
    }
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      axios.get('https://api.github.com/users').then((r) => {
        this.users = r.data
        this.$nextTick(() => {
          this.selectedUsers.forEach((x) => {
            let el = document.getElementById(`chk-${x.id}`)
            if (el != null) {
              el.checked = true
            }
          })
        })
        console.log(this.users)
      })
    },
    onClick(item) {
      this.showWelcome = false
      axios.get(`https://api.github.com/users/${item.login}`).then((r) => {
        this.activeUser = r.data
        console.log(this.activeUser)
      })
    },
    onCheckClick(item, e) {
      console.log(e.target.checked)
      if (e.target.checked) {
        this.selectedUsers.push(item)
      } else {
        let i = this.selectedUsers.findIndex((x) => x.id === item.id)
        this.selectedUsers.splice(i, 1)
      }
      localStorage.setItem('su', JSON.stringify(this.selectedUsers))
    },
  },
})
</script>

<style lang="scss">
.home {
  padding-left: 320px;
  aside {
    overflow: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0px;
    left: 0;
    bottom: 0px;
    width: 320px;
    height: 100vh;
    background-color: #eaeaea;
    .wrap {
      overflow: scroll;
      flex: 50% 0 0;
    }
    h3 {
      padding: 4px;
      text-align: center;
      background-color: #dadada;
    }
    .user {
      text-align: left;
      cursor: pointer;
    }
    .login {
      display: inline-block;
      padding-left: 20px;
      width: 210px;
    }
    .select-user {
      display: inline-block;
    }
  }
  .container-sm,
  .container {
    max-width: 250px;
    margin-top: 100px;
  }
}
</style>
