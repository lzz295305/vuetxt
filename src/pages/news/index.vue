<template>
    <div class="news">
      <news-header />
      <news-nav />
      <div class="news-info">
        <ul>
          <li>
            <div class="chat-info">
              <img src="./img/nav-item-1.png" alt="" class="chat-img">
              <div class="chat-linkman">
                <div class="chat-title">
                  <span class="chat-name">
                    琦琦baby
                  </span>
                  <span class="chat-time">
                    2020-01-02
                  </span>
                </div>
                <div class="chat-container">
                  消息
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="chat-info">
              <img src="./img/nav-item-1.png" alt="" class="chat-img">
              <div class="chat-linkman">
                <div class="chat-title">
                  <span class="chat-name">
                    琦琦baby
                  </span>
                  <span class="chat-time">
                    2020-01-02
                  </span>
                </div>
                <div class="chat-container">
                  消息
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import NewsHeader from './header';
  import NewsNav from './nav';
  export default {
    name: 'index',
    components: {
      NewsHeader,
      NewsNav
    }
  };
</script>

<style scoped>
  .news-info {
    margin-left: 3%;
    margin-right: 3%;
  }
  .news-info>ul>li {
    border-bottom: 1px solid #eee;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .chat-info {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: left;
  }

  .chat-img {
    width: 15%;
    height: 15%;
    border-radius: 5px;
  }
  .chat-linkman {
    margin-left: 15px;
    width: 100%;
  }
  .chat-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .chat-name {
    font-size: 15px;
    color: black;
  }
  .chat-container {
    margin-top: 5px;
  }
</style>
