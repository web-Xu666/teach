<template>
  <div>
    <el-card class="mt">
      <el-row :gutter="24">
        <el-col :span="18">
          <el-row :gutter="24">
            <el-col :span="8">
              <el-input placeholder="用户昵称"></el-input>
            </el-col>
            <el-col :span="8">
              <el-input placeholder="客户ID"></el-input>
            </el-col>
            <el-col :span="8">
              <el-input placeholder="联系电话"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="24" class="mt" v-show="show">
            <el-col :span="8">
              <el-input placeholder="车牌号"></el-input>
            </el-col>
            <el-col :span="8">
              <el-input placeholder="客户类型"></el-input>
            </el-col>
            <el-col :span="8">
              <el-input placeholder="配送区域"></el-input>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-dropdown>
            <span class="el-dropdown-link" @click="expand">
              {{ show ? "收起" : "展开"
              }}<i
                :class="`el-icon-arrow-${show ? 'up' : 'down'} el-icon--right`"
              ></i>
            </span>
          </el-dropdown>
        </el-col>
        <el-col :span="4" class="tr">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-row>
        <el-col :span="18">
          <el-button type="primary" class="mr">添加客户</el-button>
          <el-button type="primary" class="mr">批量导入</el-button>
          <el-button type="primary" class="mr">导入模板下载</el-button>
          <el-button type="primary" class="mr">导出客户</el-button>
          <el-button type="warning" class="mr">分配</el-button>
          <el-button type="warning" class="mr">查看地图</el-button>
          <el-button type="warning" class="mr" icon="el-icon-plus"
            >新增</el-button
          ></el-col
        >
        <el-col :span="6" class="tr">
          <el-button icon="el-icon-edit">修改</el-button>
          <el-button icon="el-icon-delete" type="danger">删除</el-button>
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
          <el-table-column prop="no" label="id" width="50"></el-table-column>
          <el-table-column prop="date" label="用户昵称"></el-table-column>
          <el-table-column prop="name" label="所属公司"></el-table-column>
          <el-table-column prop="cargo" label="主营业务"></el-table-column>
          <el-table-column prop="count" label="账户余额"></el-table-column>
          <el-table-column prop="start" label="认证状态"></el-table-column>
          <el-table-column prop="end" label="运输里程数"></el-table-column>
          <el-table-column prop="price" label="联系人"></el-table-column>
          <el-table-column prop="needRecive" label="联系电话">
            <template slot-scope="scope">
              {{
                scope.row.needRecive.toString().substring(0, 3) +
                "****" +
                scope.row.needRecive.toString().substring(7)
              }}
            </template>
          </el-table-column>
          <el-table-column
            prop="plateNumber"
            label="公司地址"
          ></el-table-column>
          <el-table-column prop="driver" label="银行卡号"></el-table-column>

          <el-table-column label="操作">
            <template >
             <el-button type="primary" size="mini">详情</el-button>
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
          no: 1,
          date: "山运集团",
          name: "山东运输集团",
          cargo: "纺织品出口",
          count: 10860,
          start: "已认证",
          end: "25000公里",
          price: "李晓华",
          needRecive: 13333333333,
          plateNumber: "北京市朝阳区",
          driver: 57421236987452,
        },
        {
          no: 1,
          date: "山运集团",
          name: "山东运输集团",
          cargo: "纺织品出口",
          count: 10860,
          start: "已认证",
          end: "25000公里",
          price: "李晓华",
          needRecive: 13333333333,
          plateNumber: "北京市朝阳区",
          driver: 57421236987452,
        },
        {
          no: 1,
          date: "山运集团",
          name: "山东运输集团",
          cargo: "纺织品出口",
          count: 10860,
          start: "已认证",
          end: "25000公里",
          price: "李晓华",
          needRecive: 13333333333,
          plateNumber: "北京市朝阳区",
          driver: 57421236987452,
        },
        {
          no: 1,
          date: "山运集团",
          name: "山东运输集团",
          cargo: "纺织品出口",
          count: 10860,
          start: "已认证",
          end: "25000公里",
          price: "李晓华",
          needRecive: 13333333333,
          plateNumber: "北京市朝阳区",
          driver: 57421236987452,
        },
        {
          no: 1,
          date: "山运集团",
          name: "山东运输集团",
          cargo: "纺织品出口",
          count: 10860,
          start: "已认证",
          end: "25000公里",
          price: "李晓华",
          needRecive: 13333333333,
          plateNumber: "北京市朝阳区",
          driver: 57421236987452,
        },
        {
          no: 1,
          date: "山运集团",
          name: "山东运输集团",
          cargo: "纺织品出口",
          count: 10860,
          start: "已认证",
          end: "25000公里",
          price: "李晓华",
          needRecive: 13333333333,
          plateNumber: "北京市朝阳区",
          driver: 57421236987452,
        },
        {
          no: 1,
          date: "山运集团",
          name: "山东运输集团",
          cargo: "纺织品出口",
          count: 10860,
          start: "已认证",
          end: "25000公里",
          price: "李晓华",
          needRecive: 13333333333,
          plateNumber: "北京市朝阳区",
          driver: 57421236987452,
        },
        {
          no: 1,
          date: "山运集团",
          name: "山东运输集团",
          cargo: "纺织品出口",
          count: 10860,
          start: "已认证",
          end: "25000公里",
          price: "李晓华",
          needRecive: 13333333333,
          plateNumber: "北京市朝阳区",
          driver: 57421236987452,
        },
        {
          no: 1,
          date: "山运集团",
          name: "山东运输集团",
          cargo: "纺织品出口",
          count: 10860,
          start: "已认证",
          end: "25000公里",
          price: "李晓华",
          needRecive: 13333333333,
          plateNumber: "北京市朝阳区",
          driver: 57421236987452,
        },
        {
          no: 1,
          date: "山运集团",
          name: "山东运输集团",
          cargo: "纺织品出口",
          count: 10860,
          start: "已认证",
          end: "25000公里",
          price: "李晓华",
          needRecive: 13333333333,
          plateNumber: "北京市朝阳区",
          driver: 57421236987452,
        },
        {
          no: 1,
          date: "山运集团",
          name: "山东运输集团",
          cargo: "纺织品出口",
          count: 10860,
          start: "已认证",
          end: "25000公里",
          price: "李晓华",
          needRecive: 13333333333,
          plateNumber: "北京市朝阳区",
          driver: 57421236987452,
        },
        {
          no: 1,
          date: "山运集团",
          name: "山东运输集团",
          cargo: "纺织品出口",
          count: 10860,
          start: "已认证",
          end: "25000公里",
          price: "李晓华",
          needRecive: 13333333333,
          plateNumber: "北京市朝阳区",
          driver: 57421236987452,
        },
        {
          no: 1,
          date: "山运集团",
          name: "山东运输集团",
          cargo: "纺织品出口",
          count: 10860,
          start: "已认证",
          end: "25000公里",
          price: "李晓华",
          needRecive: 13333333333,
          plateNumber: "北京市朝阳区",
          driver: 57421236987452,
        },
        {
          no: 1,
          date: "山运集团",
          name: "山东运输集团",
          cargo: "纺织品出口",
          count: 10860,
          start: "已认证",
          end: "25000公里",
          price: "李晓华",
          needRecive: 13333333333,
          plateNumber: "北京市朝阳区",
          driver: 57421236987452,
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