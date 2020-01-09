<template>
    <div class="task">
      <me-navbar class="header">
        <i class="iconfont icon-fanhui"
           slot="left"
           @click="showPopup1"
        >
          <action-sheet
            v-model="show1"
            :actions="actions1"
            @select="onSelect"
            description="是否保存当前信息作为草稿，以便下次进来继续编辑"
          />
        </i>
        <i slot="title">发布任务-{{title}}</i>
        <i slot="right"
           class="iconfont"
           @click="showPopup2"
           v-show="save"
        >
          <action-sheet
            v-model="show2"
            :actions="actions2"
            @select="Select"
            description="进入草稿将会丢失刚才编辑的内容，您确认进入草稿吗？"
          />
          草稿
        </i>
      </me-navbar>
      <div class="task-context">
        <happy-scroll>
          <div v-if="index == 1" class="context">
            <task-explain />
            <task-step />
            <task-limit class="task-limit"/>
          </div>
          <div v-if="index == 2">
            <task-questionnaire />
          </div>
        </happy-scroll>
      </div>
      <div class="footer">
        <span>立即提交</span>
      </div>
    </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import { ActionSheet } from 'vant';
  import TaskExplain from './taskExplain';
  import TaskStep from './taskStep';
  import TaskLimit from './taskLimit';
  import { HappyScroll } from 'vue-happy-scroll';
  import MeScroll from 'base/scroll';
  import TaskQuestionnaire from './taskQuestionnaire';
  export default {
    name: 'task',
    components: {
      MeNavbar,
      MeScroll,
      ActionSheet,
      TaskExplain,
      TaskStep,
      TaskLimit,
      HappyScroll,
      TaskQuestionnaire
    },
    data() {
      return {
        visible: true,
        show1: false,
        show2: false,
        actions1: [
          { name: '确认', index: 1 },
          { name: '取消', index: 2 }
        ],
        actions2: [
          { name: '确认', index: 1 },
          { name: '取消', index: 2 }
        ],
        save: false,
        title: '',
        index: ''
      };
    },
    created() {
      this.ShowSave();
      this.getTitle();
    },
    methods: {
      getTitle() {
        this.title = this.$route.query.content;
        if (this.$route.query.content === '个人问卷' || this.$route.query.content === '联盟问卷') {
          this.index = 2;
        } else {
          this.index = 1;
        }
      },
      showPopup1() {
        this.show1 = true;
      },
      onSelect(item) {
        if (item.index === 1) {
          localStorage.setItem('draft', JSON.stringify());
          this.$router.go(-1);
        } else {
          this.$router.go(-1);
        }
      },
      showPopup2() {
        this.show2 = true;
      },
      ShowSave() {
        let sketch = localStorage.getItem('draft');
        if (sketch === null) {
          this.save = false;
        } else {
          this.save = true;
        }
      },
      Select(item) {
        if (item.index === 1) {
          localStorage.getItem('draft');
        } else {
          this.show2 = false;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .task {
    height: 94%;
  }
  .header {
    &.mine-navbar {
       background-color: transparent;
    }

    .iconfont {
      color: black;
    }

  }
  .task-context {
    width: 100%;
    height: 100%;
  }
  .footer {
    width: 25%;
    height: 38px;
    position: fixed;
    right: 15px;
    bottom: 25px;
    border-radius: 20px;
    background-color: #FDE344;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer>span {
    font-size: 15px;
    color: black;
    margin: auto;
  }
  .task-limit {
    margin-bottom: 30%;
  }
</style>
