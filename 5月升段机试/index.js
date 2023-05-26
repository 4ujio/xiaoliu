export default {
  //渲染
  getList: function (data) {
    return new Promise((resolve, rejectg) => {
      $.ajax({
        url: "http://47.94.4.201/index.php/index/teacher/teacherlist",
        type: "get",
        data: data,
        dataType: "json",
        success: function (res) {
          resolve(res);
        },
      });
    });
  },
  //删除
  del: function (index) {
    console.log(index);
    return new Promise((resolve, rejectg) => {
      $.ajax({
        url:
          "http://47.94.4.201/index.php/index/teacher/delteacher?id=" + index,
        type: "get",
        dataType: "json",
        success: function (data) {
          resolve(data);
        },
      });
    });
  },
  //添加
  adds: function () {
    return new Promise((resolve, rejectg) => {
      $.ajax({
        url: "http://47.94.4.201/index.php/index/index/addteacher",
        type: "post",
        data: {
          name: $("#newname").val(),
          sex: $("#newsex").val(),
          iphone: $("#newiphone").val(),
          birthdata: "2023-2-28",
          nick: $("#newni").val(),
          teachertype: $("#newteach").val(),
        },
        dataType: "json",
        success: function (data) {
          resolve(data);
        },
      });
    });
  },
  //修改
  xiu: function (dataId) {
    return new Promise((resolve, rejectg) => {
      $.ajax({
        url: "http://47.94.4.201/index.php/index/index/upteacher?id=" + dataId,
        type: "post",
        data: {
          name: $("#xiu_name").val(),
          id: dataId,
          birthdata: $("#xiu_birt").val(),
          nick: $("#xiu_nick").val(),
        },
        dataType: "json",
        success: function (data) {
          resolve(data);
        },
      });
    });
  },
  //搜索
  sou: function () {
    return new Promise((resolve, rejectg) => {
      $.ajax({
        url: "http://47.94.4.201/index.php/index/teacher/getsearch",
        type: "post",
        data: {
          name: $("#sou_inp").val(),
        },
        dataType: "json",
        success: function (data) {
          resolve(data);
        },
      });
    });
  },
};
