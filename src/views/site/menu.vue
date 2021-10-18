<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          대한예수교침례회
        </v-list-item-title>
        <v-list-item-subtitle>
          수회교회 성도주소록
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list>
      <v-list-group
        v-for="(item, i) in items"
        :key="i"
        v-model="item.active"
        :prepend-icon="item.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.subItems"
          :key="subItem.title"
          :to="subItem.to"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>
<script>
export default {
  props: ['footer'],
  data () {
    return {
      items: [
        {
          title: '관리',
          active: true,
          icon: 'mdi-home',
          subItems: [
            {
              title: '성도 관리',
              to: '/'
            },
            {
              title: '차량 관리',
              to: '/about'
            },
            {
              title: '등록 관리',
              to: '/about'
            },
            {
              title: '공지 관리',
              to: '/about'
            },
            {
              title: '출결 관리',
              to: '/about'
            }
          ]
        },
        {
          title: '정보',
          active: true,
          icon: 'mdi-account',
          subItems: [
            {
              title: '기본 정보',
              to: '/xxx'
            },
            {
              title: '안내 정보',
              to: '/xxx'
            }
          ]
        }
      ],
      active: true
    }
  }
}
</script>
