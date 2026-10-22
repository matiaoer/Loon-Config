let body = $response.body;
if (body) {
    try {
        let obj = JSON.parse(body);
        if (obj.data) {
            if (obj.data.splash) obj.data.splash = null;
            if (obj.data.adList) obj.data.adList = [];
            if (obj.data.ads) obj.data.ads = [];
        }
        body = JSON.stringify(obj);
    } catch (e) {
        console.log("去广告脚本解析异常: " + e);
    }
}
$done({ body });
