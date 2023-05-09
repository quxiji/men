//id.face

// 创建 style 元素
var style = document.createElement('style');
// 将 <style> 元素添加到页面头部
document.head.appendChild(style);

// 获取样式表对象
var sheet = style.sheet;

// 添加样式
sheet.insertRule('.bolck{}');
sheet.insertRule('.class_box{left:0px;right:0px;top:0px;bottom:0px;height:100%;width:100%;z-index:-1;border-radius:0px 0px 0px 0px;border:0px solid #ffffff;background:rgba(00,00,00,0);color:rgba(00,00,00,0);display:block;}');
sheet.insertRule('.class_box_beijing {absolute:absolute;position:fixed;left:0px;right:0px;top:0px;bottom:0px;height:;width:;z-index:0;border-radius:0px 0px 0px 0px;border:0px solid #ffffff;background:rgba(00,00,00,1);color:rgba(00,00,00,1);display:block;}');
sheet.insertRule('.class_box_form {background:rgba(0,0,0,1);background-size:100%;color:rgba(255,255,255,1);}');
sheet.insertRule('.class_box_yaogan{absolute:absolute;position:fixed;min-left:5px;min-right:5px;min-top:5px;min-bottom:5px;max-height:50%;max-width:90%;z-index:11;border-radius:5px;border:0px solid rgba(250,250,250,0);box-shadow: 1px 2px 3px rgba(230,230,230,1);background:rgba(0,0,0,0);color:rgba(00,00,00,1);overflow:auto;display:block;}');
sheet.insertRule('.class_box_text,.class_iframe_data,.class_anjian_tijiao,.class_tool,.class_tool_add,.class_tool_textarea,.class_add_data,.class_add_iframe_data{position:relative;   left:;right:;top:;bottom:;height:;width:;max-width:96%;z-index:1;border-radius:5px 5px 5px 5px;border:2px solid rgba(250,250,250,0);margin:3px;box-shadow: 1px 2px 3px rgba(200,200,200,1);background:rgba(00,00,00,1);color:rgba(255,255,255,1);outline:none;line-height: 15px;font-size:13px;overflow:auto;resize:none;display:block;}');
sheet.insertRule('.class_box_draw{absolute:absolute;position:fixed;z-index:9;border-radius:5px;border:0px solid rgba(250,250,250,0);box-shadow: 1px 2px 3px rgba(230,230,230,1);background:rgba(0,0,0,0);color:rgba(00,00,00,1);overflow:auto;display:block;}');
sheet.insertRule(':root{ --tishi-color: rgba(255,000,000,1); }');
sheet.insertRule('.class_tool:hover{ color: var(--tishi-color); box-shadow: 1px 2px 3px rgba(255,000,000,1); }');
sheet.insertRule('.class_tool_add{left:;z-index:2;max-width:calc(96%); margin:3px 3px 3px 3px; pointer-events:auto;}');
sheet.insertRule('.class_form,.class_anjian_tijiao{display:none;}');
sheet.insertRule('.class_iframe_data{background:rgba(50,50,50,1);display:none;}');
sheet.insertRule('.class_box_add{absolute:absolute;position:fixed; left:1%;right:1%;top:1%;min-bottom:1%;max-height:98%;width:98%;background:rgba(0,0,0,0);color:rgba(0,0,0,0);overflow:auto;display:block;}');
sheet.insertRule('.class_add_data{absolute:absolute;left:0%;right:0%;height:400px;width:100%;z-index:1;border-width: 0px 0px 0px 0px;border-style:solid;border-color: rgba(250,250,250,1);box-shadow:1px 2px 3px rgba(255,255,
                 
var data_get=""
var translate_data = "close";
var translate_text = "";


/*问题 选取卡顿 参考https://rbyers.github.io/scroll-latency.html*/
//入口 点击
function rukou_onclick(who){
  who = who.id;
  
  //关闭 修改时间06月13日17时 参考https://developer.mozilla.org/zh-CN/docs/Web/API/Window/close
    if   (who == "id_tool_exit")             { tool_clear (); tool_in ("moment" ,"暂停关闭城门"); tool_in ("tishi" ,"2秒后可退出"); data_get = window.setTimeout(function(){ location.reload(); }, 1500);   }
    if   (who == "id_tool_moment")           { tool_clear (); tool_in ("tishi" ,"暂停成功"); clearTimeout(data_get); }
  //待_自动消失开关
    if   (who == "id_tool_id" )              { tool_clear (); }
  
  if     (who == "id_box_beijing")           { tool_clear (); tool_touch (who ,"location"); tool_in ("id",who); tool_in ("shua" ,"积·简"); tool_in("user","⩀"); tool_in ("zhiling","指令框");  }
    if   (who == "id_tool_user")             { tool_clear (); tool_in ("id",who); add_phonenum ("id_box_yaogan",id_mbox_user_phonenum); id_box_phonenum.focus (); }
    if   (who == "id_tool_shua")             { window.location.reload(); }
    if   (who == "id_tool_iframe_reload" )   { var whov = document.getElementById ("id_tool_id").value; document.getElementById(whov).contentWindow.location.reload(); tool_clear ();}

    if   (who == "id_tool_zhiling")          { tool_rocker_center ();  tool_clear (); tool_in ("id",who);  add_form ("id_box_yaogan"); id_box_text.focus (); }

    if   (who == "id_tool_draw")             { var data_zhiling = document.getElementById ('id_box_text').value; tool_copyToClip(data_zhiling); tool_rukou_draw("apk/id/id_draw.face" ,data_zhiling);  }

      if (who == "id_anjian_tijiao")         { var data_zhiling = document.getElementById ('id_box_text').value; tool_copyToClip(data_zhiling); tool_in("1",data_zhiling); var whov = document.getElementById ("id_tool_id").value;  tool_clear ();  data_post (whov ,data_zhiling); }

  if     (who == "textarea")                 {   }
    if   (who == "id_tool_data_write")       { var whov = document.getElementById ("id_tool_id").value; data_baocun (whov); }
    if   (who == "id_tool_open")             { var whov = document.getElementById ("id_tool_id").value; tool_clear (); url_open = add_data_analysis_url(whov); data = "id"+"\r"+"\n"+"/_open"+"\r"+"\n"+"/#http://47.97.64.181/quxiji/"+url_open; tool_in("url_open",data); data_post ("url_open",data); }
    if   (who == "id_tool_history_clear")    { var whov = document.getElementById ("id_tool_id").value; data_delete (whov+"_title"); data_delete (whov+"_kuang"); tool_clear (); }
    if   (who == "id_tool_update")           { var whov = document.getElementById ("id_tool_id").value; tool_clear ();  tool_rukou_update ("apk/id/id_update.face" ,whov); }
    if   (who == "id_tool_anjian")           { var whov = document.getElementById ("id_tool_id").value; tool_mini_keyboard_ajax("apk/id/id_mini_keyboard.face"); }
    if   (who == "id_tool_backup")           { var whov = document.getElementById ("id_tool_id").value; tool_clear ();  tool_rukou_draw ("apk/id/id_draw.face" ,"backup"); }
    if   (who == "id_tool_textarea")         { var whov = document.getElementById ("id_tool_id").value; var data= tool_rukou_textarea("apk/id/id_textarea.face", "anjian", whov); if( data){ tool_clear(); data_add_last( "id_box_yaogan", data); } } //加载标准文件 id_xxx.face

    //全屏编辑框 if   (who == "id_tool_all_screen")       { tool_text_screen (document.getElementById ("id_tool_id").value ,"all");}
    //翻译英译汉 if   (who == "id_tool_cursor_translate") { var whov = document.getElementById ("id_tool_id").value; translate_data = ""; tool_clear (); tool_in ("data","translate_open"); translate_text = document.getElementById(whov).value; }

  if    (who == "id_box_yaogan")             { tool_touch (who ,"follow"); } 
  
   //if    (who == "id_box_tizhongshengao")  { tool_clear (); tool_touch (who ,"location"); tool_in ("id",who); tool_in ("shua" ,tool_gettime ()); tool_in ("zhiling","指令框");}

}



//入口 帮助 拖动
function rukou_tuodong (who) {   }
function rukou_tuodong_dai (who) {
  id_data  = who.id;
  if ("id_tool_id_touch" != who.id)             { tool_clear ();}
  
  //var obj_yaogan = document.getElementById ("id_box_yaogan"); obj_yaogan.style.left = '0px'; obj_yaogan.style.top = '0px';
  id_first = id_data.substring(0,11);

  if ("id_box_get_" ==id_data.substring(0,11) ) { tool_in("get","get");}
  if ("id_tool_id" == who.id)                   { tool_in("ok","ok"); }
  if ("id_tool_user" == who.id)                 { tool_in("id_mbox",id_mbox_user_phonenum); }

  else { tool_in('id_touch','说明:'+who.id); }
} 

//加载工具 更新 加载 并进入 入口 修改时间#202301060020
function tool_rukou_update (url ,id){ if (!document.getElementById ("id_ajax_get_js_" +url ) ){ tool_ajax_tishi_in(url ,rukou_update (id));  } rukou_update (id); }
function rukou_update (id){ tool_ajax_tishi_clear(); };//等待draw.face载入覆盖本方法

//加载工具 装入 扩展 时间20220908
function tool_add (name, func, event){ func(name, event); }

//加载工具 迷你 键盘 加载 并进入 入口 修改时间#202301060020
function tool_mini_keyboard_ajax (url){ if (!document.getElementById ("id_ajax_get_js_" +url) ){  tool_ajax_tishi_in(url, rukou_mini_keyboard()); } rukou_mini_keyboard();   }
function rukou_mini_keyboard (){ tool_ajax_tishi_clear(); } //等待draw.face载入覆盖本方法

//加载工具 画板 加载 并进入 入口 修改时间#202301060020
function tool_rukou_draw (url ,draw_zhiling){ if (!document.getElementById ("id_ajax_get_js_" +url) ){ tool_ajax_tishi_in(url, rukou_draw (draw_zhiling));  } rukou_draw (draw_zhiling);    }
function rukou_draw (draw_zhiling){ tool_ajax_tishi_clear(); } //等待draw.face载入覆盖本方法

//加载工具 更新 加载 并进入 入口 修改时间#202301060020
window.onload = function(){document.addEventListener("keydown", tool_rukou_anjian ("apk/id/id_anjian.face") ); }
function tool_rukou_anjian (url){ if (!document.getElementById ("id_ajax_get_js_" +url ) ){ tool_ajax_tishi_in(url ,rukou_anjian ());  } rukou_anjian (); }
function rukou_anjian (){ return tool_ajax_tishi_clear(); } //等待draw.face载入覆盖本方法

//加载工具 textera 加载 并进入 入口 创建时间#20230319
function tool_rukou_textarea (url ,draw_zhiling, whov){ if (!document.getElementById ("id_ajax_get_js_" +url) ){ tool_ajax_tishi_in(url, rukou_textarea (draw_zhiling, whov));  } return rukou_textarea (draw_zhiling, whov);    }
function rukou_textarea (draw_zhiling, whov){ tool_ajax_tishi_clear(); return false; } //等待textarea.face载入覆盖本方法


//工具 复制内容到剪切板 内容 时间20220908 参考籍https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand 参考https://blog.csdn.net/sunnyzyq/article/details/85065022 参考制表符https://blog.csdn.net/fanxueya1322/article/details/86612340 参考奇偶https://blog.csdn.net/qq_40816360/article/details/88295099
function tool_copyToClip(contents) { const textarea = document.createElement('textarea');  textarea.value = contents;  document.body.appendChild(textarea);  textarea.select();  if (document.execCommand('copy')) { document.execCommand('copy'); }  document.body.removeChild(textarea);   }



//测试使用 console.clear()

//工具 触摸 触点
function tool_touch (id ,do_touch) { var obj_background = document.getElementById (id); if ("location" == do_touch ){ obj_background.addEventListener ('touchstart',tool_touch_location ("id_box_yaogan"),{ passive: true } ); obj_background.removeEventListener ('touchstart',tool_touch_location ("id_box_yaogan"),{ passive: true } ); } }

//工具 触摸 where
function tool_touch_location (id){ var obj_yaogan = document.getElementById (id); obj_yaogan.style.left = event.clientX + 'px'; obj_yaogan.style.top = event.clientY + 'px'; obj_yaogan.style.posotion = "absolute"; obj_yaogan.style.position = "fixed";}

//工具 触摸 where 参考籍 HTML DOM 事件 w3cschool
//function tool_touch_where(event){ x=event.clientX; y=event.clientY; var obj_yaogan = document.getElementById ("id_box_yaogan"); obj_yaogan.style.left = event.pageX + 'px'; obj_yaogan.style.top = event.pageY + 'px'; tool_in("xy","(" + x + ","+y+ ")" ); }
function tool_touch_where(id){  x=event.clientX; y=event.clientY; var obj_yaogan = document.getElementById (id);  tool_in("xy","触点位(" + x + ","+y+ ")" ); }
function tool_touch_where_textera(){ x=event.clientX; y=event.clientY;  tool_in("xy","(" + x + ","+y+ ")" );   }
function tool_touch_where_out(){ x=event.touches[0].clientX; y=event.touches[0].clientY;  return( "(" + x + ","+y+ ")" ) ; }

//工具 触摸 禁止右键
function tool_touch_prohibit_reight (){ document.oncontextmenu = function (){ return false;} }

//工具 触摸 允许右键
function tool_touch_admit_reight (){ document.oncontextmenu = function (){ return true;} }

tool_no_back ();
//工具 禁止 返回 修改时间06月13日17时
function tool_no_back () { history.pushState(null, null, null); window.addEventListener('popstate', function(event) { history.pushState(null, null,null); tool_clear (); tool_in ("exit" ,"退出城门"); tool_in ("tixing" ,"保存好代码了吗");} ); }
window.onbeforeunload = function(){ tool_in ("exit" ,"退出城门"); tool_in ("tixing" ,"保存好代码了吗"); return "are you ok"; }
function tool_no_close () { tool_in ("exit" ,"退出城门"); tool_in ("tixing" ,"保存好代码了吗"); }

//工具 添加 工具箱 摇杆
function tool_add_yaogan (id){  if( null == document.getElementById('id_box_yaogan')){  data_add(id,"<div id='id_box_yaogan' class='class_box_yaogan' onload='tool_no_back ();' onclick='rukou_onclick(this)'> </div>"); } }

//工具 取出
function tool_delete(id) { data_delete('id_tool_'+id); }

//工具 改变
function tool_change(id ,data) { document.getElementById ('id_tool_'+id).value = data; }

//工具 取出
function tool_out(id) { if (document.getElementById ('id_tool_'+id) ) return document.getElementById ('id_tool_'+id).value; }

//工具 装入
function tool_in (id ,data)     { if (!document.getElementById ('id_tool_'+id) ) {data_add("id_box_yaogan", "<input id='id_tool_"+id+"' name='name_tool_"+id+"' class='class_tool' type='submit' onclick='rukou_onclick(this)' value='"+data+"'>"); if( id == "id")document.getElementById ("id_tool_id").style.display = "none";}  else { tool_change(id ,data) } } //ontouchstart='gtouchstart(this)' ontouchend='gtouchend(this)' ontouchmove='gtouchmove(this)' value='"+data+"'>"); }
function tool_in_last (id ,data){ if (!document.getElementById ('id_tool_'+id) ) data_add_last("id_box_yaogan", "<input id='id_tool_"+id+"' name='name_tool_"+id+"' class='class_tool' type='submit' onclick='rukou_onclick(this)' value='"+data+"'>"); } // ontouchstart='gtouchstart(this)' ontouchend='gtouchend(this)' ontouchmove='gtouchmove(this)' value='"+data+"'>"); }
function tool_in_last_br ()     { data_add_last("id_box_yaogan", "<br>"); } 

//工具 装入 监听版 时间06月12日14时 参考https://www.w3school.com.cn/jsref/met_element_addeventlistener.asp
//function tool_in      (id ,data){ if (!document.getElementById ('id_tool_'+id) ){ data_add     ("id_box_yaogan", `<input id="id_tool_${id}" class='class_tool' name="name_tool_${id}" type="submit" value="${data}">` ); document.getElementById ('id_tool_'+id).addEventListener("click", function(){ rukou_onclick(this) } ,{ passive: true } ); document.getElementById ('id_tool_'+id).addEventListener("dblclick", function(){ _ondblclick(this) } ,{ passive: true } ); }  document.getElementById ('id_tool_'+id).addEventListener("touchstart", function(){ gtouchstart(this) },{ passive: true });  document.getElementById ('id_tool_'+id).addEventListener("touchend", function(){ gtouchend(this) },{ passive: true }); document.getElementById ('id_tool_'+id).addEventListener("touchmove", function(){ gtouchmove(this) },{ passive: true });}  
//function tool_in_last (id ,data){ if (!document.getElementById ('id_tool_'+id) ){ data_add_last("id_box_yaogan", `<input id="id_tool_${id}" class='class_tool' name="name_tool_${id}" type="submit" value="${data}">` ); document.getElementById ('id_tool_'+id).addEventListener("click", function(){ rukou_onclick(this) } ,{ passive: true } ); document.getElementById ('id_tool_'+id).addEventListener("dblclick", function(){ _ondblclick(this) } ,{ passive: true } ); }  document.getElementById ('id_tool_'+id).addEventListener("touchstart", function(){ gtouchstart(this) },{ passive: true });  document.getElementById ('id_tool_'+id).addEventListener("touchend", function(){ gtouchend(this) },{ passive: true }); document.getElementById ('id_tool_'+id).addEventListener("touchmove", function(){ gtouchmove(this) },{ passive: true });}  

//加载完执行
window.onload = function(){ tool_add_box(); tool_add_box_js("id_box"); tool_add_box_add("id_box"); tool_add_box_beijing("id_box_add"); tool_add_beijing(); tool_add_yaogan ("id_box");} 

//box_beijing.addEventListener("touchstart", function(){ gtouchstart(this) },{ passive: true });  box_beijing.addEventListener("touchend", function(){ gtouchend(this) },{ passive: true }); box_beijing.addEventListener("touchmove", function(){ gtouchmove(this) },{ passive: true }); }
//onclick="_onclick(this)" ondblclick="_ondblclick(this)" ontouchstart="gtouchstart(this)" ontouchend="gtouchend(this)" ontouchmove="gtouchmove(this)" onmousedown="gtouchstart(this)" onmouseup="gtouchend(this)" onmousemove="gtouchmove(this)"

//工具 添加 背景
function tool_add_beijing (){  var box_beijing= document.getElementById ("id_box_beijing"); box_beijing.addEventListener("click", function(){ _onclick(this) } ); box_beijing.addEventListener("dblclick", function(){ _ondblclick(this) }  );  }

//工具 添加 总盒子
function tool_add_box(){ if(!document.getElementById('id_box')){ var box =document.createElement("div"); box.id = "id_box"; box.className = "class_box"; document.body.appendChild( box ); } }

//工具 添加 盒子 添加盒
function tool_add_box_add (id){ if( null == document.getElementById('id_box_add')){  data_add(id,"<div id='id_box_add' class='class_box_add'> </div>"); } }

//工具 添加 盒子 js盒
function tool_add_box_js (id){ if( null == document.getElementById('id_box_js')){  data_add(id,"<div id='id_box_js' class='class_box_add'> </div>"); } }

//工具 添加 盒子 背景
function tool_add_box_beijing (id){ if( null == document.getElementById('id_box_beijing')){  data_add(id,"<div id='id_box_beijing' class='class_box_beijing'> </div>"); } }


//工具 删除 延时
function tool_clear_time (id ,time){ var click_Timer = window.setTimeout(function(){ data_delete (id); click_Timer = null;  }, time);  }

//工具 清空
function tool_clear (){ data_change("id_box_yaogan", "");}

//工具 手机虚拟 键盘弹出
function tool_keyboard_clear (){ document.activeElement.blur(); }

//工具 文本框 双击
function tool_text_ondblclick (id){ tool_text_screen (id ,"small"); tool_touch_admit_reight (); tool_keyboard_clear(); tool_clear (); if (translate_data != "close" ){ translate_data = "close"; setTimeout (function(){ tool_clear (); tool_in ("data","translate_close"); },500); } document.getElementById( id).focus(); tool_touch(id ,"location"); tool_in("id",id);  tool_in("backup" ,"backup");  tool_in("update" ,"update"); tool_in("history_clear","clear"); tool_in("open","open"); /*tool_in("cursor_translate","translate"); tool_in ("all_screen" ,"all_screen");*/ tool_in("data_write","write"); tool_in("zhiling","指令框"); }

//工具 文本框 单击
function tool_text_onclick (ele){ tool_touch_prohibit_reight (); tool_clear(); tool_in("id",ele.id); tool_in("textarea" ,"textarea"); tool_in("anjian" ,"anjian");  if(translate_data != "close"){ tool_in("cursor_where",tool_text_get_cursor(ele)); tool_keyboard_clear(); tool_text_cut_cursor(); }  }

//工具 文本框 光标位置
function tool_text_get_cursor (ele){ let cursorPos = 0; if (document.selection){ const selectRange = document.selection.createRange(); selectRange.moveStart('character', -ele.value.length); cursorPos = selectRange.text.length; } else if(ele.selectionStart || ele.selectionStart === '0') { cursorPos = ele.selectionStart; } return cursorPos; } 

//工具 文本框 光标提取
function tool_text_cut_cursor (){ var data_new =id_tool_cursor_where.value; if(translate_data == "")translate_data = data_new; else{ var translate_value = translate_text.substr(translate_data,data_new -translate_data);  tool_in("translate_value",translate_value); translate_data = ""; tool_text_post_cut(translate_value);} }

//工具 文本框 提取提交
function tool_text_post_cut ($data){ data_post ("id_tool_translate","qing"+"\r"+"\n"+"/_translate"+"\r"+"\n"+"/#translate_value"+"\r"+"\n"+"/:"+$data);  }

//工具 文本框 分析提交
function tool_text_analysis_cut (data){  var $DO = ""; var $STR_F = "/" +"#"; var $str_f = data.indexOf($STR_F ,0);  if( $str_f > -1 )$DO = data.substr($str_f +$STR_F.length ,data.length -$str_f -$STR_F.length); return $DO; }

//工具 box 显示提交
function tool_box_tijiao_block (){ document.getElementById('id_anjian_tijiao').style.display="block"; tool_in_last("draw","draw"); }

//工具 box 显示保存
function tool_box_phonenum_save_block (id){ id_mbox_user_phonenum = id.value; }

//工具 text 更改 提示
function tool_text_genggai (id){ document.getElementById(id+"_title").style="box-shadow: 1px 2px 3px rgba(255,000,000,1);";}

//工具 文本框 屏幕 大小
function tool_text_screen (id ,size){ var obj_text =document.getElementById (id); var obj_text_title =document.getElementById (id +"_title");if (size == "all" ){ obj_text_title.style ="display:none;"; obj_text.style = "absolute:absolute;position:fixed;left:0%;right:0%;height:100%;width:100%;z-index:100;" } else{ obj_text.style ="absolute:absolute;position:relative;left:0%;right:0%;height:400px;width:100%;z-index:1;";} }

//工具 摇杆 居中
function tool_rocker_center (){ var obj_yaogan =document.getElementById ("id_box_yaogan"); if (parseInt (obj_yaogan.style.top)> 300 ) obj_yaogan.style.top = 300 +"px"; }

//工具 iframe 双击
function tool_iframe (id){ tool_clear(); tool_touch(id ,"location"); tool_in("id",id); tool_in("history_clear","clear"); tool_in("zhiling","指令框");tool_in("iframe_reload","reload");}

//工具 显示 显隐
function tool_xianyin(id){ var tai=document.getElementById(id).style.display; var xianyin; if(tai=="none"){xianyin="block"; }else{xianyin='none';  } document.getElementById(id).style.display=xianyin; }

//工具 时间 获取
function tool_gettime(){ var date = new Date(); var M= 1 +date .getMonth(); if(M <10)M= "0"+M; var D= date .getDate(); if(D <10)D= "0"+D;  var H= date .getHours(); if(H <10)H= "0"+H; var N= date .getMinutes(); if(N <10)N= "0"+N; var S= date .getSeconds(); if(S <10)S= "0"+S; return M +''+ D +''+ H +''+ N +''+ S;}

//工具 唯一key 获取 05月28日21时 参考https://www.jianshu.com/p/1deee52cee79
function tool_getUuiD(randomLength){ return Number(Math.random().toString().substr(2,randomLength) + Date.now()).toString(36); }


//数据 添加 打开
function add_open (box ,box_id ,box_data){ data_add ("id_box_add" ,box); iframe_change (box_id ,box_data); }

function add_3d_open (box ,box_id ,box_data){ data_add_last ("id_box_add" ,box); }

//数据 添加 编辑 textarea 特殊符号乱码
function add_editor (box ,box_id ,box_data){ data_add_last ("id_box_add" ,box); var obj_textarea =document.getElementById (box_id); obj_textarea.focus(); data_change (box_id ,box_data); tool_keyboard_clear();  var obj =obj_textarea.parentNode.parentNode; var style = obj.getBoundingClientRect(); obj.style.position="relative";}

//数据 添加 编辑
function add_editor_update_result (id){ document.getElementById(id+"_title").style="box-shadow: 1px 2px 3px rgba(255,255,0,1);"; }
function add_editor_write_result (id){ document.getElementById(id+"_title").style="box-shadow: 1px 2px 3px rgba(255,255,255,1);"; }
function tool_text_onfocus (id){ document.getElementById(id).style="box-shadow: 1px 2px 3px rgba(255,255,255,1);"; var obj =document.getElementById(id).parentNode.parentNode; var style = obj.getBoundingClientRect(); obj.style.zIndex="999";}
function tool_text_onblur (id){ document.getElementById(id).style="box-shadow: 0px 0px 0px 0px rgba(255,255,255,1);"; var obj =document.getElementById(id).parentNode.parentNode; var style = obj.getBoundingClientRect(); obj.style.zIndex="1"; }

//数据 添加结果 分析
function add_data_analysis (data){ var $DO = ""; var $STR_F = "/_"; var $STR_E = "\n"; var $str_f = data.indexOf($STR_F ,0); var $str_e = data.indexOf($STR_E ,$str_f +$STR_F.length); if( $str_f > -1 && $str_e > -1 && $str_e > $str_f)$DO = data.substr($str_f +$STR_F.length,$str_e -$str_f -$STR_F.length); return $DO; }
function add_data_analysis_id (data){ var $DO = ""; var $STR_F = "/#"; var $STR_E = "\n"; var $str_f = data.indexOf($STR_F ,0); var $str_e = data.indexOf($STR_E ,$str_f +$STR_F.length);  if( $str_f > -1 && $str_e > -1 && $str_e > $str_f)$DO = data.substr($str_f +$STR_F.length,$str_e -$str_f -$STR_F.length); if( $str_e == -1)$DO = data.substr($str_f +$STR_F.length,data.length -$str_f -$STR_F.length); return $DO; }
function add_data_analysis_url (data){ var $DO = ""; var $STR_F = "#"; var $STR_E = ""; var $str_f = data.indexOf($STR_F ,0); var $str_e = data.indexOf($STR_E ,$str_f +$STR_F.length); if( $str_f > -1 && $str_e > -1 && $str_e > $str_f)$DO = data.substr($str_f +$STR_F.length,data.length -$str_e); return $DO; }

//数据 历史 记录  onmouseover 和 onmouseout 事件可用于当用户将鼠标移至 HTML 元素上或移出时触发某个函数 也可使用监听器 element.addEventListener("mouseover", myFunction); element.addEventListener("click", mySecondFunction); element.addEventListener("mouseout", myThirdFunction);
function add_history (id ,data){
  //console.log(add_history.name +"\n" +data);
  //console.log(add_history.name +"id" +"\n" +add_data_analysis_id(data));
  tool_clear();
  var name =  tool_gettime() +"#" +add_data_analysis_id(data);
  var tool_text = "onclick='tool_clear(); tool_xianyin(this.value);' ondblclick=' tool_text_ondblclick(this.value);' "; //pc端文本框滚动异常 onmouseover='tool_text_ondblclick(this.value)'  ontouchmove='gtouchmove(this)'  ";
  var tool_iframe = `onclick="tool_clear(); tool_xianyin(this.value+'_kuang')" ondblclick=" tool_iframe(this.value)" `;
  var id_f = "id_box_get_";
  var data_textarea = "<input id ='"+id_f +name+"_title' class='class_tool_add' "+tool_text+" type='submit' value='"+id_f +name+"'/><div id='"+id_f +name+"_kuang'><textarea id='"+id_f +name+"' class='class_add_data' wrap ='off' onfocus='tool_text_onfocus(this.id)' onblur='tool_text_onblur(this.id)' oninput='tool_text_genggai(this.id)' onclick='tool_text_onclick(this)' ondblclick='tool_text_ondblclick(this.id)' ></textarea></div>";
  var data_iframe = "<input id ='"+id_f +name+"_title' class='class_tool_add' "+tool_iframe+" type='submit' value='"+id_f +name+"'/><div id='"+id_f +name+"_kuang'><object id='"+id_f +name+"' class='class_add_iframe_data'  ondblclick='rukou_onclick(this)' data=''></object></div>";
  var data_3d_iframe = `<input id ='`+id_f +name+`_title' class='class_tool_add' `+tool_iframe+` type='submit' value='`+id_f +name+`'/><div id='`+id_f +name+`_kuang' class='class_add_iframe_data'><object id='`+id_f +name+`' class='class_add_iframe_data'  data='`+add_data_analysis_id(data)+`'></object></div>`;

  name = id_f+name;
  var $DO = add_data_analysis (data);
  

  if ("ok_write" ==$DO ){ data_get = ""; add_editor_write_result (id); }
  if ("editor" ==$DO ){ data_get = ""; add_editor (data_textarea ,name ,data); }
  if ("open" ==$DO ){ data_get = ""; data =add_data_analysis_id(data); add_3d_open (data_3d_iframe ,name ,data);  }
  if ("translate" ==$DO ){ data_get = ""; tool_in ("id" ,tool_text_analysis_cut (data) );  }
  if ("" !=data_get )tool_in ("add_data_get" ,data );
  //if ("" ==data_get)tool_in ("add_do" ,$DO );

  //var obj =document.getElementById(name).parentNode.parentNode; var style = obj.getBoundingClientRect(); obj.style.pointerEvents = "none";
 
  return name;
}


//工具 ajax 加载 提示 创建时间#202301060010
function tool_ajax_tishi_in(url ,callback) { var fn = function(){ if (!document.getElementById ("tishi_ajax_in_do") ){ document.getElementById ("tishi_ajax_in_do").value= "ok"; }  }; tool_ajax_get_js( url );}

//工具 ajax 加载完成后 清除 提示 创建时间#202301060010
function tool_ajax_tishi_clear(){  tool_delete("tishi_ajax_ing");  tool_clear_time('id_tool_tishi_first' ,500); tool_clear_time('id_tool_tishi_ajax_in' ,1000); tool_clear_time('id_tool_tishi_ajax_in_ok' ,1500); tool_clear_time('id_tool_tishi_ajax_in_do' ,3000); }

//工具 ajax 加载 js 完成后执行被覆盖的方法 修改时间#202301060020
function tool_ajax_get_js(id ,callback){ if (!document.getElementById ("id_ajax_get_js_" +id) ){ var xhr = new XMLHttpRequest; xhr.open('get',id,true); fn = callback || function(){ document.getElementById ("tishi_ajax_in_do").value= "ok"; }; xhr.onreadystatechange = function(){ if( xhr.readyState == 4 ){ if( xhr.status >=200 && xhr.status < 300 || xhr.status == 304 ){ var script = document.createElement('script'); script.id = 'id_ajax_get_js_' +id; script.type = 'text/javascript'; script.text = xhr.responseText; document.getElementById('id_box_js').appendChild(script); script.onload = function(){  fn(); };} } };  xhr.addEventListener('progress', tool_ajax_tishi_ing( xhr) );  xhr.addEventListener('load', tool_ajax_tishi_ok( xhr) ); xhr.send(null); } }

//工具 ajax 加载 js 加载进度 创建时间#20232031
function tool_ajax_tishi_ing( xhr){ 
  tool_in_last("tishi_first","首次使用功能"); 
  tool_in_last("tishi_ajax_ing","正在载入");
  if ( xhr.lengthComputable ) {
    const percentComplete = xhr.loaded / xhr.total * 100;
    document.getElementById ("tishi_ajax_ing").vlaue="网络获取"+ "(" +Math.round( percentComplete, 2 ) +"%)["+ Math.floor(xhr.total/1000)/1000+ "M]";
  }
}

//工具 ajax 加载 js 加载成功 创建时间#20232031
function tool_ajax_tishi_ok( xhr){ tool_in_last("tishi_ajax_in_do","再次点击功能键"); tool_ajax_tishi_clear();}

//数据 保存
function data_baocun (id){ var data = document.getElementById(id_tool_id.value).value; data = "id"+"\r"+"\n"+"/_write"+"\r"+"\n"+data; tool_clear(); add_form("id_box_yaogan");  id_box_text.focus(); id_box_text.value = data; var data_zhiling = document.getElementById('id_box_text').value; tool_clear(); data_post(id ,data_zhiling); }

//数据 保存结果
function data_baocun_res (id){ var $data = "no"; setTimeout(function(){ $data = iframe_get();  if($data == "ok_write"){ document.getElementById(id+"_title").style="box-shadow: 1px 2px 3px rgba(255,255,255,1);"; tool_clear(); } },500); }

//数据 发收
function data_post (id ,data_in){ /*console.log("沙盒"+"\n"+id+"\n"+data_in); */ add_form("id_box_yaogan"); data_change('id_box_text',data_in);   add_iframe("id_box_yaogan"); form_post('id_form'); document.getElementById('id_iframe_data').onload = function(){ tool_in("post_get_ok" ,"加载完成"); data_get = iframe_get();  return add_history (id ,data_get);} } //setTimeout(function(){ data_get = iframe_get();   add_history (id ,data_get); },800); }

//数据 发收 替换
function data_io (data_in){ add_form("id_box_form"); data_change('id_box_text',data_in); add_iframe("id_box_form"); form_post('id_form'); setTimeout(function(){ var data = iframe_get(); alert(data);  },700); }

//数据 更改
function data_change (id ,data){ document.getElementById(id).innerHTML = data; return "data_add(ok)"; }

//数据 添加
function data_add (id ,data){ var newtext=document.createElement("div"); newtext.id = "id_add_div_"+tool_getUuiD(5);  newtext.innerHTML= data; var list=document.getElementById(id); list.insertBefore(newtext,list.childNodes[0]); return "data_add(ok)"; }
function data_add_last (id ,data){ var newtext=document.createElement("div"); newtext.id = "id_add_div_"+tool_getUuiD(6);  newtext.innerHTML= data; var list=document.getElementById(id); list.appendChild(newtext); return "data_add(ok)"; }


//数据 删除
//function data_delete (id){ var child=document.getElementById(id); if(child){ child.parentNode.removeChild(child);}  }
function data_delete (id){ var child=document.getElementById(id); if(child){ child.parentNode.parentNode.removeChild(child.parentNode); } }

//数据 取出
function data_get (id){ var data = document.getElementById(id).innerHTML; return data; }

//数据 收
function iframe_get (){ var obj = document.getElementById('id_iframe_data'); var ok ="no"; if(obj != null){ ok = obj.contentWindow.document.body.innerHTML;}  return ok; }

//数据 更改
function iframe_change (id ,data){ var ok = document.getElementById(id).contentWindow;  if(ok != null){  ok.document.write(data); ok.document.close(); }else{ok = "no";} return ok; }

//数据 发-->
function form_post (id){ document.getElementById(id).submit();  }

//数据 添加 发 表单
function add_form (id){ data_add(id,"<div id='id_box_form' class='class_box_form' onclick='rukou_onclick(this)'> <form id='id_form' class='class_form' action='http://47.97.64.181/quxiji/quxiji.php' method='Post' target='name_iframe_data' enctype='multipart/form-data'> </form> </div> <textarea id='id_box_text' name='name_box_text' class='class_box_text' form='id_form' oninput='tool_box_tijiao_block()'></textarea> <div class ='class_jiange'></div> <input id='id_anjian_tijiao' class='class_anjian_tijiao' type='submit' form='id_form' onclick='rukou_onclick(this)' value='post' /><div class ='class_jiange'></div>"); }

//数据 添加 phone num
var id_mbox_user_phonenum ="";
function add_phonenum (id ,data){ data_add(id,"<input id='id_box_phonenum' name='name_box_phonenum' class='class_box_text' oninput='tool_box_phonenum_save_block(this)'  value='"+data+"'>"); }

//数据 添加 user

//数据 添加 收 盒子 //修改沙盒 禁止js运行 时间06月20日13时 参考https://www.runoob.com/tags/att-iframe-sandbox.html-->
function add_iframe (id){ if(document.getElementById('id_iframe_data')){ alert('add_iframe(iframe_have)');}else{ data_add(id,`<iframe id='id_iframe_data' name='name_iframe_data' class='class_iframe_data'  ondblclick='rukou_onclick(this)' src='' sandbox='allow-same-origin allow-scripts'>归心常积</iframe><div class ='class_jiange'></div>`);} }

//数据 添加 3d 盒子
function add_3d_iframe (id,url){ if(document.getElementById('id_iframe_data')){ alert('add_iframe(iframe_have)');}else{ data_add(id,"<iframe id='id_iframe_data' name='name_iframe_data' class='class_iframe_data'  ondblclick='rukou_onclick(this)' src='"+ url +"'></iframe><div class ='class_jiange'></div>");} }


//长按 拖动 功能 参考https://blog.csdn.net/weixin_35951275/article/details/117947051-->
var timeOutEvent=null;
function gtouchstart(who) {  timeOutEvent = setTimeout(longPress, 800);    tool_in_last('touch_s','触起点' /*+ tool_touch_where_out();*/ ); tool_clear_time('id_tool_touch_s', 200); };      
function gtouchend(who)   { clearTimeout(timeOutEvent);                   tool_in_last('touch_e','触终点' ); tool_clear_time('id_tool_touch_e', 200); };
function gtouchmove(who)  { clearTimeout(timeOutEvent);                   tool_in_last('touch_m','触拖动' /*+ tool_touch_where_out() + who.id */ ); tool_clear_time('id_tool_touch_m', 200); rukou_tuodong(who); };      
function longPress(who)   {                                               tool_in_last('touch_l','触长按'); tool_clear_time('id_tool_touch_l', 1000); }
 
//双击 单击 功能  参考#https://my.oschina.net/jsan/blog/123181--> 
var clickTimer = null;
function _onclick(who){  if(clickTimer) { window.clearTimeout(clickTimer); clickTimer = null; } clickTimer = window.setTimeout(function(){  tool_clear ();  }, 200); }
function _ondblclick(who){  if(clickTimer) { window.clearTimeout(clickTimer); clickTimer = null; }  rukou_onclick(who); }


