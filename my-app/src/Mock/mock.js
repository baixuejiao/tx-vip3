// 使用 Mock
import  Mock  from "mockjs";
let Random = Mock.Random;

var data = Mock.mock('http://www.qingmengtech.com/getlist',{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'date':'@date',
        'color':'@rgb',
        'name':'@cname',
        'address':'@county'
    }]
})