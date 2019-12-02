<template>
     <div id="mesing">
        <div class="top">
            <div class="iconfont icon-shouqi_m" @click="fanhu"></div>
            <div>我的音乐</div>
            <div class="iconfont icon-paixingbang"></div>
        </div>

        <div class="type">
            <div>
                <div class="iconfont icon-FM com"></div>
                私人FM
            </div>
            <div>
                <div class="iconfont icon-dian com"></div>
                最新电音
            </div>
            <div>
                <div class="iconfont icon-wanshang com"></div>
                Sati空间
            </div>
            <div>
                <div class="iconfont icon-xinaixin com"></div>
                私藏推荐
            </div>
            <div>
                <div class="iconfont icon-shipin com"></div>
                直播
            </div>
        </div>

        <div class="download">
            <div>
                <div style="text-align: center;">下载队列</div>
            </div>
            <div>
                <div class="iconfont icon-local"></div>
                <div class="xqlist">
                    <div>本地音乐</div>
                    <div class="iconfont icon-right"></div>
                </div>
            </div>
            <div>
                <div class="iconfont icon-shipin"></div>
                <div class="xqlist">
                    <div>最近播放</div>
                    <div class="iconfont icon-right"></div>
                </div>
            </div>
            <div>
                <div class="iconfont icon-diantai"></div>
                <div class="xqlist">
                    <div>我的电台</div>
                    <div class="iconfont icon-right"></div>
                </div>
            </div>
            <div>
                <div class="iconfont icon-wode"></div>
                <div class="xqlist">
                    <div>我的收藏</div>
                    <div class="iconfont icon-right"></div>
                </div>
            </div>
            <div class="gedan">
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>

        <div class="nav">
            <div>
                <div class="iconfont icon-diantai iconb">
                </div>发现
            </div>
            <div>
                <div class="iconfont icon-shipin iconb"></div>视频
            </div>
            <div>
                <div class="iconfont icon-local iconb"
                    style="color:#fff;width: 32px;height: 32px;background-color: #FD402D;border-radius: 30px;line-height: 32px;margin-left:30%">
                </div>我的
            </div>
            <div>
                <div class="iconfont icon-shequ iconb"></div>云村
            </div>
            <div>
                <div class="iconfont icon-wode iconb"></div>账号
            </div>
            <div class="navc" style="height:48px">   
    </div>
        </div>

    </div>
</template>
<script>
export default {
    name:'Me',
    methods: {
        fanhu(){
            this.$router.go(-1)
        },
    },
}
</script>

<style scoped>
   #mesing {
            padding: 0px 12px;
        }

        .top {
            height: 60px;
            line-height: 50px;
            color: #111;
            font-size: 17px;
            display: flex;
        }

        .top div:nth-child(2) {
            width: 80%;
            text-align: center;
        }

        .top div:nth-child(1),
        .top div:nth-child(3),
        .top div:nth-child(4) {
            padding: 0 4%;
            font-size: 20px;
        }


        .type {
            height: 46px;
            display: flex;
            text-align: center;
            line-height: 23px;
            margin-top: 10px
        }

        .type>div {
            flex: 1;
            font-size: 12px;
            color: #666;
        }

        .com {
            width: 36px;
            height: 36px;
            background-color: #FD402D;
            margin-left: 30%;
            border-radius: 20px;
            font-size: 20px;
            line-height: 32px;
            color: #fff
        }


        .download {
            margin-top: 24px;
            border-top: 1px #eee solid;
            border-bottom: 6px #eee solid;
        }

        .download>div {
            display: flex;
            height: 40px;
            line-height: 40px;
        }
        .xqlist{
            border-bottom: 1px #eee solid;
            display: flex;
            width: 100%;

        }
       .xqlist>div{
           width: 50%;
       }
       .xqlist>div:nth-child(2){
           text-align: right;
       }
        .nav {
            position: fixed;
            bottom: 0;
            display: flex;
            width: 100%;
            box-shadow: 0 0 4px #999;
            padding: 6px 11px 0 11px;
            left: 0;
            font-size: 14px;
            color: #333;
            background-color: #fff;
        }

        .nav>div {
            flex: 1;
            width: 25%;
            text-align: center;
        }

        .iconb {
            font-size: 22px;
            color: #666;
        }


</style>