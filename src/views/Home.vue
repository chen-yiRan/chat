<template>
  <div class="home">
    <template>
      <el-table
          :data="tableData"
          style="width: 100%"
          @row-click="rowclick">
        <el-table-column
            label="消息列表"
            >
          <template slot-scope="scope">
            <div style="display: flex; flex-direction: row; align-items: center;">
              <el-avatar size="medium" :src="circleUrl"></el-avatar>
              <div style="display: flex; flex-direction: column;">
                <span style="margin-left: 10px;">{{ scope.row.username }}</span>
                <span style="margin-left: 10px;">{{ scope.row.lastmsg }}</span>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {

  },
  data(){
    return {
      tableData : [
        {
          username: '1',
          lastmsg: 'first'
        },
        {
          username: '2',
          lastmsg: 'tow'
        }
      ],
      circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    }
  },
  methods :{
    rowclick(row, column, event){
      console.log(row);
      this.$router.push("/chat");
    }
  }
}
</script>
