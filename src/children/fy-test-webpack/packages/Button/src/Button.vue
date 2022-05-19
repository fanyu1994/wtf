<template>
  <div class="button-page">
    <div class="line">
      <div>
        <p>小于四字按钮</p>
        <div><a-button type="primary" size="small">两字</a-button></div>
        <br />
        <div><a-button type="primary" size="middle">两字</a-button></div>
        <br />
        <div><a-button type="primary" size="large">两字</a-button></div>
      </div>
      <div>
        <p>大于四字按钮</p>
        <div><a-button type="primary" size="small">四四字按钮</a-button></div>
        <br />
        <div><a-button type="primary" size="middle">四四字按钮</a-button></div>
        <br />
        <div><a-button type="primary" size="large">四四字按钮</a-button></div>
      </div>
      <div>
        <p>Primary Button 主要按钮</p>
        <div><a-button type="primary" size="small">四字按钮</a-button></div>
        <br />
        <div><a-button type="primary" size="middle">四字按钮</a-button></div>
        <br />
        <div><a-button type="primary" size="large">四字按钮</a-button></div>
      </div>
      <div>
        <p>Secondary Button 次要按钮</p>
        <div><a-button size="small">次要按钮</a-button></div>
        <br />
        <div><a-button size="middle">次要按钮</a-button></div>
        <br />
        <div><a-button size="large">次要按钮</a-button></div>
      </div>
    </div>
    <div class="line">
      <div>
        <p>Dashed Button 虚框按钮</p>
        <div><a-button type="dashed" size="small">虚框按钮</a-button></div>
        <br />
        <div><a-button type="dashed" size="middle">虚框按钮</a-button></div>
        <br />
        <div><a-button type="dashed" size="large">虚框按钮</a-button></div>
      </div>
      <div>
        <p>Disable Button 失效按钮</p>
        <div><a-button disabled size="small">失效按钮</a-button></div>
        <br />
        <div><a-button disabled size="middle">失效按钮</a-button></div>
        <br />
        <div><a-button disabled size="large">失效按钮</a-button></div>
      </div>
      <div>
        <p>Danger Button 危险按钮</p>
        <div>
          <a-button type="primary" danger size="small">危险按钮</a-button>
        </div>
        <br />
        <div>
          <a-button type="primary" danger size="middle">危险按钮</a-button>
        </div>
        <br />
        <div>
          <a-button type="primary" danger size="large">危险按钮</a-button>
        </div>
      </div>
      <div>
        <p>Text Button 文字按钮</p>
        <div><a-button type="link" size="small">文字按钮</a-button></div>
        <br />
        <div><a-button type="link" size="middle">文字按钮</a-button></div>
        <br />
        <div><a-button type="link" size="large">文字按钮</a-button></div>
        <br />
        <div><a-button type="text" danger size="small">文字按钮</a-button></div>
        <br />
        <div>
          <a-button type="text" danger size="middle">文字按钮</a-button>
        </div>
        <br />
        <div><a-button type="text" danger size="large">文字按钮</a-button></div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "ButtonPage",
  components: {},
};
</script>
<style scoped>
.button-page .line {
  margin-bottom: 40px;
  display: flex;
}

.button-page .line > div {
  flex: 1;
}
</style>
