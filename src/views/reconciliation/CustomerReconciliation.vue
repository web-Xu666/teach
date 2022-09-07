<template>
  <div>
    <el-card class="mt">
      <el-row :gutter="24">
        <el-col :span="18">
          <el-row :gutter="24">
            <el-col :span="8">
              <el-input placeholder="客户名称"></el-input>
            </el-col>
            <el-col :span="8">
              <el-input placeholder="创建时间"></el-input>
            </el-col>
            <el-col :span="8">
              <el-input placeholder="账单状态"></el-input>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4" class="tr">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="mt">
      <el-card class="mt">
        <el-table :data="tableData">
          <el-table-column
            type="index"
            width="50"
            label="序号"
          ></el-table-column>
      
          <el-table-column prop="no" label="对账单号"></el-table-column>
          <el-table-column prop="time" label="账单时间"></el-table-column>
          <el-table-column prop="pay" label="付款对象"></el-table-column>
          <el-table-column prop="status" label="账单状态">
            <template slot-scope="scope">
                {{scope.row.status==1?"已对账":(scope.row.status==2?"核对中":"未对账")}}
            </template>
          </el-table-column>
          <el-table-column prop="status2" label="开票状态">
            <template slot-scope="scope">
                {{scope.row.status2==1?"已开票":"未开票"}}
            </template>
          </el-table-column>
          <el-table-column prop="total" label="总支出金额"></el-table-column>
          <el-table-column prop="isError" label="异常状态"></el-table-column>
          <el-table-column prop="creatTime" label="创建时间"></el-table-column>
          <el-table-column prop="createPerson" label="创建人"></el-table-column>


          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              
             <el-button type="success" size="mini" v-if="scope.row.status==1&&scope.row.status2==1">已确认</el-button>
             <el-button type="primary" size="mini" v-else-if="scope.row.status==1&&scope.row.status2==2">开票</el-button>
             <el-button type="danger" size="mini" v-else >取消对账</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          class="fr mt mb"
          :current-page="1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </el-card>
    </el-card>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      show: false,
      tableData: [
        {
          no:2022569875244,
          time:"2022-02-03",
          pay:"张三",
          status:3,//1已对账 2核对中 3未对账
          status2:2,//1.已开票 2未开票
          total:20000,
          isError:"否",
          creatTime:"2022-03-04",
          createPerson:"王五"
        },
        {
          no:2022569875244,
          time:"2022-02-03",
          pay:"张三",
          status:3,//1已对账 2核对中 3未对账
          status2:2,//1.已开票 2未开票
          total:20000,
          isError:"否",
          creatTime:"2022-03-04",
          createPerson:"王五"
        },
        {
          no:2022569875244,
          time:"2022-02-03",
          pay:"张三",
          status:1,//1已对账 2核对中 3未对账
          status2:2,//1.已开票 2未开票
          total:20000,
          isError:"否",
          creatTime:"2022-03-04",
          createPerson:"王五"
        },
        {
          no:2022569875244,
          time:"2022-02-03",
          pay:"张三",
          status:1,//1已对账 2核对中 3未对账
          status2:1,//1.已开票 2未开票
          total:20000,
          isError:"否",
          creatTime:"2022-03-04",
          createPerson:"王五"
        },
        {
          no:2022569875244,
          time:"2022-02-03",
          pay:"张三",
          status:2,//1已对账 2核对中 3未对账
          status2:2,//1.已开票 2未开票
          total:20000,
          isError:"否",
          creatTime:"2022-03-04",
          createPerson:"王五"
        },
        {
          no:2022569875244,
          time:"2022-02-03",
          pay:"张三",
          status:3,//1已对账 2核对中 3未对账
          status2:1,//1.已开票 2未开票
          total:20000,
          isError:"否",
          creatTime:"2022-03-04",
          createPerson:"王五"
        },
        {
          no:2022569875244,
          time:"2022-02-03",
          pay:"张三",
          status:1,//1已对账 2核对中 3未对账
          status2:2,//1.已开票 2未开票
          total:20000,
          isError:"否",
          creatTime:"2022-03-04",
          createPerson:"王五"
        },
        {
          no:2022569875244,
          time:"2022-02-03",
          pay:"张三",
          status:1,//1已对账 2核对中 3未对账
          status2:2,//1.已开票 2未开票
          total:20000,
          isError:"否",
          creatTime:"2022-03-04",
          createPerson:"王五"
        },
        
      ],
    };
  },
  methods: {
    expand() {
      this.show = !this.show;
    },
  },
};
</script>
  
  <style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 18px;
}
</style>