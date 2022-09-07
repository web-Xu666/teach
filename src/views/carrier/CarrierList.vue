<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mt">
      <el-row :gutter="16">
        <el-col :span="6">
          <el-input placeholder="请输入运单号"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width: 100%"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="6" class="tr">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">充值</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="编号id"></el-table-column>
        <el-table-column prop="sname" label="简称"></el-table-column>
        <el-table-column prop="lsc" label="道路许可证"></el-table-column>
        <el-table-column prop="tel" label="联系人/电话"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="time" label="注册时间"></el-table-column>
        <el-table-column prop="name" label="承运商名称"></el-table-column>
        <el-table-column prop="code" label="信用代码"></el-table-column>
        <el-table-column prop="address" label="注册地址"></el-table-column>
        <el-table-column prop="tip" label="是否上报"></el-table-column>
        <el-table-column prop="grades" label="信用分"></el-table-column>
        <el-table-column label="操作" fixed="right" width="180">
          <template>
            <el-button size="mini">编辑</el-button>
            <el-button type="danger" size="mini">删除</el-button>
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
  </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb";

export default {
  mixins: [breadCrumb],
  data() {
    return {
      tableData: [
        {
          id: 874563,
          sname: "山东运输",
          lsc: "D3568974512684",
          tel: "张三/18866686868",
          type: "自有车",
          time: "2000-02-15",
          name: "山东运输有限公司",
          code: "无",
          address: "山东青岛",
          grades: 90,
          tip: "否",
        },
        {
          id: 874563,
          sname: "山东运输",
          lsc: "D3568974512684",
          tel: "张三/18866686868",
          type: "自有车",
          time: "2000-02-15",
          name: "山东运输有限公司",
          code: "无",
          address: "山东青岛",
          grades: 90,
          tip: "否",
        },
        {
          id: 874563,
          sname: "山东运输",
          lsc: "D3568974512684",
          tel: "张三/18866686868",
          type: "自有车",
          time: "2000-02-15",
          name: "山东运输有限公司",
          code: "无",
          address: "山东青岛",
          grades: 90,
          tip: "否",
        },
        {
          id: 874563,
          sname: "山东运输",
          lsc: "D3568974512684",
          tel: "张三/18866686868",
          type: "自有车",
          time: "2000-02-15",
          name: "山东运输有限公司",
          code: "无",
          address: "山东青岛",
          grades: 90,
          tip: "否",
        },
        {
          id: 874563,
          sname: "山东运输",
          lsc: "D3568974512684",
          tel: "张三/18866686868",
          type: "自有车",
          time: "2000-02-15",
          name: "山东运输有限公司",
          code: "无",
          address: "山东青岛",
          grades: 90,
          tip: "否",
        },
        {
          id: 874563,
          sname: "山东运输",
          lsc: "D3568974512684",
          tel: "张三/18866686868",
          type: "自有车",
          time: "2000-02-15",
          name: "山东运输有限公司",
          code: "无",
          address: "山东青岛",
          grades: 90,
          tip: "否",
        },
        {
          id: 874563,
          sname: "山东运输",
          lsc: "D3568974512684",
          tel: "张三/18866686868",
          type: "自有车",
          time: "2000-02-15",
          name: "山东运输有限公司",
          code: "无",
          address: "山东青岛",
          grades: 90,
          tip: "否",
        },
        {
          id: 874563,
          sname: "山东运输",
          lsc: "D3568974512684",
          tel: "张三/18866686868",
          type: "自有车",
          time: "2000-02-15",
          name: "山东运输有限公司",
          code: "无",
          address: "山东青岛",
          grades: 90,
          tip: "否",
        },
        {
          id: 874563,
          sname: "山东运输",
          lsc: "D3568974512684",
          tel: "张三/18866686868",
          type: "自有车",
          time: "2000-02-15",
          name: "山东运输有限公司",
          code: "无",
          address: "山东青岛",
          grades: 90,
          tip: "否",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
</style>