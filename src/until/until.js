export default{
            setTimer:(time)=>{
                const now =new Date().getTime();
                const lastTime =new Date(time).getTime();
                if(now-lastTime>60*1000*60*24*365){
                    return Math.floor((now-lastTime)/(60*1000*60*24*365))+' 年前'
                }else if(now-lastTime>60*1000*60*24*30){
                    return Math.floor((now-lastTime)/(60*1000*60*24*30))+' 个月前'
                }else if(now-lastTime>60*1000*60*24){
                    return Math.floor((now-lastTime)/(60*1000*60*24))+' 天前'
                }else if(now-lastTime>60*1000*60){
                    return Math.floor((now-lastTime)/(60*1000*60))+' 小时前'
                }else  if(now-lastTime>60*1000){
                    return Math.ceil((now-lastTime)/(60*1000))+' 分钟前'
                }else{
                    return ' 刚刚'
                }
            },
            getAllName:(tab)=>{
                switch(tab){
                    case 'good':
                    return '精华'
                    break;
                    case 'ask':
                    return '问答'
                    break;
                    case 'share':
                    return '分享'
                    break;
                    case 'job':
                    return '招聘'
                    break;
                    default :
                    return ''
                    break;
                }
             },
}