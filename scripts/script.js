window.jsPDF = window.jspdf.jsPDF;
let table1box = document.querySelector('#table');
table1box.style.display = 'none';
// * 节点获取
// 报告所属日期节点
let dateElement = document.querySelector('#date')
// 学生姓名节点
let studentNameElement = document.querySelector('#student-name-ele')
// 获得按钮及诶单
let button = document.querySelector("#get")
// 获取上课时间的节点
let timeElements = document.querySelectorAll('.time')
// 获取课程主题的节点
let subjectNameElements = document.querySelectorAll(".subject-name")
// 获取授课老师的节点
let tearcherNameElements = document.querySelectorAll(".tearch-name")
// 获得学习内容的节点
let learningContentElements = document.querySelectorAll(".learning-content")
// 获得所有的学习状态节点
let learningStatusElements = document.querySelectorAll(".status")
// 获得所有的需要加强的节点
let needmoreElements = document.querySelectorAll('.needmore')
// 获得测试内容节点
let testContentElement = document.querySelector("#test-content-ele")
// 获得闭卷测评节点
let testScoreElement = document.querySelector("#test-score-ele")
// 获得面试测试接地那
let faceScoreElement = document.querySelector("#face-score-ele")
// 获得总和实操节点
let tesrTodoElement = document.querySelector('#test-todo-ele')
// 获得老师点评节点
let tearchSeayElement = document.querySelector("#tearch-seay-ele")


// * 函数创建
function delNoneItem(arr){
    // todo: 删除列表中的空项
    while (arr.includes('')){
        arr.splice(arr.indexOf(''))
    }
    return arr
}

function repliceZero(arr){
    let p1 = [
        "虚心听取别人意见,",
        "善于与人合作,",
        "积极主动的帮助同学,",
        "踊跃发言,",
        ""
    ]
    let p2 = [
        "听讲状态极为认真,",
        "精神饱满,",
        "认真学习课堂知识,",
        "积极踊跃的发言,",
        ""
    ]
    let p3 = [
        "大胆提出和别人不同的问题,",
        "大胆尝试并表达自己的想法,",
        "提出的问题很有创新性,",
        "提出的问题很有意义,",
        ""
    ]
    let p4 = [
        "能条例清晰的表达问题,",
        "能逻辑明确的表达问题,",
        "表达问题的时候逻辑清晰,明确,",
        ""
    ]
    let p5 = [
        "具有创造性思维.",
        "能用不同的方法解决问题.",
        "能有效的独立思考.",
        ""
    ]
    function randitem(list){
        return list[parseInt(Math.random() * list.length)]
    }
    while (arr.includes('0')){
        // ! 未完成自动填充的随机性
        let output = "" + randitem(p1) + randitem(p2) + randitem(p3) + randitem(p4) + randitem(p5)
        arr.splice(arr.indexOf('0'),1,output)
    }
    return arr;
}

function fillmain(date,tearchName,studentName,shangkeshijain,shangketitle,learningContent,learningStatus,needMore,testContent,testScore,faceScore,testTodo,tearchSeay){
    // todo: 内容填写
    // 表头填写
    dateElement.innerHTML = date;
    studentNameElement.innerHTML = studentName;
    // 填写老师姓名
    for (let i = 0 ; i < tearcherNameElements.length ;i++){
        tearcherNameElements[i].innerHTML = tearchName;
    }
    // 填写表格
    for (let i = 0; i < shangketitle.length;i++){
        timeElements[i].innerHTML = shangkeshijain[i];
        subjectNameElements[i].innerHTML = shangketitle[i];
        learningContentElements[i].innerHTML = learningContent[i];
        learningStatusElements[i].innerHTML = learningStatus[i];
        if (needMore[i]){
            needmoreElements[i].innerHTML = needMore[i];
        }else{
            needmoreElements[i].innerHTML = "无";
        }
    }
    testContentElement.innerHTML = testContent;
    testScoreElement.innerHTML = testScore;
    faceScoreElement.innerHTML = faceScore;
    tesrTodoElement.innerHTML = testTodo;
    tearchSeayElement.innerHTML = tearchSeay;

}

button.onclick = function(){
    table1box.style.display = 'block';
    // *获取所有需要的数据
    let dateStart = document.querySelector("#month-start").value; // 获取起始日期
    let dateEnd = document.querySelector('#month-end').value;  // 获得结束日期
    let date = dateStart + '到' + dateEnd
    let tearchName = document.querySelector('#tearch-name').value; // 获得老师姓名
    let studentName = document.querySelector("#student-name").value; //获得学生姓名
    let shangkeshijain = document.querySelector("#shangke-shijian").value.split("\n"); // 获得上课时间
    let shangketitle = document.querySelector('#shangke-title').value.split('\n')
    let learningContent = document.querySelector("#learning-content").value.split("\n"); // 获得学习内容列表
    let learningStatus = document.querySelector("#learning-status").value.split("\n"); // 获得学习状态列表
    let needMore = document.querySelector("#need-more").value.split("\n"); // 获得改进列表
    // *获得测试部分的数据
    // 获得测试内容
    let testContent = document.querySelector("#test-content").value;
    // 获得卷面分数
    let testScore = document.querySelector("#test-score").value;
    // 获得面试分数
    let faceScore = document.querySelector("#face-score").value;
    // 获得实操分数
    let testTodo = document.querySelector("#test-todo").value;
    // 获得老师点评
    let tearchSeay = document.querySelector("#tearch-seay").value;

    // console.log(`日期${date};老师姓名;${tearchName};学生姓名:${studentName};学习内容列表${learningContent};学习状态列表${learningStatus};需要改进${needMore};测试内容${testContent};卷面分数${testScore};面试分数${faceScore};实操分数${testTodo};老师点评:${tearchSeay}`)

    // * 开始数据预处理
    // 检测列表是否包含空项 , 并去除
    learningContent = delNoneItem(learningContent)
    learningStatus = delNoneItem(learningStatus)
    shangkeshijain = delNoneItem(shangkeshijain)
    shangketitle = delNoneItem(shangketitle)
    needMore = delNoneItem(needMore)

    // 自动填充状态中的 "0"
    console.log(learningStatus);
    learningStatus = repliceZero(learningStatus);
    console.log(learningStatus);


    // *开始数据填写
    // 时间 , 主题 , 老师 , 内容 , 状态 , 加强的填写
    fillmain(date,tearchName,studentName,shangkeshijain,shangketitle,learningContent,learningStatus,needMore,testContent,testScore,faceScore,testTodo,tearchSeay)

    // * 生成 PDF

    html2canvas(document.getElementById("table1")).then(
        (canvas) => {
            //返回图片dataURL，参数：图片格式和清晰度(0-1)
            var pageData = canvas.toDataURL("image/jpeg", 1.0);
            //方向默认竖直，尺寸ponits，格式a4[595.28,841.89]
            var pdf = new jsPDF("", "pt", "a4");
            //addImage后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
            pdf.addImage(
                pageData,
                "JPEG",
                45,
                40,
                500,
                (500 / canvas.width) * canvas.height
            );
            //  添加第二页
            html2canvas(document.getElementById("table2")).then(
                (canvas2) => {
                    var pageData2 = canvas2.toDataURL(
                        "image/jpeg",
                        1.0
                    );
                    //addImage后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
                    pdf.addPage();
                    pdf.addImage(
                        pageData2,
                        "JPEG",
                        45,
                        45,
                        500,
                        (500 / canvas.width) * canvas.height
                    );
                    pdf.output("dataurlnewwindow");
                }
            );
        }
    );
    setTimeout(() => {
        table1box.style.display = 'none';
    }, 1000);
}