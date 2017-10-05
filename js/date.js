/*
专门用于创建数据的文件
 */
var l='&lt;';
var r='&gt;';
var dateHTML=[
	{
        biaoqian:'xmp标签',
        yongtu:'代码可以不被网页解析',
        codeShow:
		            `${l}div${r}<br />
		                这里是外面容器<br />
		                ${l}div${r}这里是里面容器${l}/div${r}<br />
		            ${l}/div${r}`,
        xmpYuanMa:`${l}xmp${r} <br />
                        ${l}div${r} <br />
                            这里是外面容器 <br />
                            ${l}div${r}这里是里面容器${l}/div${r} <br />
                        ${l}/div${r} <br />
                   ${l}/xmp${r}`
    },{
        biaoqian:'xmp标签',
        yongtu:'代码可以不被网页解析',
        codeShow:
            `${l}div${r}<br />
                这里是外面容器<br />
                ${l}div${r}这里是里面容器${l}/div${r}<br />
            ${l}/div${r}`,
        xmpYuanMa:`${l}xmp${r} <br />
                        ${l}div${r} <br />
                            这里是外面容器 <br />
                            ${l}div${r}这里是里面容器${l}/div${r} <br />
                        ${l}/div${r} <br />
                   ${l}/xmp${r}`
    }
];